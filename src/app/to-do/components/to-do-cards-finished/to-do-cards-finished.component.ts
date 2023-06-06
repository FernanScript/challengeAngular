import { Component, Input, OnInit } from '@angular/core';
import { Tasks } from '../../interfaces/task.interface';
import { Categories } from '../../interfaces/category.interface';
import { ToDoService } from '../../services/to-do.service';

@Component({
  selector: 'to-do-cards-finished',
  templateUrl: './to-do-cards-finished.component.html',
  styleUrls: ['./to-do-cards-finished.component.scss'],
})
export class ToDoCardsFinishedComponent  implements OnInit {

  @Input()
  public showTasks !: Tasks[];

  tachado : boolean = false;

  title : string = 'Hacer ejercicio';
  description : string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cum quae dolor obcaecati';
  dayTask : string = '15 mayo';
  hourTask : string = '11:50 AM'
  taskFinishedEmpty : string = 'No tienes tareas terminadas'

  constructor ( private service : ToDoService ) {}

  ngOnInit() {
   
  }

  get categoryColor():Categories[] {
    return this.service.category;
  }

}
