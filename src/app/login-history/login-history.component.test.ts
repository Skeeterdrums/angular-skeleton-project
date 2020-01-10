import { NO_ERRORS_SCHEMA } from '@angular/core';
import { getTestBed, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LoginHistoryComponent } from './login-history.component';
import { LoginHistoryService } from './login-history.service';
import { LoginHistoryRoute } from './routes';

describe(`LoginHistoryComponentTests`, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginHistoryComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [LoginHistoryService]
    });
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  it(`should be  initialized`, () => {
    const fixture = TestBed.createComponent(LoginHistoryComponent);

    expect(fixture).toBeDefined();
    expect(fixture.componentRef).toBeDefined();
  });

  it('should display title and logins', () => {
    const fixture = TestBed.createComponent(LoginHistoryComponent);

    fixture.detectChanges();

    const heading = fixture.debugElement.query(By.css('div.container > h3'));
    expect(heading.nativeElement.textContent).toContain(LoginHistoryRoute.title);

    const tableBody = fixture.debugElement.query(By.css('table.table > tbody'));
    expect(tableBody.children.length).toBe(3);
  });
});
