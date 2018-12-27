import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from '../global/global';

@Injectable()
export class HistoriyService {

    private url;
    constructor(public http: HttpClient) {
        this.url = apiUrl;
    }

    getAllHistories() {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return new Promise((resolve, recje) => {
            this.http.get(this.url + 'getHistories', {headers: headers})
                .subscribe( data => {
                    resolve(data);
                }, err => {
                    recje(err);
                });
        });
    }

    getHistoryId(id) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return new Promise((resolve, recje) => {
            this.http.get(this.url + 'getHistoryId/' + id, {headers: headers})
                .subscribe( data => {
                    resolve(data);
                }, err => {
                    recje(err);
                });
        });
    }


}
