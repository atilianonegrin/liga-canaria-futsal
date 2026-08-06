import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LeagueDataService } from '../../core/services/league-data.service';
import { CrestComponent } from '../../shared/crest.component';

@Component({
  selector: 'app-divisional-a-page',
  imports: [RouterLink, CrestComponent],
  template: `
    <main class="division-page">
      <section class="competition-hero">
        <div>
          <a class="back-link" routerLink="/">← Volver al inicio</a>
          <p class="eyebrow"><span></span>PRIMERA DIVISIÓN · {{ year }}</p>
          <h1>Divisional A</h1>
          <p>10 equipos · Apertura</p>
        </div>
        <nav class="tournament-switcher">
          <a class="active" href="#apertura">Apertura</a>
        </nav>
      </section>

      @if (!data.hasData(year)) {
        <section class="empty-season">
          <span>{{ year }}</span>
          <h2>Temporada pendiente de carga</h2>
          <p>La estructura ya está pronta. Cuando carguemos los datos de {{ year }}, acá aparecerá la tabla de posiciones.</p>
          <a class="button primary" routerLink="/">Volver al inicio</a>
        </section>
      } @else {
        <section class="section division-content" id="apertura">
          <div class="division-title">
            <div>
              <p class="eyebrow"><span></span>APERTURA</p>
              <h2>Tabla de posiciones</h2>
            </div>
          </div>

          <div class="dashboard-grid">
            <article class="panel standings-panel" id="tabla">
              <div class="panel-heading">
                <div><small>APERTURA</small><h3>Tabla de posiciones</h3></div>
              </div>
              <div class="table-row table-head"><span>POS</span><span>EQUIPO</span><span>PJ</span><span>DG</span><span>PTS</span></div>
              @for (team of standings; track team.id; let i = $index) {
                <div class="table-row">
                  <span class="position" [class.leader]="i === 0">{{ i + 1 }}</span>
                  <span class="team-cell"><app-crest [shortName]="team.shortName" /><b>{{ team.name }}</b></span>
                  <span>{{ team.played }}</span>
                  <span>{{ team.goalsFor - team.goalsAgainst > 0 ? '+' : '' }}{{ team.goalsFor - team.goalsAgainst }}</span>
                  <strong>{{ team.points }}</strong>
                </div>
              }
            </article>
          </div>
        </section>
      }
    </main>
  `
})
export class DivisionalAPageComponent {
  protected readonly data = inject(LeagueDataService);
  protected readonly year = Number(inject(ActivatedRoute).snapshot.paramMap.get('year'));
  protected readonly standings = this.data.getStandings(this.year);
}
