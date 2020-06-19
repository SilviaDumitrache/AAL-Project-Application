import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PacientiPage } from './pacienti.page';

describe('PacientiPage', () => {
  let component: PacientiPage;
  let fixture: ComponentFixture<PacientiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PacientiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
