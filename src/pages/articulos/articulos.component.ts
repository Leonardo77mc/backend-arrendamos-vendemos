import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EntrevistaService} from '../../services/entrevistas.services';

declare var $;

@Component({
    selector: 'app-articulos',
    templateUrl: './articulos.component.html',
    styleUrls: ['./articulos.component.css']
})
export class ArticleComponent implements OnInit {
    title = 'Entrevistas';
    public entrevistas = [];

    constructor(private router: Router,
                private _entrevistaServices: EntrevistaService) {

    }

    ngOnInit() {
        this.getAllEntrevistas();
    }

    getAllEntrevistas() {
        this._entrevistaServices.getEntrevistas().then((data: any) => {
            for (let i = 0; i < data.entrevistas.length; i++) {
                this.entrevistas.push(data.entrevistas[i]);

            }
            console.log(this.entrevistas);
        }, err => {
            console.log(err);
        });
    }

    seeEntrevista(id) {
        localStorage.setItem('idEntrevista', id);
    }

    social() {
        $('.fixed-action-btn').floatingActionButton();
    }

}
