import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OffresComponent } from './pages/offres/offres.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AProposComponent } from './pages/a-propos/a-propos.component';
import { ConditionsGeneralesComponent } from './pages/conditions-generales/conditions-generales.component';
import { ConditionsUtilisationComponent } from './pages/conditions-utilisation/conditions-utilisation.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'offres', component: OffresComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: 'conditions-generales', component: ConditionsGeneralesComponent },
  { path: 'conditions-utilisation', component: ConditionsUtilisationComponent },
];
