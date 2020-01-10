import { NO_ERRORS_SCHEMA } from '@angular/core';
import { getTestBed, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { ToastService } from '../shared/toast.service';
import { Earthquake } from './earthquake';
import { EarthquakeComponent } from './earthquake.component';
import { EarthquakeService } from './earthquake.service';
import { mockEarthquakes } from './earthquake.test.mocks';
import { EarthquakeRoute } from './routes';

describe(`EarthquakeComponentTests`, () => {
  let mockEarthquakeService: EarthquakeService;
  let mockToastService: ToastService;

  beforeEach(() => {
    mockEarthquakeService = jasmine.createSpyObj('mockEarthquakeService', ['getEarthquakes']);
    mockToastService = jasmine.createSpyObj('mockToastService', ['success']);

    TestBed.configureTestingModule({
      declarations: [EarthquakeComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: EarthquakeService, useValue: mockEarthquakeService },
        { provide: ToastService, useValue: mockToastService }
      ]
    });
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  it(`should be initialized`, () => {
    const fixture = TestBed.createComponent(EarthquakeComponent);

    expect(fixture).toBeDefined();
    expect(fixture.componentRef).toBeDefined();
  });

  it('should display title', () => {
    const observable: Observable<Array<Earthquake>> = of([]);

    mockEarthquakeService.getEarthquakes = jasmine
      .createSpy('mockEarthquakeService.getEarthquakes')
      .and.returnValue(observable);

    const fixture = TestBed.createComponent(EarthquakeComponent);
    fixture.componentInstance.loading = false;

    fixture.detectChanges();

    const header = fixture.debugElement.query(By.css('div.container > h3'));
    expect(header.nativeElement.textContent).toBe(EarthquakeRoute.title);

    expect(mockEarthquakeService.getEarthquakes).toHaveBeenCalled();
    expect(mockToastService.success).toHaveBeenCalledWith(EarthquakeComponent.SUCCESS_MESSAGE);
  });

  it('should create table with earthquakes from service', () => {
    const observable: Observable<Array<Earthquake>> = of(mockEarthquakes());

    mockEarthquakeService.getEarthquakes = jasmine
      .createSpy('mockEarthquakeService.getEarthquakes')
      .and.returnValue(observable);

    const fixture = TestBed.createComponent(EarthquakeComponent);

    fixture.detectChanges();

    const tableBody = fixture.debugElement.query(By.css('div.container > table.table > tbody'));
    expect(tableBody.children.length).toBe(2);

    expect(mockEarthquakeService.getEarthquakes).toHaveBeenCalled();
    expect(mockToastService.success).toHaveBeenCalledWith(EarthquakeComponent.SUCCESS_MESSAGE);
  });
});
