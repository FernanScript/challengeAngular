import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BtnVerMasComponent } from './components/btn-ver-mas/btn-ver-mas.component';
import { ToDoClockComponent } from './components/to-do-clock/to-do-clock.component';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ToDoClockComponent,
    BtnVerMasComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports : [
    ToDoClockComponent,
    BtnVerMasComponent
  ]
})
export class SharedModule { }
