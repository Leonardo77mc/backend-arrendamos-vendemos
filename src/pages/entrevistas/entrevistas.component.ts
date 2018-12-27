import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {OpinionService} from '../../services/opinion.services';

declare var $;

@Component({
    selector: 'app-entrevistas',
    templateUrl: './entrevistas.component.html',
    styleUrls: ['./entrevistas.component.css']
})
export class EntrevistaComponent implements OnInit {
    title = 'Opinion';
    public opiniones = [];

    constructor(private router: Router,
                private _opinionService: OpinionService) {
    }

    ngOnInit() {

    }

    onScroll() {
    }



}
