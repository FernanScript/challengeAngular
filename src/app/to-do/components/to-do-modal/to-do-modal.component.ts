import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tasks } from '../../interfaces/task.interface';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToDoService } from '../../services/to-do.service';
import { Categories } from '../../interfaces/category.interface';

@Component({
  selector: 'to-do-modal',
  templateUrl: './to-do-modal.component.html',
  styleUrls: ['./to-do-modal.component.scss'],
})
export class ToDoModalComponent  implements OnInit {

  public formModal : FormGroup = this.fb.group({
    category : ['', Validators.required]
  });

  titleModal : string = 'Crear nueva tarea';
  btnModalCrear : string = 'Crear';
  btnModalCancelar : string = 'Cancelar';

  titleTask : string = "Título";
  placeholderTask : string = "Agrega el título de la tarea aquí...";
  categoryTask : string = "Categoría";
  descriptionTask : string = "Descripción";
  descriptionText : string = "Agrega una descripción";

  dateTask = new Date();

  colorTask : string[] = ['yellow','blue','orange'];

  constructor(
    private toastController: ToastController,
    private fb : FormBuilder,
    private toDoService : ToDoService,
  ) {}

  ngOnInit() {
  }

  task:Tasks = {
    name : '',
    description : '',
    category : this.formModal.value,
    status : false
  };

  @Output()
  newTask = new EventEmitter<Tasks>();

  emitTask():void {

    if(this.task.name.length === 0) return;
    this.newTask.emit(this.task);

    this.task = { name : '', description : '', category :  this.formModal.value, status : false};
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    if(this.task.name.length === 0) return;
    const toast = await this.toastController.create({
      icon : 'checkmark-circle',
      color : 'success',
      message: '¡Tarea Agregada!',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  // private emptyFields() {
  //   if(this.task.name.length === 0 ){
  //     return;
  //   } 
  // }

  get category():Categories[] {
    return this.toDoService.category;
  }

}
