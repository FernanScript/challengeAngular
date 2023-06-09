import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../../services/to-do.service';
import { Tasks } from '../../interfaces/task.interface';

@Component({
  selector: 'to-do-earring',
  templateUrl: './to-do-earring.component.html'
})
export class ToDoEarringComponent  implements OnInit {

  title : string = 'Por hacer';

  constructor( private taskService : ToDoService ) { }

  ngOnInit() {}

  get task():Tasks[] {
    return [...this.taskService.toDo];
  }

  get countStatus() {
    return this.task.filter(count => count.status === false).length;
  }

}