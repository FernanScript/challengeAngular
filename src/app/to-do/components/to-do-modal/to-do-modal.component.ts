import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tasks } from '../../interfaces/task.interface';

@Component({
  selector: 'to-do-modal',
  templateUrl: './to-do-modal.component.html',
  styleUrls: ['./to-do-modal.component.scss'],
})
export class ToDoModalComponent  implements OnInit {

  titleModal : string = 'Crear nueva tarea';
  btnModalCrear : string = 'Crear';
  btnModalCancelar : string = 'Cancelar';

  titleTask : string = "Título";
  placeholderTask : string = "Agrega el título de la tarea aquí...";
  categoryTask : string = "Categoría";
  descriptionTask : string = "Descripción";
  descriptionText : string = "Agrega una descripción";

  dateTask = new Date();

  optionsTask : string[] = ['Universidad','Trabajo','Compras'];
  colorTask : string[] = ['yellow','blue','orange'];

  ngOnInit() {}

  task:Tasks = {
    name : '',
    description : ''
  };

  @Output()
  newTask = new EventEmitter<Tasks>();

  emitTask():void {

    console.log(this.task)

    if(this.task.name.length === 0) return;

    this.newTask.emit(this.task);
  }
}
