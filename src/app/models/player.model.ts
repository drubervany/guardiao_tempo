export interface Player {
  name: string;
  level: number;
  xp: number;
  hearts: number;
  maxHearts: number;
  coins: number;
  items: string[]; // ['cape_green', 'hat_reporter', 'bag_helper', 'shirt_community', 'glasses_future', 'gloves_clean', 'badge_inspector']
}

export const INITIAL_PLAYER: Player = {
  name: 'Anthony',
  level: 1,
  xp: 0,
  hearts: 3,
  maxHearts: 3,
  coins: 0,
  items: []
};

