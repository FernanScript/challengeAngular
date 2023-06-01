import { Component, OnInit } from '@angular/core';
import { Tasks } from '../../interfaces/task.interface';
import { ToDoService } from '../../services/to-do.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor( private taskService : ToDoService ) { }

  ngOnInit() {
  }

  addNewTasks(task:Tasks):void {
    this.taskService.addTask(task);
  }

}
