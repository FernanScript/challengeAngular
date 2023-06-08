import { Component, OnInit } from '@angular/core';
import { Tasks } from '../../interfaces/task.interface';
import { ToDoService } from '../../services/to-do.service';

@Component({
  selector: 'app-ver-mas',
  templateUrl: './ver-mas.page.html'
})
export class VerMasPage implements OnInit {

  constructor( private taskService : ToDoService ) { }

  ngOnInit() {}

  get listTask():Tasks[] {
    return this.taskService.toDo
  }

}