import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Output() onAgregar: EventEmitter<any> = new EventEmitter();

  text: string = "";

  agregar() {
    this.onAgregar.emit(this.text)
  }

}
