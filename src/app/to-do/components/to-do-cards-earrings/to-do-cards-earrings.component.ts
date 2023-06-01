import { Component, Input, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
import { Tasks } from '../../interfaces/task.interface';
register()
@Component({
  selector: 'to-do-cards-earrings',
  templateUrl: './to-do-cards-earrings.component.html',
  styleUrls: ['./to-do-cards-earrings.component.scss'],
})
export class ToDoCardsEarringsComponent  implements OnInit {

  constructor() { }

  title : string = 'Hacer ejercicio';
  titleDescription : string = 'Descripción:'
  description : string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cum quae dolor obcaecati';
  dayTask : string = '15 mayo';
  hourTask : string = '11:50 AM'

  @Input()
  public showTasks !: Tasks[];

  ngOnInit() {}

  

}
