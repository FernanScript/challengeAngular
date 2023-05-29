import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ToDoEarringComponent } from '../../components/to-do-earring/to-do-earring.component';
import { ListTaskComponent } from '../ver-mas/components/list-task/list-task.component';
import { SearchTaskComponent } from '../ver-mas/components/search-task/search-task.component';
import { ToDoFinishedComponent } from '../../components/to-do-finished/to-do-finished.component';
import { ToDoModalComponent } from '../../components/to-do-modal/to-do-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';

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
    ListTaskComponent,
    SearchTaskComponent,
    ToDoFinishedComponent,
    ToDoModalComponent,
  ]
})
export class HomePageModule {}
