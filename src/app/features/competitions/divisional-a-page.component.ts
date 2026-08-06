import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LeagueDataService } from '../../core/services/league-data.service';
import { CrestComponent } from '../../shared/crest.component';

@Component({
  selector: 'app-divisional-a-page',
  imports: [RouterLink, CrestComponent],
  template: `
    <main class="division-page">
      <section class="competition-hero">
        <div><a class="back-link" routerLink="/">← Volver al inicio</a><p class="eyebrow"><span></span>PRIMERA DIVISIÓN · {{ year }}</p><h1>Divisional A</h1><p>10 equipos · Apertura, Clausura y Tabla Anual</p></div>
        <nav class="tournament-switcher"><a class="active" href="#apertura">Apertura</a><a href="#clausura">Clausura</a><a href="#anual">Anual</a></nav>
      </section>

      @if (!data.hasData(year)) {
        <section class="empty-season"><span>{{ year }}</span><h2>Temporada pendiente de carga</h2><p>La estructura ya está pronta. Cuando carguemos los datos históricos de {{ year }}, acá aparecerán partidos, posiciones y goleadores.</p><a class="button primary" routerLink="/">Volver al inicio</a></section>
      } @else {
        <section class="section division-content" id="apertura">
          <div class="division-title"><div><p class="eyebrow"><span></span>APERTURA · 9 FECHAS</p><h2>Resumen del torneo</h2></div><nav class="tabs"><a class="active" href="#apertura">Resumen</a><a href="#partidos">Partidos</a><a href="#tabla">Tabla</a><a [routerLink]="['/temporadas', year, 'equipos']">Equipos</a><a href="#goleadores">Goleadores</a></nav></div>
          <div class="dashboard-grid">
            <article class="panel standings-panel" id="tabla">
              <div class="panel-heading"><div><small>APERTURA</small><h3>Tabla de posiciones</h3></div><span>Fecha 4</span></div>
              <div class="table-row table-head"><span>POS</span><span>EQUIPO</span><span>PJ</span><span>DG</span><span>PTS</span></div>
              @for (team of standings; track team.id; let i = $index) {
                <a class="table-row table-link" [routerLink]="['/temporadas', year, 'equipos', team.id]" [attr.aria-label]="'Ver equipo ' + team.name"><span class="position" [class.leader]="i === 0">{{ i + 1 }}</span><span class="team-cell"><app-crest [shortName]="team.shortName" /><b>{{ team.name }}</b></span><span>{{ team.played }}</span><span>{{ team.goalsFor - team.goalsAgainst > 0 ? '+' : '' }}{{ team.goalsFor - team.goalsAgainst }}</span><strong>{{ team.points }}</strong></a>
              }
            </article>
            <article class="panel" id="partidos">
              <div class="panel-heading"><div><small>AGENDA</small><h3>Partidos destacados</h3></div></div>
              @for (match of matches; track match.id) {
                <div class="match-row"><div class="match-date"><b>{{ match.day }}</b><span>{{ match.date }}</span></div><div class="match-team"><app-crest [shortName]="match.home.shortName" /><span>{{ match.home.name }}</span></div><div class="match-time">{{ match.score || match.time }}<small>{{ match.status }}</small></div><div class="match-team away"><span>{{ match.away.name }}</span><app-crest [shortName]="match.away.shortName" /></div></div>
              }
            </article>
            <article class="panel" id="goleadores">
              <div class="panel-heading"><div><small>GOLEADORES</small><h3>Los que mandan</h3></div></div>
              @for (player of scorers; track player.name; let i = $index) {
                <div class="scorer-row"><span class="rank">{{ i + 1 }}</span><span class="avatar">{{ player.initials }}</span><div><b>{{ player.name }}</b><small>{{ player.team }}</small></div><strong>{{ player.goals }}<small>GOLES</small></strong></div>
              }
            </article>
          </div>
        </section>
        <section class="format-section" id="clausura">
          <div><p class="eyebrow"><span></span>FORMATO {{ year }}</p><h2>Una temporada,<br>tres caminos a la gloria.</h2></div>
          <div class="format-steps"><article><b>01</b><div><h3>Apertura</h3><p>Todos contra todos a una rueda.</p></div></article><article><b>02</b><div><h3>Clausura</h3><p>Una nueva rueda entre los 10 equipos.</p></div></article><article id="anual"><b>03</b><div><h3>Tabla Anual</h3><p>Suma los puntos de ambos torneos y asegura un lugar en la definición.</p></div></article></div>
          <p class="champion-rule">Si un mismo equipo gana Apertura, Clausura y Anual, se consagra campeón automáticamente.</p>
        </section>
      }
    </main>
  `
})
export class DivisionalAPageComponent {
  protected readonly data = inject(LeagueDataService);
  protected readonly year = Number(inject(ActivatedRoute).snapshot.paramMap.get('year'));
  protected readonly standings = this.data.getStandings(this.year);
  protected readonly matches = this.data.getMatches(this.year);
  protected readonly scorers = this.data.getScorers(this.year);
}
