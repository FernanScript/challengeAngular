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

  titleDescription : string = 'Descripción:';
  taskEarringEmpty : string = 'No tienes tareas pendientes'

  constructor ( private service : ToDoService ) {}

  @Input()
  public showTasks !: Tasks[];

  ngOnInit() {}

  get categoryColor():Categories[] {
    return this.service.category;
  }

  get countStatus() {
    return this.showTasks.filter(count => count.status === false).length;
  }

}