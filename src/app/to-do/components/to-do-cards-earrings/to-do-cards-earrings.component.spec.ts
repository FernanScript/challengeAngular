import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToDoCardsEarringsComponent } from './to-do-cards-earrings.component';

describe('ToDoCardsEarringsComponent', () => {
  let component: ToDoCardsEarringsComponent;
  let fixture: ComponentFixture<ToDoCardsEarringsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoCardsEarringsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToDoCardsEarringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
