import { Injectable } from '@angular/core';
import { AVAILABLE_SEASONS, COMPETITIONS, DIVISIONAL_A_TEAM_IDS, MATCHES, SCORERS, STANDINGS } from '../data/mock-league.data';
import { TEAMS } from '../data/mock-teams.data';

@Injectable({ providedIn: 'root' })
export class LeagueDataService {
  readonly seasons = AVAILABLE_SEASONS;
  readonly competitions = COMPETITIONS;

  getTeams(year: number) {
    return this.hasData(year) ? TEAMS : [];
  }

  getTeam(year: number, teamId: string) {
    return this.getTeams(year).find((team) => team.id === teamId);
  }

  getDivisionalATeams(year: number) {
    if (!this.hasData(year)) return [];
    return DIVISIONAL_A_TEAM_IDS
      .map((id) => this.getTeam(year, id))
      .filter((team) => team !== undefined);
  }

  getPlayer(year: number, teamId: string, playerId: string) {
    return this.getTeam(year, teamId)?.players.find((player) => player.id === playerId);
  }

  hasData(year: number): boolean {
    return year === new Date().getFullYear();
  }

  getStandings(year: number) {
    return this.hasData(year) ? STANDINGS : [];
  }

  getMatches(year: number) {
    return this.hasData(year) ? MATCHES : [];
  }

  getScorers(year: number) {
    return this.hasData(year) ? SCORERS : [];
  }
}
