import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonButton,
  IonList,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trashOutline } from 'ionicons/icons';
import { FormulariocitasComponent } from '../componentes/formulariocitas/formulariocitas.component';
import { Servicios } from '../servicios';

@Component({
  selector: 'app-gestioncitas',
  templateUrl: './gestioncitas.page.html',
  styleUrls: ['./gestioncitas.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonButton,
    IonList,
    IonIcon,
    FormulariocitasComponent
  ]
})
export class GestioncitasPage {
citas: any[] = [];

  constructor(private servicios: Servicios) {
    addIcons({ trashOutline });
  }

  async ionViewWillEnter() {
    await this.servicios.initDB();

    const borrar = await this.servicios.getBorrarCitas();

    if (borrar) {
      await this.servicios.eliminarTodasLasCitas();
      this.citas = [];
    } else {
      this.citas = await this.servicios.obtenerCitas();
    }
  }

  async agregarCita(cita: any) {
    await this.servicios.agregarCita(cita.frase, cita.autor);
    this.citas = await this.servicios.obtenerCitas();
  }

  async eliminarCita(cita: any) {
    await this.servicios.eliminarCita(cita.id);
    this.citas = await this.servicios.obtenerCitas();
  }
}

