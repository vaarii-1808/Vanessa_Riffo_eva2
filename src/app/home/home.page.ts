import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonCard,
  IonCardContent
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { settingsOutline } from 'ionicons/icons';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule, 
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    IonIcon,
    IonCard,
    IonCardContent
  ]
})
export class HomePage implements OnInit {

  citas = [
    { frase: 'Conócete a ti mismo y conocerás el universo.', autor: 'Carl Jung' },
    { frase: 'La vida no se trata de encontrarse a uno mismo, sino de crearse.', autor: 'Carl Rogers' },
    { frase: 'Donde hay ello, debo advenir yo.', autor: 'Sigmund Freud' },
    { frase: 'El ser humano está condenado a ser libre.', autor: 'Viktor Frankl' },
    { frase: 'No vemos las cosas como son, las vemos como somos.', autor: 'Anaïs Nin' }
  ];

  citaActual: { frase: string; autor: string } | null = null;

  constructor() {
    // Registro correcto del ícono
    addIcons({ settingsOutline });
  }

  ngOnInit() {
    this.obtenerCitaAleatoria();
  }

  obtenerCitaAleatoria() {
    const indice = Math.floor(Math.random() * this.citas.length);
    this.citaActual = this.citas[indice];
  }
}
