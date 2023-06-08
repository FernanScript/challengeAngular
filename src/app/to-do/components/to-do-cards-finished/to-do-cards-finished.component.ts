import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Tasks } from '../../interfaces/task.interface';
import { Categories } from '../../interfaces/category.interface';
import { ToDoService } from '../../services/to-do.service';
import { addDays, format, isDate, isToday, isTomorrow, isYesterday, parseISO, subDays } from 'date-fns';
import { DatePipeConfig } from '@angular/common';

@Component({
  selector: 'to-do-cards-finished',
  templateUrl: './to-do-cards-finished.component.html',
  styleUrls: ['./to-do-cards-finished.component.scss'],
})
export class ToDoCardsFinishedComponent  implements OnInit {

  @Input()
  public showTasks !: Tasks[];

  tachado : boolean = false;

  today : Tasks = {
    name : '',
    description : '',
    fechaFin : new Date()
  }

  taskFinishedEmpty : string = 'No tienes tareas terminadas'

  constructor ( private service : ToDoService ) {}

  ngOnInit() {
  }

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
      return format(date, 'dd MMMM yyyy HH:mm a');
    }
  }

  get countStatus() {
    return this.showTasks.filter(count => count.status === true).length;
  }

}
