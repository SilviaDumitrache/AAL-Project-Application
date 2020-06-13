import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginMedPage } from './login-med.page';

describe('LoginMedPage', () => {
  let component: LoginMedPage;
  let fixture: ComponentFixture<LoginMedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginMedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginMedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
