import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
register()
@Component({
  selector: 'to-do-cards',
  templateUrl: './to-do-cards.component.html',
  styleUrls: ['./to-do-cards.component.scss'],
})
export class ToDoCardsComponent  implements OnInit {

  constructor() { }

  tachado : boolean = false;

  title : string = 'hacer ejercicio';
  description : string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cum quae dolor obcaecati';

  ngOnInit() {}

  lineThroughTask():void {
    this.tachado = true
  }

}
