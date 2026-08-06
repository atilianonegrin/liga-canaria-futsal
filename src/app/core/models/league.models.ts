export interface Competition {
  id: string;
  name: string;
  kind: string;
  teams: number;
  format: string;
  active: boolean;
  icon: string;
}

export interface TeamStanding {
  id: string;
  name: string;
  shortName: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}

export interface Match {
  id: string;
  day: string;
  date: string;
  home: Pick<TeamStanding, 'name' | 'shortName'>;
  away: Pick<TeamStanding, 'name' | 'shortName'>;
  time?: string;
  score?: string;
  status: string;
}

export interface Scorer {
  name: string;
  initials: string;
  team: string;
  goals: number;
}

export type SquadBranch = 'masculino' | 'femenino';

export interface Player {
  id: string;
  name: string;
  branch: SquadBranch;
}

export interface Team {
  id: string;
  name: string;
  shortName: string;
  players: Player[];
}

export interface CompetitionTeam extends Team {
  position?: number;
}
