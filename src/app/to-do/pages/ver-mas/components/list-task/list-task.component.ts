import { Component, Input, OnInit } from '@angular/core';
import { Tasks } from 'src/app/to-do/interfaces/task.interface';
import { ToDoService } from 'src/app/to-do/services/to-do.service';

@Component({
  selector: 'to-do-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss'],
})
export class ListTaskComponent  implements OnInit {

  taskListEmpty : string = 'Todas tus tareas apareceran aquí';
  searchTask !: string;

  constructor( private toDoService : ToDoService ) { }

  ngOnInit() {}

  @Input()
  public showTasks !: Tasks[];

  removeTask(i:number):void {
    this.toDoService.deleteTasksData(i);
  }

  checkTask(task:Tasks, i:number):void {
    this.showTasks[i].status =! task.status
    this.toDoService.safeTasksData()
  }

}