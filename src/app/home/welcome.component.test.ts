import { NO_ERRORS_SCHEMA } from '@angular/core';
import { getTestBed, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { WelcomeRoute } from './routes';
import { WelcomeComponent } from './welcome.component';

describe(`WelcomeComponentTests`, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  it(`should be  initialized`, () => {
    const fixture = TestBed.createComponent(WelcomeComponent);

    expect(fixture).toBeDefined();
    expect(fixture.componentRef).toBeDefined();
  });

  it('should display title and developer info', () => {
    const fixture = TestBed.createComponent(WelcomeComponent);

    fixture.detectChanges();

    const heading = fixture.debugElement.query(By.css('div.container > div.row > h3'));
    expect(heading.nativeElement.textContent).toContain(WelcomeRoute.title);

    const body = fixture.debugElement.query(By.css('div.container'));
    expect(body.query(By.css('div.row > div')).nativeElement.textContent).toBe('Developed by:');
    expect(body.query(By.css('div.row > h4')).nativeElement.textContent).toBe('Skeeterdrums');
  });
});
