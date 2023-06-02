import { Component, Input, OnInit } from '@angular/core';
import { ToDoService } from '../../services/to-do.service';
import { Tasks } from '../../interfaces/task.interface';

@Component({
  selector: 'to-do-finished',
  templateUrl: './to-do-finished.component.html',
  styleUrls: ['./to-do-finished.component.scss'],
})
export class ToDoFinishedComponent  implements OnInit {

  title : string = 'Terminadas';

  constructor( private taskService : ToDoService ) { }

  ngOnInit() {}

  @Input()
  public taskStatus !: Task[];

  get task():Tasks[] {
    return [...this.taskService.toDo];
  }

}
