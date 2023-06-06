import { Component, Input, OnInit } from '@angular/core';
import { Tasks } from '../../interfaces/task.interface';
import { ToDoService } from '../../services/to-do.service';

@Component({
  selector: 'app-ver-mas',
  templateUrl: './ver-mas.page.html',
  styleUrls: ['./ver-mas.page.scss'],
})
export class VerMasPage implements OnInit {

  constructor( private taskService : ToDoService ) { }

  ngOnInit() {
  }

  filterTask !: string

  get listTask():Tasks[] {
    return this.taskService.toDo
  }

  onSearchChanged(task:string):void {
    this.filterTask = task
  }

}
