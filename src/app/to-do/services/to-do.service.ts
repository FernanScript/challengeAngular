import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Tasks } from '../interfaces/task.interface';

@Injectable({providedIn: 'root'})

export class ToDoService {
    // constructor(private http: HttpClient) { }

    toDo:Tasks[] = [
      // {
      //   name : 'Ir al supermercado',
      //   description : 'Hacer las compras de mi casa',
      //   category : {
      //     name : ['Universidad','Trabajo','Compras'],
      //     color : ['yellow']
      //   },
      //   fechaFin : new Date('22/05/2023')
      // },
    ];

    addTask(task:Tasks):void {
        const newTask:Tasks = {...task};
        this.toDo.push(newTask);
    }
}