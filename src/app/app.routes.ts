import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OffresComponent } from './pages/offres/offres.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'offres', component: OffresComponent },
];
