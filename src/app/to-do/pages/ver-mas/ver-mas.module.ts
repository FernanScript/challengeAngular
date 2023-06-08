import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VerMasPageRoutingModule } from './ver-mas-routing.module';

import { VerMasPage } from './ver-mas.page';

import { ListTaskComponent } from './components/list-task/list-task.component';

import { FilterPipe } from './../../pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerMasPageRoutingModule
  ],
  declarations: [
    VerMasPage,
    ListTaskComponent,
    FilterPipe
  ]
})
export class VerMasPageModule {}
