import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { HomePage } from './home.page';

import { ToDoEarringComponent } from '../../components/to-do-earrings/to-do-earring.component';
import { ToDoFinishedComponent } from '../../components/to-do-finished/to-do-finished.component';
import { ToDoModalComponent } from '../../components/to-do-modal/to-do-modal.component';
import { ToDoCardsEarringsComponent } from '../../components/to-do-cards-earrings/to-do-cards-earrings.component';
import { ToDoCardsFinishedComponent } from '../../components/to-do-cards-finished/to-do-cards-finished.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomePage,
    ToDoEarringComponent,
    ToDoFinishedComponent,
    ToDoModalComponent,
    ToDoCardsEarringsComponent,
    ToDoCardsFinishedComponent
  ],
  schemas : [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomePageModule {}
