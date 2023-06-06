import { Component, OnInit, Output } from '@angular/core';
import { ToDoService } from 'src/app/to-do/services/to-do.service';


@Component({
  selector: 'to-do-search-task',
  templateUrl: './search-task.component.html',
  styleUrls: ['./search-task.component.scss'],
})
export class SearchTaskComponent  implements OnInit {

  constructor( private toDoService : ToDoService ) { }

  ngOnInit() {
  }

  // searchTasks() {
  //   const searchTask = this.taskInput.nativeElement.value;
  //    this.toDoService.searchTask(searchTask);
  //    this.taskInput.nativeElement.value = '';
  // }

  // @Output() 
  // searchTask = new EventEmitter();

  // onSearchTasks(event:any) {
  //   this.searchTask.emit(event)
  // }

  // @Output() 
  // searchChanged = new EventEmitter();

  // onSearch(task:string) {
  //   this.searchChanged.emit(task)
  // }

}
