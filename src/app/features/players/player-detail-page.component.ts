import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LeagueDataService } from '../../core/services/league-data.service';
import { CrestComponent } from '../../shared/crest.component';

@Component({
  selector: 'app-player-detail-page',
  imports: [RouterLink, CrestComponent],
  template: `
    <main class="entity-page">
      @if (team && player) {
        <section class="player-profile">
          <a class="back-link" [routerLink]="['/temporadas', year, 'equipos', team.id]">← Volver al plantel</a>
          <div class="player-profile-card">
            <span class="player-avatar large">{{ initials(player.name) }}</span>
            <div class="player-main"><p class="eyebrow"><span></span>FICHA DE JUGADOR</p><h1>{{ player.name }}</h1><a class="player-team-link" [routerLink]="['/temporadas', year, 'equipos', team.id]"><app-crest [shortName]="team.shortName" /><span><small>EQUIPO</small><b>{{ team.name }}</b></span><strong>→</strong></a></div>
          </div>
          <div class="privacy-note"><span>✓</span><div><b>Perfil deportivo</b><p>Esta ficha muestra únicamente la información necesaria para identificar al jugador dentro de la competencia.</p></div></div>
        </section>
      } @else { <section class="empty-season"><h2>Jugador no encontrado</h2><a class="button primary" [routerLink]="['/temporadas', year, 'equipos']">Ver equipos</a></section> }
    </main>
  `
})
export class PlayerDetailPageComponent {
  protected readonly data = inject(LeagueDataService);
  private readonly route = inject(ActivatedRoute);
  protected readonly year = Number(this.route.snapshot.paramMap.get('year'));
  protected readonly teamId = this.route.snapshot.paramMap.get('teamId') ?? '';
  protected readonly playerId = this.route.snapshot.paramMap.get('playerId') ?? '';
  protected readonly team = this.data.getTeam(this.year, this.teamId);
  protected readonly player = this.data.getPlayer(this.year, this.teamId, this.playerId);
  protected initials(name: string) { return name.split(' ').filter(Boolean).slice(0, 2).map((part) => part[0]).join('').toUpperCase(); }
}
