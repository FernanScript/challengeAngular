import { Component, OnInit } from '@angular/core';
import { Tasks } from '../../interfaces/task.interface';
import { Categories } from '../../interfaces/category.interface';

@Component({
  selector: 'to-do-modal',
  templateUrl: './to-do-modal.component.html',
  styleUrls: ['./to-do-modal.component.scss'],
})
export class ToDoModalComponent  implements OnInit {

  titleTask : string = "Título";
  placeholderTask : string = "Agrega el título de la tarea aquí...";
  categoryTask : string = "Categoría";
  descriptionTask : string = "Descripción";
  descriptionText : string = "Agrega una descripción";

  constructor() { }

  ngOnInit() {}

  // task:Tasks[] = [
  //   {
  //     name : '',
  //     description : '',
      
  //   }
  // ];

}
