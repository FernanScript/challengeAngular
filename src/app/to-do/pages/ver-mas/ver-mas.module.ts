import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerMasPageRoutingModule } from './ver-mas-routing.module';

import { VerMasPage } from './ver-mas.page';
import { SearchTaskComponent } from './components/search-task/search-task.component';
import { ListTaskComponent } from './components/list-task/list-task.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerMasPageRoutingModule
  ],
  declarations: [
    VerMasPage,
    SearchTaskComponent,
    ListTaskComponent
  ]
})
export class VerMasPageModule {}
