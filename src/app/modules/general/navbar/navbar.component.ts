import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name = environment.application.name;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

    isNasaRoute() {
      return this.router.url === '/nasa';
    }

    isCryptoRoute() {
      return this.router.url === '/crypto';
    }

    isMapRoute() {
      return this.router.url === '/map';
    }

    isNewsRoute() {
      return this.router.url === '/news';
    }

    isDataRoute() {
      return this.router.url === '/data';
    }

}
