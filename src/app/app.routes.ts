import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home/home-page.component';
import { DivisionalAPageComponent } from './features/competitions/divisional-a-page.component';
import { TeamsPageComponent } from './features/teams/teams-page.component';
import { TeamDetailPageComponent } from './features/teams/team-detail-page.component';
import { PlayerDetailPageComponent } from './features/players/player-detail-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Liga Canaria de Futsal' },
  {
    path: 'temporadas/:year/divisional-a',
    component: DivisionalAPageComponent,
    title: 'Divisional A | Liga Canaria de Futsal'
  },
  { path: 'temporadas/:year/equipos', component: TeamsPageComponent, title: 'Equipos | Liga Canaria de Futsal' },
  { path: 'temporadas/:year/equipos/:teamId', component: TeamDetailPageComponent, title: 'Equipo | Liga Canaria de Futsal' },
  { path: 'temporadas/:year/equipos/:teamId/jugadores/:playerId', component: PlayerDetailPageComponent, title: 'Jugador | Liga Canaria de Futsal' },
  { path: '**', redirectTo: '' }
];
