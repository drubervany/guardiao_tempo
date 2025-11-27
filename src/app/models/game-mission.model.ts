export interface GameMissionReward {
  xp: number;
  coins?: number;
  item?: string; // ID do item que será desbloqueado
  theme: 'comunidade' | 'trabalho' | 'jornal' | 'profissoes' | 'meio_ambiente' | 'reciclagem' | 'limpeza' | 'ambientalista' | 'comercio';
  minCorrectAnswers?: number; // Mínimo de acertos para ganhar recompensa
}

export interface GameMission {
  missionId: number;
  reward: GameMissionReward;
  minCorrectAnswers?: number; // Mínimo de acertos para ganhar recompensa
}

