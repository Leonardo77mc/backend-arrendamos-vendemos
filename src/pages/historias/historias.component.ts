import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoriyService } from '../../services/histories.services';

declare var $;

@Component({
  selector: 'app-historias',
  templateUrl: './historias.component.html',
  styleUrls: ['./historias.component.css']
})
export class HistoriasComponent implements OnInit {
  title = 'historias';
    public histories = [];

  constructor(private route: Router,
              private _historyService: HistoriyService ) {

  }

  ngOnInit() {
      this.gethistories();
  }

    gethistories() {
       this._historyService.getAllHistories().then((data: any) => {
           for (let i = 0; i < data.histories.length; i++) {
               this.histories.push(data.histories[i]);
           }
       }, err => {
           console.log(err);
       });
    }

    seeHistory(id) {
      localStorage.setItem('idHistory', id);
    }

}
