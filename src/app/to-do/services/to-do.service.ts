import { Injectable } from '@angular/core';
import { Tasks } from '../interfaces/task.interface';
import { Categories } from '../interfaces/category.interface';

@Injectable({providedIn: 'root'})

export class ToDoService {

  private _category : Categories[] = [
    Categories.Universidad,
    Categories.Trabajo,
    Categories.Compras,
    Categories.Casa
  ];

  constructor() {
    this.loadStorage();
  }

  get category() : Categories[] {
    return [...this._category];
  }

  toDo:Tasks[] = [];

  addTask(task:Tasks):void {
      const newTask:Tasks = {...task};
      this.toDo.push(newTask);
      this.safeTasksData()
  }

   safeTasksData():void {
    localStorage.setItem('formTaskData', JSON.stringify(this.toDo));
  }

  deleteTasksData(index:number):void {
    this.toDo.splice(index,1);
    this.safeTasksData();
  }

  private loadStorage():void {
    if( !localStorage.getItem('formTaskData')) return;

    this.toDo = JSON.parse(localStorage.getItem('formTaskData')!);
  }
}