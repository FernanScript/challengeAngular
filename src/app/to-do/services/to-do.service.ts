import { Injectable } from '@angular/core';
// import { StorageService } from 'ngx-webstorage-service';
import { Tasks } from '../interfaces/task.interface';
import { Categories } from '../interfaces/category.interface';

@Injectable({providedIn: 'root'})

export class ToDoService {
  // constructor(private localStorage: StorageService) { }

  private _category : Categories[] = [
    Categories.Universidad,
    Categories.Trabajo,
    Categories.Compras,
    Categories.Casa
  ];

  get category() : Categories[] {
    return [...this._category];
  }

  toDo:Tasks[] = [];

  addTask(task:Tasks):void {
      const newTask:Tasks = {...task};
      this.toDo.push(newTask);
  }

  // addTask():void {
  //   const newTask:Tasks = this.localStorage.get('tasks') || [];
  //   this.toDo.push(newTask);
  //   this.localStorage.set('tasks',newTask)
  // }
}