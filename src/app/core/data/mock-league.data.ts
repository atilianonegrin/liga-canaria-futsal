import { Competition, Match, Scorer, TeamStanding } from '../models/league.models';

export const COMPETITIONS: Competition[] = [
  { id: 'divisional-a', name: 'Divisional A', kind: 'Primera división', teams: 10, format: 'Apertura · Clausura', active: true, icon: 'A' },
  { id: 'divisional-b', name: 'Divisional B', kind: 'Segunda división', teams: 7, format: 'Liga', active: false, icon: 'B' },
  { id: 'femenina', name: 'Divisional Femenina', kind: 'Futsal femenino', teams: 7, format: 'Liga', active: false, icon: 'F' },
  { id: 'copa', name: 'Copa Canaria', kind: 'Copa', teams: 16, format: 'Eliminación directa', active: false, icon: '◆' }
];

export const STANDINGS: TeamStanding[] = [
  { id: 'sj', name: 'San Jacinto', shortName: 'SJC', played: 4, won: 4, drawn: 0, lost: 0, goalsFor: 19, goalsAgainst: 7, points: 12 },
  { id: 'dlc', name: 'Dep. La Cañada', shortName: 'DLC', played: 4, won: 3, drawn: 1, lost: 0, goalsFor: 17, goalsAgainst: 8, points: 10 },
  { id: 'progreso', name: 'Progreso', shortName: 'PRO', played: 4, won: 3, drawn: 0, lost: 1, goalsFor: 14, goalsAgainst: 9, points: 9 },
  { id: 'wanderers', name: 'Wanderers', shortName: 'WAN', played: 4, won: 2, drawn: 1, lost: 1, goalsFor: 13, goalsAgainst: 10, points: 7 },
  { id: 'independiente', name: 'Independiente', shortName: 'IND', played: 4, won: 2, drawn: 0, lost: 2, goalsFor: 11, goalsAgainst: 12, points: 6 },
  { id: 'union', name: 'Unión', shortName: 'UNI', played: 4, won: 1, drawn: 2, lost: 1, goalsFor: 10, goalsAgainst: 11, points: 5 }
];

export const MATCHES: Match[] = [
  { id: 'm1', day: 'SÁB', date: '8 AGO', home: { name: 'San Jacinto', shortName: 'SJC' }, away: { name: 'Dep. La Cañada', shortName: 'DLC' }, time: '21:30', status: 'Próximo' },
  { id: 'm2', day: 'VIE', date: '7 AGO', home: { name: 'Progreso', shortName: 'PRO' }, away: { name: 'Wanderers', shortName: 'WAN' }, time: '22:00', status: 'Próximo' },
  { id: 'm3', day: 'SÁB', date: '1 AGO', home: { name: 'Independiente', shortName: 'IND' }, away: { name: 'Unión', shortName: 'UNI' }, score: '4 – 2', status: 'Finalizado' }
];

export const SCORERS: Scorer[] = [
  { name: 'Martín Silva', initials: 'MS', team: 'San Jacinto', goals: 8 },
  { name: 'Nicolás Pérez', initials: 'NP', team: 'Dep. La Cañada', goals: 7 },
  { name: 'Lucas Rodríguez', initials: 'LR', team: 'Progreso', goals: 6 },
  { name: 'Federico Díaz', initials: 'FD', team: 'Wanderers', goals: 5 }
];

export const AVAILABLE_SEASONS = Array.from(
  { length: new Date().getFullYear() - 2018 },
  (_, index) => new Date().getFullYear() - index
);
