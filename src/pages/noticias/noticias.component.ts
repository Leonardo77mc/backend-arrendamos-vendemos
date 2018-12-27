import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoticeService } from '../../services/notices.services';

declare var $;

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

    title = 'Noticias';
    public notices = [];

  constructor(private router: Router,
              private _noticeServices: NoticeService) {}

  ngOnInit() {

       $('.slider').slider(
         {
           indicators: false,
           height: '300'
          });

       this.seeNotice();

  }

  onScroll() {}


    seeNotice() {
        this._noticeServices.getNotices().then((resNotice: any) => {
            for (let i = 0; i < 2; i++) {
                this.notices.push(resNotice.notices[i]);
            }
        });
    }

    social() {
        $('.fixed-action-btn').floatingActionButton();
    }

    detailedNotice(id) {
             localStorage.setItem('id', id);
      }


}


// pie de pagina.
// iconos del menu mas pequeños.
