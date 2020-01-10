import { Component } from '@angular/core';
import { EarthquakeRoute } from './earthquake/routes';
import { WelcomeRoute } from './home/routes';
import { LoginHistoryRoute } from './login-history/routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  static readonly PAGE_TITLE: string = 'Mobile Tech Challenges';
  pageTitle: string = AppComponent.PAGE_TITLE;

  welcomeUrl: string = WelcomeRoute.url;
  welcomeTitle: string = WelcomeRoute.title;

  loginHistoryUrl: string = LoginHistoryRoute.url;
  loginHistoryTitle: string = LoginHistoryRoute.title;

  earthquakeUrl: string = EarthquakeRoute.url;
  earthquakeTitle: string = EarthquakeRoute.title;

  constructor() {}
}
