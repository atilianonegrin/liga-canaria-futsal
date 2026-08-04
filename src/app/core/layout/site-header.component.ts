import { Component, computed, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LeagueDataService } from '../services/league-data.service';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, FormsModule],
  template: `
    <header class="site-header">
      <a class="brand" routerLink="/" aria-label="Liga Canaria de Futsal, inicio">
        <img class="league-mark" src="assets/brand/liga-canaria-futsal-escudo.png" alt="" width="52" height="52">
        <span><b>Liga Canaria</b><small>Futsal</small></span>
      </a>
      <nav class="desktop-nav" aria-label="Navegación principal">
        <a routerLink="/">Inicio</a>
        <a [routerLink]="['/temporadas', selectedYear, 'divisional-a']">Divisional A</a>
        <a routerLink="/" fragment="competencias">Competencias</a>
        <a routerLink="/" fragment="equipos">Equipos</a>
      </nav>
      <label class="season-selector">
        <span>Temporada</span>
        <select [ngModel]="selectedYear" (ngModelChange)="changeSeason($event)" aria-label="Temporada">
          @for (year of data.seasons; track year) { <option [value]="year">{{ year }}</option> }
        </select>
      </label>
    </header>
  `
})
export class SiteHeaderComponent {
  protected readonly data = inject(LeagueDataService);
  private readonly router = inject(Router);
  protected get selectedYear(): number {
    const match = this.router.url.match(/temporadas\/(\d{4})/);
    return match ? Number(match[1]) : new Date().getFullYear();
  }
  protected changeSeason(year: number | string): void {
    const value = Number(year);
    if (this.router.url.includes('/divisional-a')) {
      this.router.navigate(['/temporadas', value, 'divisional-a']);
    } else {
      this.router.navigate(['/'], { queryParams: { temporada: value } });
    }
  }
}
