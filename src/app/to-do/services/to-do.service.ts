import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tasks } from '../interfaces/task.interface';

@Injectable({providedIn: 'root'})
export class ToDoService {
    constructor(private http: HttpClient) { }

   
    
}