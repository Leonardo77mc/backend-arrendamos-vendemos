import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NoticeService} from '../../services/notices.services';

declare var $;

@Component({
    selector: 'app-contenido',
    templateUrl: './contenido.component.html',
    styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
    title = 'Contenido';
    param;
    id;
    notice: any = {};
    public notices = [];

    constructor(private router: Router,
                private _noticeService: NoticeService) {
    }

    ngOnInit() {
        $('.parallax').parallax();
        this.param = localStorage.getItem('id');
        this._noticeService.getNoticeId(this.param).then((data: any) => {
            this.notice = data.notice;
        }, err => {
            console.log(err);
        });
        this.seeNotice();
    }

    onScroll() {
    }

    social() {
        $('.fixed-action-btn').floatingActionButton();
    }

    seeNotice() {
        this._noticeService.getNotices().then((resNotice: any) => {
            for (const i of resNotice.notices) {
                this.notices.push(i);
            }
            console.log(this.notice);
        });
    }

    detailedNotice(id) {
        localStorage.setItem('id', id);
        console.log(id);
    }



}
