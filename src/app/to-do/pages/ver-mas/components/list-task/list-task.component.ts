import { Component, Input, OnInit } from '@angular/core';
import { Tasks } from 'src/app/to-do/interfaces/task.interface';

@Component({
  selector: 'to-do-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss'],
})
export class ListTaskComponent  implements OnInit {

  isChecked : boolean = false;

  constructor() { }

  ngOnInit() {}

  @Input()
  public showTasks !: Tasks[];

  removeTask(i:number):void {
    this.showTasks.splice(i,1);
  }

  checkTask(i:number):void {
    while (this.isChecked === false) {

      this.isChecked = true;
      
    }
  }

  isCheckFalse():void {
    this.isChecked = false;
  }
}
