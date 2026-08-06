import { Competition, Match, Scorer, TeamStanding } from '../models/league.models';

export const COMPETITIONS: Competition[] = [
  { id: 'divisional-a', name: 'Divisional A', kind: 'Primera división', teams: 10, format: 'Apertura · Clausura', active: true, icon: 'A' },
  { id: 'divisional-b', name: 'Divisional B', kind: 'Segunda división', teams: 7, format: 'Liga', active: false, icon: 'B' },
  { id: 'femenina', name: 'Divisional Femenina', kind: 'Futsal femenino', teams: 7, format: 'Liga', active: false, icon: 'F' },
  { id: 'copa', name: 'Copa Canaria', kind: 'Copa', teams: 16, format: 'Eliminación directa', active: false, icon: '◆' }
];

export const STANDINGS: TeamStanding[] = [
  { id: 'milano', name: 'Milano FC', shortName: 'MIL', played: 9, won: 6, drawn: 3, lost: 0, goalsFor: 35, goalsAgainst: 12, points: 15 },
  { id: 'la-piecita', name: 'La Piecita', shortName: 'LPI', played: 9, won: 6, drawn: 2, lost: 1, goalsFor: 27, goalsAgainst: 15, points: 14 },
  { id: 'capincho', name: 'Capincho FC', shortName: 'CFC', played: 9, won: 5, drawn: 3, lost: 1, goalsFor: 33, goalsAgainst: 18, points: 13 },
  { id: 'valdearcos', name: 'Valdearcos', shortName: 'VAL', played: 9, won: 4, drawn: 3, lost: 2, goalsFor: 20, goalsAgainst: 15, points: 11 },
  { id: 'los-quitu', name: 'Los Quitu', shortName: 'LQU', played: 9, won: 4, drawn: 1, lost: 4, goalsFor: 29, goalsAgainst: 17, points: 9 },
  { id: 'pedrense', name: 'C.A. Pedrense', shortName: 'PED', played: 9, won: 3, drawn: 2, lost: 4, goalsFor: 22, goalsAgainst: 20, points: 8 },
  { id: 'tierra-de-campeones', name: 'Tierra de Campeones', shortName: 'TDC', played: 8, won: 3, drawn: 1, lost: 4, goalsFor: 19, goalsAgainst: 28, points: 7 },
  { id: 'negriazul', name: 'Negriazul', shortName: 'NEG', played: 9, won: 2, drawn: 2, lost: 5, goalsFor: 28, goalsAgainst: 39, points: 6 },
  { id: 'la-papa-madre', name: 'La Papa Madre', shortName: 'LPM', played: 9, won: 1, drawn: 1, lost: 7, goalsFor: 18, goalsAgainst: 52, points: 3 },
  { id: 'wac', name: 'W.A.C.', shortName: 'WAC', played: 8, won: 0, drawn: 2, lost: 6, goalsFor: 17, goalsAgainst: 32, points: 2 }
];

export const DIVISIONAL_A_TEAM_IDS = STANDINGS.map((team) => team.id);

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
