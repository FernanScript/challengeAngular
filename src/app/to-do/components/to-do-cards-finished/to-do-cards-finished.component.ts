import { Component, Input, OnInit } from '@angular/core';
import { Tasks } from '../../interfaces/task.interface';
import { Categories } from '../../interfaces/category.interface';
import { ToDoService } from '../../services/to-do.service';
import { format, isToday, isTomorrow, isYesterday } from 'date-fns';

@Component({
  selector: 'to-do-cards-finished',
  templateUrl: './to-do-cards-finished.component.html',
  styleUrls: ['./to-do-cards-finished.component.scss'],
})
export class ToDoCardsFinishedComponent  implements OnInit {
  
  tachado : boolean = false;
  taskFinishedEmpty : string = 'No tienes tareas terminadas';

  @Input()
  public showTasks !: Tasks[];

  today : Tasks = {
    name : '',
    description : '',
    fechaFin : new Date()
  }

  constructor ( private service : ToDoService ) {}

  ngOnInit() {}

  get categoryColor():Categories[] {
    return this.service.category;
  }

  dateToDay(date:Date): string {
    if (isToday(date)) {
      return 'Hoy';
    } else if (isTomorrow(date)) {
      return 'Mañana';
    } else if (isYesterday(date)) {
      return 'Ayer';
    } else {
      return format(date, 'MMMM d');
    }
  }

  get countStatus() {
    return this.showTasks.filter(count => count.status === true).length;
  }

}