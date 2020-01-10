import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { EarthquakeService } from './earthquake.service';
import { mockEarthquakes, MOCK_EARTHQUAKE_JSON } from './earthquake.test.mocks';

describe(`EarthquakeServiceTests`, () => {
  let service: EarthquakeService;
  let mockHttp: HttpClient;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['get']);

    service = new EarthquakeService(mockHttp);
  });

  it(`should be initialized`, () => {
    expect(service).toBeDefined();
  });

  it('should return mocked data', () => {
    mockHttp.get = jasmine.createSpy('mockHttp.get').and.returnValue(of(MOCK_EARTHQUAKE_JSON));

    service.getEarthquakes().subscribe(earthquakes => {
      expect(earthquakes).toEqual(mockEarthquakes());
      expect(mockHttp.get).toHaveBeenCalledWith(EarthquakeService.URL);
    });
  });
});
