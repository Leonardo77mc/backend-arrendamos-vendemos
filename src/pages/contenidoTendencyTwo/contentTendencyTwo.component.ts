import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { TendencyService } from '../../services/tendency.services';

declare var $;

@Component({
    selector: 'app-contentcomponentwo',
    templateUrl: './contentComponentTwo.component.html',
    styleUrls: ['./contentTendencyTwo.component.css']
})
export class ContentTendencyTwoComponent implements OnInit {
    title = 'Contenido';
    param;
    id;
    tendency: any = {};
    tendencys = [];

    constructor(private router: Router,
                private _tendencyService: TendencyService) {
    }

    ngOnInit() {
        $('.parallax').parallax();
        this.param = localStorage.getItem('idTendency');
        this._tendencyService.getTendencyId(this.param).then((data: any) => {
            this.tendency = data.tendency;
        }, err => {
            console.log(err);
        });
        this.seeTendency();
    }

    onScroll() {
    }

    social() {
        $('.fixed-action-btn').floatingActionButton();
    }

    seeTendency() {
        this._tendencyService.getTendency().then((resTendency: any) => {
            for (const i of resTendency.tendency) {
                this.tendencys.push(i);
            }
            console.log(this.tendencys);
        });
    }

    detailedNotice(id) {
        localStorage.setItem('idTendency', id);
        console.log(id);
    }



}
