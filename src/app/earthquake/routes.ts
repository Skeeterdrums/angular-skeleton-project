import { EarthquakeComponent } from './earthquake.component';

export let EarthquakeRoute = {
  title: 'Earthquakes',
  path: 'earthquakes',
  url: '/earthquakes'
};

export let EarthquakeRoutes = [{ path: EarthquakeRoute.path, component: EarthquakeComponent }];
