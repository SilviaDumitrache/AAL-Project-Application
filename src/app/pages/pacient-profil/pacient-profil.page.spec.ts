import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PacientProfilPage } from './pacient-profil.page';

describe('PacientProfilPage', () => {
  let component: PacientProfilPage;
  let fixture: ComponentFixture<PacientProfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientProfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PacientProfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
