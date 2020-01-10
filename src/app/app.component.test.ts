import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent]
    }).compileComponents();
  }));

  it(`should be  initialized`, () => {
    const fixture = TestBed.createComponent(AppComponent);

    expect(fixture).toBeDefined();
    expect(fixture.componentRef).toBeDefined();
  });

  it('should display title', () => {
    const fixture = TestBed.createComponent(AppComponent);

    fixture.detectChanges();

    const navbar = fixture.debugElement.query(By.css('a.navbar-brand'));
    expect(navbar.nativeElement.textContent).toBe(AppComponent.PAGE_TITLE);
  });
});
