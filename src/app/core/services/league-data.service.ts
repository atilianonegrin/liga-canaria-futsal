import { Injectable } from '@angular/core';
import { AVAILABLE_SEASONS, COMPETITIONS, MATCHES, SCORERS, STANDINGS } from '../data/mock-league.data';

@Injectable({ providedIn: 'root' })
export class LeagueDataService {
  readonly seasons = AVAILABLE_SEASONS;
  readonly competitions = COMPETITIONS;

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
