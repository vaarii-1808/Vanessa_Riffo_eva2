import { Routes } from '@angular/router';

import { HomePage } from './home/home.page';
import { ConfiguracionesPage } from './configuraciones/configuraciones.page';
import { GestioncitasPage } from './gestioncitas/gestioncitas.page';

export const routes = [
  { path: '', component: HomePage },
  { path: 'gestioncitas', component: GestioncitasPage },
  { path: 'configuraciones', component: ConfiguracionesPage }
];
