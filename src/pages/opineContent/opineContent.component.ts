import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { OpinionService } from '../../services/opinion.services';

declare var $;

@Component({
    selector: 'app-opinecontent',
    templateUrl: './opineContent.component.html',
    styleUrls: ['./opineContent.component.css']
})
export class OpineContentComponent implements OnInit {
    title = 'Contenido';
    param;
    id;
    opinion: any = {};

    constructor(private router: Router,
                private _opinionService: OpinionService) {
    }

    ngOnInit() {
        $('.parallax').parallax();
        this.param = localStorage.getItem('idOpine');
        console.log(this.param);
        this._opinionService.getOpineId(this.param).then((data: any) => {
              this.opinion = data.opinion;
              console.log(this.opinion);
        }, err => {
              console.log(err);
        });
    }

    onScroll() {
    }



}
