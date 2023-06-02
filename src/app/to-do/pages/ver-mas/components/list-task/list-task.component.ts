import { Component, Input, OnInit, Output } from '@angular/core';
import { Tasks } from 'src/app/to-do/interfaces/task.interface';

@Component({
  selector: 'to-do-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss'],
})
export class ListTaskComponent  implements OnInit {

  taskListEmpty : string = 'Todas tus tareas apareceran aquí'

  constructor() { }

  ngOnInit() {}

  @Input()
  public showTasks !: Tasks[];

  removeTask(i:number):void {
    this.showTasks.splice(i,1);
  }

  checkTask(task:Tasks, i:number):void {
    this.showTasks[i].status =! task.status
  }
}
