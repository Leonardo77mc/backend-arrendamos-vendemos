import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {apiUrl} from '../global/global';

@Injectable()
export class EntrevistaService {

    private url;

    constructor(public http: HttpClient) {
        this.url = apiUrl;
    }

    getEntrevistas() {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return new Promise((resolve, recje) => {
            this.http.get(this.url + 'getEntrevistas', {headers: headers})
                .subscribe(data => {
                    resolve(data);
                }, err => {
                    recje(err);
                });
        });
    }

    getEntrevistaId(id) {
        const headers = new HttpHeaders().set('Content-type', 'application/json');
        return new Promise((resolve, recje) => {
            this.http.get(this.url + 'getInterviewId/' + id, {headers: headers}).subscribe(data => {
                    resolve(data);
                }, err => {
                    recje(err);
                }
            );
        });
    }

    getSubContentId(id) {
        const headers = new HttpHeaders().set('Content-type', 'application/json');
        return new Promise((resolve, recje) => {
            this.http.get(this.url + 'getSubContentId/' + id, {headers: headers}).subscribe(data => {
                    resolve(data);
                }, err => {
                    recje(err);
                }
            );
        });
    }


}
