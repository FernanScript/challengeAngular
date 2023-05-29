import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoClockComponent } from './components/to-do-clock/to-do-clock.component';
import { ToDoBtnModalComponent } from './components/to-do-btn-modal/to-do-btn-modal.component';



@NgModule({
  declarations: [
    ToDoClockComponent,
    ToDoBtnModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    ToDoClockComponent,
    ToDoBtnModalComponent
  ]
})
export class SharedModule { }
