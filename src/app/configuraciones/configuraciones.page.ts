import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonItem,
  IonLabel,
  IonToggle
} from '@ionic/angular/standalone';
import { Preferences } from '@capacitor/preferences';
import { Servicios } from '../servicios';

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.page.html',
  styleUrls: ['./configuraciones.page.scss'],
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
    IonItem,
    IonLabel,
    IonToggle
  ]
})
export class ConfiguracionesPage {
  permitirEliminarEnInicio = false;
  private readonly KEY_ELIMINAR = 'permitirEliminar';
  constructor(private configService: Servicios) {}

  async ionViewWillEnter() {
    this.permitirEliminarEnInicio =
      await this.configService.getBorrarCitas();
  }

  async guardarConfiguracion() {
    await this.configService.setBorrarCitas(this.permitirEliminarEnInicio);
  }
}
