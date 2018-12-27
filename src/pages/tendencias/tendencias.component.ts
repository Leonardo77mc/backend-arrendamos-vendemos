import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { TendencyService } from '../../services/tendency.services';

declare var $;

@Component({
    selector: 'app-tendencias',
    templateUrl: './tendencias.component.html',
    styleUrls: ['./tendencias.component.css']
})
export class TendenciasComponent implements OnInit {
    title = 'Tendencias';
    public tendencys = [];

    constructor(private route: Router,
                private _tendencyServices: TendencyService) {
    }

    ngOnInit() {
        $('.slider').slider({indicators: true, height: 277});
        this.seeTendency();
    }

    seeTendency() {
        this._tendencyServices.getTendency().then((resTendency: any) => {
            console.log(resTendency);
            for (let i = 0; i < resTendency.tendency.length; i++) {
                this.tendencys.push(resTendency.tendency[i]);
            }
        });
    }

    social() {
        $('.fixed-action-btn').floatingActionButton();
    }

    detailedNotice(id) {
        localStorage.setItem('idTendency', id);
    }

}
