import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAuthTokenComponent } from './login-auth-token.component';

describe('LoginAuthTokenComponent', () => {
  let component: LoginAuthTokenComponent;
  let fixture: ComponentFixture<LoginAuthTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAuthTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAuthTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
