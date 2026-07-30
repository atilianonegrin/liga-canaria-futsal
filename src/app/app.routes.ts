import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home/home-page.component';
import { DivisionalAPageComponent } from './features/competitions/divisional-a-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Liga Canaria de Futsal' },
  {
    path: 'temporadas/:year/divisional-a',
    component: DivisionalAPageComponent,
    title: 'Divisional A | Liga Canaria de Futsal'
  },
  { path: '**', redirectTo: '' }
];
