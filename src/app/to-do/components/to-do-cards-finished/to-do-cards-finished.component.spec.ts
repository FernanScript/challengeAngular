import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToDoCardsFinishedComponent } from './to-do-cards-finished.component';

describe('ToDoCardsFinishedComponent', () => {
  let component: ToDoCardsFinishedComponent;
  let fixture: ComponentFixture<ToDoCardsFinishedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoCardsFinishedComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToDoCardsFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
