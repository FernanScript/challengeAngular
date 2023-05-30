import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';

@Component({
  selector: 'to-do-clock',
  templateUrl: './to-do-clock.component.html',
  styleUrls: ['./to-do-clock.component.scss'],
})
export class ToDoClockComponent  implements OnInit {

  dayMonth !: string;
  hourMinute !: string;

  constructor() { }

  ngOnInit() {
    setInterval( () => {
      const date = new Date();
      this.dayMonth = format(date, 'dd MMMM');
      this.hourMinute = format(date, 'HH:mm a');
    }, 1000);
  }
}
