import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'to-do-earring',
  templateUrl: './to-do-earring.component.html',
  styleUrls: ['./to-do-earring.component.scss'],
})
export class ToDoEarringComponent  implements OnInit {

  title : string = 'Por hacer';

  constructor() { }

  ngOnInit() {}

}
