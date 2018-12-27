import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from '../global/global';

@Injectable()
export class TendencyService {

    private url;
    constructor(public http: HttpClient) {
        this.url = apiUrl;
    }

    getTendency() {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return new Promise((resolve, recje) => {
            this.http.get(this.url + 'getTendency', {headers: headers})
                .subscribe( data => {
                    resolve(data);
                }, err => {
                    recje(err);
                });
        });
    }

    getTendencyId(id) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return new Promise((resolve, recje) => {
            this.http.get(this.url + 'getTendencyId/' + id, {headers: headers})
                .subscribe( data => {
                    resolve(data);
                }, err => {
                    recje(err);
                });
        });
    }

}
