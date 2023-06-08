import { Component, Input, OnInit } from '@angular/core';
import { Tasks } from '../../interfaces/task.interface';
import { Categories } from '../../interfaces/category.interface';
import { ToDoService } from '../../services/to-do.service';
import { format, isToday, isTomorrow, isYesterday } from 'date-fns';
import * as moment from 'moment';

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

  constructor ( private service : ToDoService ) {}

  ngOnInit() {}

  get categoryColor():Categories[] {
    return this.service.category;
  }

  dateToDay(date: Date): string {
    const today = moment().startOf('day');
    const dayString = moment(date).startOf('day');
  
    if (dayString.isSame(today, 'd')) {
      return 'Hoy';
    } else if (dayString.isSame(today.clone().add(1, 'd'), 'd')) {
      return 'Mañana';
    } else if (dayString.isSame(today.clone().subtract(1, 'd'), 'd')) {
      return 'Ayer';
    } else {
      return moment(date).format('MMMM D');
    }
  }

  get countStatus() {
    return this.showTasks.filter(count => count.status === true).length;
  }

}