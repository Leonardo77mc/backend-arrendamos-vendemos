import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {OpinionService} from '../../services/opinion.services';

declare var $;

@Component({
    selector: 'app-opinion',
    templateUrl: './opinion.component.html',
    styleUrls: ['./opinion.component.css']
})
export class OpinionComponent implements OnInit {
    title = 'Opinion';
    public opiniones = [];

    constructor(private router: Router,
                private _opinionService: OpinionService) {
    }

    ngOnInit() {
   this.getOpinion();
    }

    onScroll() {
    }

    getOpinion() {
        this._opinionService.getAllOpinion().then((data: any) => {
            for (const i of data.opiniones) {
                this.opiniones.push(i);
            }
        }, err => {
            console.log(err);
        });
    }

    seeOpine(id) {
        localStorage.setItem('idOpine', id);
    }


}
