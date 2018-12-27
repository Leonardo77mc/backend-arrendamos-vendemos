import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from '../global/global';

@Injectable()
export class NoticeService {

    private url;
    constructor(public http: HttpClient) {
        this.url = apiUrl;
    }

    getNotices() {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return new Promise((resolve, recje) => {
           this.http.get(this.url + 'getNotices', {headers: headers})
               .subscribe( data => {
                   resolve(data);
               }, err => {
                   recje(err);
               });
        });
    }

    getNoticeId(id) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return new Promise((resolve, recje) => {
            this.http.get(this.url + 'getNoticeId/' + id, {headers: headers})
                .subscribe( data => {
                    resolve(data);
                }, err => {
                    recje(err);
                });
        });
    }

}
