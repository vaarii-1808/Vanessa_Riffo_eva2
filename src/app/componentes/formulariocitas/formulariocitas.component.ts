import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonItem,
  IonInput,
  IonButton,
  IonLabel
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-formulariocitas',
  templateUrl: './formulariocitas.component.html',
  styleUrls: ['./formulariocitas.component.scss'],
  standalone: true,
  imports:[
    CommonModule,
    FormsModule,
    IonItem,
    IonInput,
    IonButton,
    IonLabel
  ]
})
export class FormulariocitasComponent {
  frase = '';
  autor = '';
  clicked = false;

  @Output() agregar = new EventEmitter<{ frase: string; autor: string }>();

  submit() {
    this.clicked = true;

    if (this.frase.trim() && this.autor.trim()) {
      this.agregar.emit({
        frase: this.frase,
        autor: this.autor
      });

      this.frase = '';
      this.autor = '';
      this.clicked = false;
    }
  }
}
