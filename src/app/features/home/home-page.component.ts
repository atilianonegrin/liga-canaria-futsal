import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LeagueDataService } from '../../core/services/league-data.service';
import { CrestComponent } from '../../shared/crest.component';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, CrestComponent],
  template: `
    <main>
      <section class="hero" id="inicio">
        <div class="hero-copy">
          <img class="hero-league-crest" src="assets/brand/liga-canaria-futsal-escudo.png" alt="Escudo oficial de la Liga Canaria de Futsal" width="112" height="112">
          <p class="eyebrow"><span></span>TEMPORADA {{ year }} · CANELONES</p>
          <h1>El futsal canario<br><em>se vive acá.</em></h1>
          <p class="hero-description">Fixture, resultados, posiciones y toda la información de la Liga Canaria de Futsal, en un solo lugar.</p>
          <div class="hero-actions">
            <a class="button primary" [routerLink]="['/temporadas', year, 'divisional-a']">Ver Divisional A <span>→</span></a>
            <a class="button secondary" href="#partidos">Últimos resultados</a>
          </div>
        </div>
        <article class="hero-card">
          <div class="live-label"><i></i> PRÓXIMO PARTIDO</div>
          <p class="match-meta">Divisional A · Apertura · Fecha 4</p>
          <div class="hero-teams">
            <div><app-crest shortName="SJC" /><b>San Jacinto</b></div>
            <span class="versus">VS<small>SÁB 21:30</small></span>
            <div><app-crest shortName="DLC" /><b>Dep. La Cañada</b></div>
          </div>
          <p class="venue">Gimnasio Municipal de Canelones</p>
        </article>
      </section>

      <section class="section" id="competencias">
        <div class="section-heading">
          <div><p class="eyebrow"><span></span>COMPETENCIAS</p><h2>Elegí dónde alentar</h2></div>
          <p>Seguí cada torneo de la liga, sus equipos, partidos y estadísticas.</p>
        </div>
        <div class="competition-grid">
          @for (competition of data.competitions; track competition.id) {
            <article class="competition-card" [class.featured]="competition.active">
              <div class="competition-top"><span class="competition-icon">{{ competition.icon }}</span><span class="status" [class.soon]="!competition.active">{{ competition.active ? 'EN JUEGO' : 'PRÓXIMAMENTE' }}</span></div>
              <p>{{ competition.kind }}</p><h3>{{ competition.name }}</h3>
              <div class="competition-info"><span><b>{{ competition.teams }}</b> equipos</span><span>{{ competition.format }}</span></div>
              @if (competition.active) {
                <a [routerLink]="['/temporadas', year, 'divisional-a']">Entrar a la competencia <span>→</span></a>
              } @else { <span class="disabled-link">Disponible próximamente</span> }
            </article>
          }
        </div>
      </section>

      <section class="home-highlights" id="partidos">
        <div><p class="eyebrow"><span></span>DIVISIONAL A</p><h2>Todo lo que pasa,<br>fecha a fecha.</h2></div>
        <div class="highlight-grid">
          <article><small>PRÓXIMO PARTIDO</small><b>San Jacinto <em>vs</em> Dep. La Cañada</b><span>Sábado · 21:30</span></article>
          <article><small>LÍDER APERTURA</small><b>San Jacinto</b><span>12 puntos</span></article>
          <article id="equipos"><small>MÁXIMO GOLEADOR</small><b>Martín Silva</b><span>8 goles</span></article>
        </div>
      </section>
      <nav class="mobile-nav"><a href="#inicio">⌂<small>Inicio</small></a><a href="#competencias">◆<small>Competencias</small></a><a [routerLink]="['/temporadas', year, 'divisional-a']">A<small>Divisional A</small></a></nav>
    </main>
  `
})
export class HomePageComponent {
  protected readonly data = inject(LeagueDataService);
  protected readonly year: number;
  constructor(route: ActivatedRoute) {
    const requested = Number(route.snapshot.queryParamMap.get('temporada'));
    this.year = this.data.seasons.includes(requested) ? requested : new Date().getFullYear();
  }
}
