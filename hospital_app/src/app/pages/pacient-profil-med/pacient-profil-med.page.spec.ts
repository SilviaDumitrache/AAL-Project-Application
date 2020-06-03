import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PacientProfilMedPage } from './pacient-profil-med.page';

describe('PacientProfilMedPage', () => {
  let component: PacientProfilMedPage;
  let fixture: ComponentFixture<PacientProfilMedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientProfilMedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PacientProfilMedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
