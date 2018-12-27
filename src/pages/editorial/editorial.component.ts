import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var $;

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.css']
})
export class EditorialComponent {
  title = 'Editorial';

  constructor(private route: Router) {
        
  }

}
