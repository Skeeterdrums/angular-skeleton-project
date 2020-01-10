import { Component, OnInit } from '@angular/core';
import { ToastService } from '../shared/toast.service';
import { Earthquake } from './earthquake';
import { EarthquakeService } from './earthquake.service';
import { EarthquakeRoute } from './routes';

@Component({
  templateUrl: 'earthquake.component.html',
  styleUrls: []
})
export class EarthquakeComponent implements OnInit {
  public static readonly SUCCESS_MESSAGE = 'Data retrieved successfully!';

  pageTitle: string = EarthquakeRoute.title;
  earthquakes: Array<Earthquake>;
  errorMessage: string;
  loading = true;

  ngOnInit(): void {
    console.log('retrieving earthquake data');

    this.earthquakeService.getEarthquakes().subscribe(
      earthquakes => {
        this.earthquakes = earthquakes;
        this.loading = false;
        this.toastr.success(EarthquakeComponent.SUCCESS_MESSAGE);
      },
      error => {
        this.errorMessage = error as any;
        this.loading = false;
        this.toastr.error(`Sorry, an error occurred retrieving the data: ${error}`);
      }
    );
  }

  getTimeOccurred(earthquake: Earthquake): Date {
    return new Date(earthquake.time);
  }

  constructor(private earthquakeService: EarthquakeService, private toastr: ToastService) {}
}
