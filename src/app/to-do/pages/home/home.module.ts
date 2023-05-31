import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ToDoEarringComponent } from '../../components/to-do-earring/to-do-earring.component';
import { ToDoFinishedComponent } from '../../components/to-do-finished/to-do-finished.component';
import { ToDoModalComponent } from '../../components/to-do-modal/to-do-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToDoCardsComponent } from '../../components/to-do-cards/to-do-cards.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule
  ],
  declarations: [
    HomePage,
    ToDoEarringComponent,
    ToDoFinishedComponent,
    ToDoModalComponent,
    ToDoCardsComponent
  ],
  schemas : [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomePageModule {}