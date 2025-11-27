import { Injectable } from '@angular/core';
import { GameMissionReward } from '../models/game-mission.model';

@Injectable({
  providedIn: 'root'
})
export class MissionRewardsService {
  private rewards: { [missionId: number]: GameMissionReward } = {
    1: {
      xp: 10,
      coins: 5,
      item: 'shirt_community',
      theme: 'comunidade',
      minCorrectAnswers: 3
    },
    2: {
      xp: 10,
      coins: 5,
      item: 'bag_helper',
      theme: 'trabalho',
      minCorrectAnswers: 3
    },
    3: {
      xp: 10,
      coins: 5,
      item: 'hat_reporter',
      theme: 'jornal',
      minCorrectAnswers: 1
    },
    4: {
      xp: 10,
      coins: 5,
      item: 'glasses_future',
      theme: 'profissoes',
      minCorrectAnswers: 3
    },
    5: {
      xp: 10,
      coins: 5,
      item: 'cape_green',
      theme: 'meio_ambiente',
      minCorrectAnswers: 1
    },
    6: {
      xp: 10,
      coins: 5,
      item: 'gloves_clean',
      theme: 'reciclagem',
      minCorrectAnswers: 2
    },
    7: {
      xp: 10,
      coins: 5,
      item: 'leaf_eco',
      theme: 'ambientalista',
      minCorrectAnswers: 3
    },
    8: {
      xp: 10,
      coins: 5,
      item: 'recycle_badge',
      theme: 'reciclagem',
      minCorrectAnswers: 3
    },
    9: {
      xp: 10,
      coins: 5,
      item: 'shopping_bag',
      theme: 'comercio',
      minCorrectAnswers: 3
    },
    10: {
      xp: 10,
      coins: 5,
      item: 'briefcase_seller',
      theme: 'comercio',
      minCorrectAnswers: 3
    },
    11: {
      xp: 10,
      coins: 5,
      item: 'helmet_cleaner',
      theme: 'limpeza',
      minCorrectAnswers: 1
    },
    12: {
      xp: 15,
      coins: 10,
      item: 'badge_inspector',
      theme: 'meio_ambiente',
      minCorrectAnswers: 4
    }
  };

  getReward(missionId: number): GameMissionReward | undefined {
    return this.rewards[missionId];
  }
}

