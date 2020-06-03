import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PacientProgPage } from './pacient-prog.page';

describe('PacientProgPage', () => {
  let component: PacientProgPage;
  let fixture: ComponentFixture<PacientProgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientProgPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PacientProgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
