import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Earthquake } from './earthquake';

@Injectable()
export class EarthquakeService {
  static readonly URL: string = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson';
  private static readonly NUMBER_TO_DISPLAY: number = 20;

  constructor(private http: HttpClient) {}

  getEarthquakes(): Observable<Earthquake[]> {
    return this.http.get(EarthquakeService.URL).pipe(
      map(response => this.mapEarthquakes(response)),
      catchError(error => throwError(new Error(error.status.toString() || 'Server Error')))
    );
  }

  private mapEarthquakes(response): Array<Earthquake> {
    const earthquakeFeatures: Array<any> = response.features;
    const earthquakes: Array<Earthquake> = [];
    const displayTotal: number =
      earthquakeFeatures.length < EarthquakeService.NUMBER_TO_DISPLAY
        ? earthquakeFeatures.length
        : EarthquakeService.NUMBER_TO_DISPLAY;

    for (let count = 0; count < displayTotal; count++) {
      const earthquakeProperties: any = earthquakeFeatures[count].properties;
      const earthquakeCoordinates: Array<number> = earthquakeFeatures[count].geometry['coordinates'];

      const earthquake: Earthquake = {
        usgsTitle: earthquakeProperties.title,
        time: earthquakeProperties.time,
        magnitude: earthquakeProperties.mag,
        url: earthquakeProperties.url,
        latitude: earthquakeCoordinates[0],
        longitude: earthquakeCoordinates[1]
      };

      earthquakes.push(earthquake);
    }

    return earthquakes;
  }
}
