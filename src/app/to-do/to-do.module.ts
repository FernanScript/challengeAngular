import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoRoutingModule } from './to-do-routing.module';
import { HomePageModule } from './pages/home/home.module';
import { VerMasPageModule } from './pages/ver-mas/ver-mas.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToDoRoutingModule,
    HomePageModule,
    VerMasPageModule,
    SharedModule
  ]
})
export class ToDoModule { }
