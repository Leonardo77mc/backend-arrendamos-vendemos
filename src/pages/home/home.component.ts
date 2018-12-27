import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NoticeService} from '../../services/notices.services';
import {InmuebleService} from '../../services/inmueble.services';
import {LogoService} from '../../services/logo.services';
import {FormGroup, FormBuilder} from '@angular/forms';

declare var $;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    title = 'home';
    public formInmueble: FormGroup;
    public notices = [];
    public inmuebles = [];
    public logos = [];
    private inmuebleCategory;
    private typeinmueble;
    public search;
    public tope = 12;
    visualizar = false;

    constructor(private route: Router,
                private _noticeServices: NoticeService,
                private _inmuebleService: InmuebleService,
                private _logoServices: LogoService,
                public formbuilder: FormBuilder) {
        this.seeNotice();
        this.getInmuebles();
    }

    ngOnInit() {
        $('.slider').slider({indicators: false, height: '277'});
        this.createForm();
        this.getLogos();
    }

    seeNotice() {
        this._noticeServices.getNotices().then((resNotice: any) => {
            for (const i of resNotice.notices) {
                this.notices.push(i);
            }
        });
    }

    social() {
        $('.fixed-action-btn').floatingActionButton();
    }

    createForm() {
        this.formInmueble = this.formbuilder.group({
            category: [''],
            typeInmueble: [''],
            searchInmueble: ['']
        });
    }

    searchInmueble() {
        console.log(this.formInmueble.value);
    }

    onKey(data) {
        if (this.formInmueble.value.category !== '' && this.formInmueble.value.typeInmueble !== '') {
            this.search = data.target.value;
            this.visualizar = true;
        }
    }

    getInmuebles() {
        this._inmuebleService.getAllInmuebles().then((data: any) => {
            for (const i of data.data) {
                this.inmuebles.push(i);
            }
            // console.log(this.inmuebles);
        }, (err) => {
            console.log(err);
        });
    }

    getLogos() {
        this._logoServices.getLogos().then((data: any) => {
            for (let i = 0; i < this.tope; i++) {
                this.logos.push(data.logos[i]);
            }
        }, (err) => {
            console.log(err);
        });
    }

    leftLogo() {
        this._logoServices.getLogos().then((data: any) => {
            if (this.tope > 12) {
                this.logos = [];
                for (let i = this.tope; i < this.tope - 13; i--) {
                    this.logos.push(data.logos[i]);
                }
                console.log(this.tope);
            }
        });
    }

    rightLogo() {
        this._logoServices.getLogos().then((data: any) => {
            this.logos = [];
            if (this.tope < data.logos.length) {
                for (let i = this.tope; i < this.tope + 12; i++) {
                    this.logos.push(data.logos[i]);
                }
                console.log(this.tope);
            }
        });
    }

    detailedNotice(id) {
        localStorage.setItem('id', id);
    }

}
