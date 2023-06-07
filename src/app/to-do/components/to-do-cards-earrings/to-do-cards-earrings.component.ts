import { Component, Input, OnInit } from '@angular/core';
import { Tasks } from '../../interfaces/task.interface';
import { Categories } from '../../interfaces/category.interface';
import { ToDoService } from '../../services/to-do.service';

@Component({
  selector: 'to-do-cards-earrings',
  templateUrl: './to-do-cards-earrings.component.html',
  styleUrls: ['./to-do-cards-earrings.component.scss'],
})
export class ToDoCardsEarringsComponent  implements OnInit {

  constructor ( private service : ToDoService ) {}

  title : string = 'Hacer ejercicio';
  titleDescription : string = 'Descripción:'
  description : string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cum quae dolor obcaecati';
  dayTask : string = '15 mayo';
  hourTask : string = '11:50 AM'
  taskEarringEmpty : string = 'No tienes tareas pendientes'

  @Input()
  public showTasks !: Tasks[];

  ngOnInit() {
    
  }

  get categoryColor():Categories[] {
    return this.service.category;
  }

}
