import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EarthquakeModule } from './earthquake/earthquake.module';
import { WelcomeRoutes } from './home/routes';
import { WelcomeComponent } from './home/welcome.component';
import { LoginHistoryModule } from './login-history/login-history.module';
import { SharedModule } from './shared/shared.module';
import { ToastService } from './shared/toast.service';

@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginHistoryModule,
    EarthquakeModule,
    SharedModule,
    RouterModule.forRoot(WelcomeRoutes, { useHash: true })
  ],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule {}
