import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LeagueDataService } from '../../core/services/league-data.service';
import { CrestComponent } from '../../shared/crest.component';
import { Player } from '../../core/models/league.models';

@Component({
  selector: 'app-team-detail-page',
  imports: [RouterLink, CrestComponent],
  template: `
    <main class="entity-page">
      @if (team; as currentTeam) {
        <section class="team-profile-hero">
          <div class="team-profile-nav"><a class="back-link" [routerLink]="['/temporadas', year, 'equipos']">← Todos los equipos</a><span>Divisional A · {{ year }}</span></div>
          <div class="team-identity"><app-crest [shortName]="currentTeam.shortName" /><div><p class="eyebrow"><span></span>CLUB</p><h1>{{ currentTeam.name }}</h1><p>Plantel oficial de la rama masculina.</p></div></div>
          <div class="team-profile-stats"><div><b>{{ standing?.played ?? 0 }}</b><span>Partidos</span></div><div><b>{{ standing?.points ?? 0 }}</b><span>Puntos</span></div><div><b>{{ players.length }}</b><span>Jugadores</span></div></div>
        </section>
        <section class="section entity-content">
          <div class="content-heading"><div><p class="eyebrow"><span></span>PLANTEL {{ year }}</p><h2>Jugadores</h2></div><p>Seleccioná un jugador para ver su ficha individual.</p></div>
          <div class="players-grid">
            @for (player of players; track player.id; let i = $index) {
              <a class="player-card" [routerLink]="['/temporadas', year, 'equipos', currentTeam.id, 'jugadores', player.id]">
                <span class="player-avatar">{{ initials(player.name) }}</span><div><small>JUGADOR {{ (i + 1).toString().padStart(2, '0') }}</small><h3>{{ player.name }}</h3></div><span class="card-arrow">→</span>
              </a>
            }
          </div>
        </section>
      } @else { <section class="empty-season"><h2>Equipo no encontrado</h2><a class="button primary" [routerLink]="['/temporadas', year, 'equipos']">Ver equipos</a></section> }
    </main>
  `
})
export class TeamDetailPageComponent {
  protected readonly data = inject(LeagueDataService);
  private readonly route = inject(ActivatedRoute);
  protected readonly year = Number(this.route.snapshot.paramMap.get('year'));
  protected readonly teamId = this.route.snapshot.paramMap.get('teamId') ?? '';
  protected readonly team = this.data.getTeam(this.year, this.teamId);
  protected readonly players = this.team?.players.filter((player: Player) => player.branch === 'masculino') ?? [];
  protected readonly standing = this.data.getStandings(this.year).find((item) => item.id === this.teamId);
  protected initials(name: string) { return name.split(' ').filter(Boolean).slice(0, 2).map((part) => part[0]).join('').toUpperCase(); }
}
