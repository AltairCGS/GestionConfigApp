import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() texto: string = "";
  @Output() onEliminar: EventEmitter<any> = new EventEmitter();
  isTareaCompletada: boolean = false;


  eliminar() {
    this.onEliminar.emit(null);
  }


}
