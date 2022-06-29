import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { loginComponent } from './app.component';

describe('loginComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        loginComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(loginComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'WorkShopTeam4'`, () => {
    const fixture = TestBed.createComponent(loginComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('WorkShopTeam4');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(loginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('WorkShopTeam4 app is running!');
  });
});
