import { Earthquake } from './earthquake';

export function mockEarthquakes(): Array<Earthquake> {
  const earthquakes: Array<Earthquake> = [];

  let earthquake: Earthquake = {
    usgsTitle: 'M 1.8 - 15km E of Anderson, California',
    time: 1482181979580,
    magnitude: 1.84,
    url: 'http://earthquake.usgs.gov/earthquakes/eventpage/nc72741580',
    latitude: -122.114502,
    longitude: 40.4421654
  };

  earthquakes.push(earthquake);

  earthquake = {
    usgsTitle: 'M 2.0 - 19km SSE of Ridgemark, California',
    time: 1482180615010,
    magnitude: 2.03,
    url: 'http://earthquake.usgs.gov/earthquakes/eventpage/nc72741575',
    latitude: -121.2718353,
    longitude: 36.6580009
  };

  earthquakes.push(earthquake);
  return earthquakes;
}

export const MOCK_EARTHQUAKE_JSON = JSON.stringify({
  features: [
    {
      properties: {
        mag: 1.84,
        time: 1482181979580,
        url: 'http://earthquake.usgs.gov/earthquakes/eventpage/nc72741580',
        title: 'M 1.8 - 15km E of Anderson, California'
      },
      geometry: {
        coordinates: [-122.114502, 40.4421654, 19.44]
      }
    },
    {
      properties: {
        mag: 2.03,
        place: '19km SSE of Ridgemark, California',
        url: 'http://earthquake.usgs.gov/earthquakes/eventpage/nc72741575',
        title: 'M 2.0 - 19km SSE of Ridgemark, California'
      },
      geometry: { coordinates: [-121.2718353, 36.6580009, 2.95] }
    }
  ]
});
