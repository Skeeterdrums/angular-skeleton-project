import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { EarthquakeComponent } from './earthquake.component';
import { EarthquakeService } from './earthquake.service';
import { EarthquakeRoutes } from './routes';

@NgModule({
  imports: [RouterModule.forChild(EarthquakeRoutes), SharedModule, BrowserModule],
  declarations: [EarthquakeComponent],
  providers: [EarthquakeService]
})
export class EarthquakeModule {}
