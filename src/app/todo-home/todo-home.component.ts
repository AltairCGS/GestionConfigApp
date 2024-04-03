import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-todo-home',
  templateUrl: './todo-home.component.html',
  styleUrl: './todo-home.component.css'
})
export class TodoHomeComponent {
  constructor(public auth: AuthService) {
    
  }

  LogOut() {
    this.auth.logout()
  }

  tasksList: string[] = [];

  eliminarTask(taskIndex: number) {
    this.tasksList.splice(taskIndex, 1);
  }

  agregarTask(newTask: string) {
    this.tasksList.push(newTask)
  }
}
