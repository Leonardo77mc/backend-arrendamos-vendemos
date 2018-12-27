import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { HistoriyService } from '../../services/histories.services';
declare var $;

@Component({
    selector: 'app-historycontent',
    templateUrl: './contentHistory.component.html',
    styleUrls: ['./contentHistory.component.css']
})
export class ContentHistoryComponent implements OnInit {
    title = 'Contenido de la historia';
    public histories: any = {};

    constructor(private router: Router,
                private _historyService: HistoriyService) {
    }

    ngOnInit() {
        $('.parallax').parallax();
     const id = localStorage.getItem('idHistory');
        this._historyService.getHistoryId(id).then((data: any) => {
            this.histories = data.histories;
            console.log(this.histories);
        }, err => {
            console.log(err);
        });
    }

    onScroll() {
    }






}
