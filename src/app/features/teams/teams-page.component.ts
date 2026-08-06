import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LeagueDataService } from '../../core/services/league-data.service';
import { CrestComponent } from '../../shared/crest.component';

@Component({
  selector: 'app-teams-page',
  imports: [RouterLink, CrestComponent],
  template: `
    <main class="entity-page">
      <section class="entity-hero compact">
        <div><a class="back-link" [routerLink]="['/temporadas', year, 'divisional-a']">← Divisional A</a><p class="eyebrow"><span></span>TEMPORADA {{ year }}</p><h1>Equipos</h1><p>Los 10 clubes que disputan la Divisional A.</p></div>
        <div class="entity-count"><b>{{ teams.length }}</b><span>clubes</span></div>
      </section>
      @if (teams.length) {
        <section class="section entity-content">
          <div class="entity-grid">
            @for (team of teams; track team.id; let i = $index) {
              <a class="team-card" [routerLink]="['/temporadas', year, 'equipos', team.id]">
                <span class="team-position">{{ (i + 1).toString().padStart(2, '0') }}</span>
                <app-crest [shortName]="team.shortName" />
                <div><small>DIVISIONAL A</small><h2>{{ team.name }}</h2><p>{{ malePlayers(team).length }} jugadores registrados</p></div><span class="card-arrow">→</span>
              </a>
            }
          </div>
        </section>
      } @else { <section class="empty-season"><h2>Sin equipos cargados</h2><p>Todavía no hay información para esta temporada.</p></section> }
    </main>
  `
})
export class TeamsPageComponent {
  protected readonly data = inject(LeagueDataService);
  protected readonly year = Number(inject(ActivatedRoute).snapshot.paramMap.get('year'));
  protected readonly teams = this.data.getDivisionalATeams(this.year);
  protected malePlayers(team: (typeof this.teams)[number]) { return team.players.filter((player) => player.branch === 'masculino'); }
}
