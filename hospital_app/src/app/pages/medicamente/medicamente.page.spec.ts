import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicamentePage } from './medicamente.page';

describe('MedicamentePage', () => {
  let component: MedicamentePage;
  let fixture: ComponentFixture<MedicamentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicamentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
