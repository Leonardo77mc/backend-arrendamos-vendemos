import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EntrevistaService} from '../../services/entrevistas.services';

declare var $;

@Component({
    selector: 'app-entrevistacontent',
    templateUrl: './contentEntrevista.component.html',
    styleUrls: ['./contentEntrevista.component.css']
})
export class ContentEntrevistaComponent implements OnInit {
    title = 'Contenido de las entrevistas';
    public entrevista: any = {};
    public subContenido = [];

    constructor(private router: Router,
                private _entrevistaService: EntrevistaService) {
    }

    ngOnInit() {
        $('.parallax').parallax();
        const id = localStorage.getItem('idEntrevista');
        this.getInterviewId(id);

    }

    getInterviewId(id) {
        this._entrevistaService.getEntrevistaId(id).then((data: any) => {
            this.entrevista = data.resData;
            this.getSubContent(id);
        }, err => {
            console.log(err);
        });
    }

    getSubContent(id) {
        this._entrevistaService.getSubContentId(id).then((data: any) => {
            for (let i = 0; i < data.subContent.length; i++) {
                this.subContenido.push(data.subContent[i]);
            }
            console.log(this.subContenido);
        }, err => {
            console.log(err);
        });
    }


}
