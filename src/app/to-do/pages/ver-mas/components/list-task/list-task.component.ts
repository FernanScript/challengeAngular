import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Tasks } from 'src/app/to-do/interfaces/task.interface';
import { ToDoService } from 'src/app/to-do/services/to-do.service';

@Component({
  selector: 'to-do-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss'],
})
export class ListTaskComponent  implements OnChanges {

  taskListEmpty : string = 'Todas tus tareas apareceran aquí'

  constructor( private toDoService : ToDoService ) { }

  ngOnInit() {}

  ngOnChanges(): void {
    this.filterTasks()
  }

  @Input()
  public showTasks !: Tasks[];

  @Input()
  filterTask !: string

  get listTask():Tasks[] {
    return this.toDoService.toDo
  }

  removeTask(i:number):void {
    this.toDoService.deleteTasksData(i);
  }

  checkTask(task:Tasks, i:number):void {
    this.showTasks[i].status =! task.status
    this.toDoService.safeTasksData()
  }

  filterTasks() {
    if(this.filterTask) {
      this.showTasks = this.listTask.filter(task => task.name.toLowerCase().includes(this.filterTask.toLowerCase()));
    } else {
      this.showTasks = this.listTask;
    }
  }
}
