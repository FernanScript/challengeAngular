import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';

@Component({
  selector: 'to-do-clock',
  templateUrl: './to-do-clock.component.html',
  styleUrls: ['./to-do-clock.component.scss'],
})
export class ToDoClockComponent  implements OnInit {

  // currentTime !: string;

  constructor() { }

  ngOnInit() {}

  // getCurrentTime() {
  //   setInterval( () => {
  //     this.currentTime = format(new Date(), 'dd:MM');
  //   }, 1000);
  // }

  date = new Date();
  formattedDate = format(this.date, 'dd MMMM');
  horaMinuto = format(this.date, 'HH:mm a');

}
