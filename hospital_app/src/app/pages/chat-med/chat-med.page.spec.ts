import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatMedPage } from './chat-med.page';

describe('ChatMedPage', () => {
  let component: ChatMedPage;
  let fixture: ComponentFixture<ChatMedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatMedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatMedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
