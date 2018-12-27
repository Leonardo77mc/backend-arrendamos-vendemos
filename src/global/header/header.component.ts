import {Component} from '@angular/core';
import {Router} from '@angular/router';
declare var $;

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    interruptor =  'off';
    interruptor2 =  'off';

    constructor() {
    }

    actualidadmenu() {
        $('#menu').toggle('fast');
    }

    memoriasmenu() {
        $('#menuMemorias').toggle('fast');
    }

    mostrarMenu() {
        $('#menu').addClass('animated bounceInRight');
        $('#menu').css('display', 'block');
        $('#menu').css('position', 'relative');
        this.interruptor = 'on';
        // console.log('Motrar el menu');
    }

    esconderMenu() {
        $('#menu').removeClass('bounceInRight');
        $('#menu').css('position', 'fixed');
        $('#menu').css('display', 'none');
        this.interruptor = 'off';
    }

    mostrarMenuMemorias() {
        $('#menuMemorias').addClass('animated bounceInRight');
        $('#menuMemorias').css('display', 'block');
        $('#menuMemorias').css('position', 'relative');
        this.interruptor2 = 'on';
        // console.log('Motrar el menu');
    }

    esconderMenuMemorias() {
        $('#menuMemorias').removeClass('bounceInRight');
        $('#menuMemorias').css('position', 'fixed');
        $('#menuMemorias').css('display', 'none');
        this.interruptor2 = 'off';
    }


}
