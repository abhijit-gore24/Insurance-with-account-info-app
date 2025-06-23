import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/header/header.component";
import { FooterComponent } from "./core/footer/footer.component";
import { Router, NavigationEnd } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent,NgIf],
  templateUrl: './app.component.html',
 styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
   title = 'dummyIllumifin';
 private currentUrl: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects;
      }
    });
  }

  isLoginPage(): boolean {
    return this.currentUrl === '/login';
  }
}
