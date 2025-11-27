import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-hud',
  templateUrl: './hud.component.html',
  styleUrls: ['./hud.component.css']
})
export class HudComponent implements OnInit {
  player: Player = {
    name: 'Anthony',
    level: 1,
    xp: 0,
    hearts: 3,
    maxHearts: 3,
    coins: 0,
    items: []
  };

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.player$.subscribe(player => {
      this.player = player;
    });
  }

  getXpProgress(): number {
    const maxLevel = 12;
    const xpPerLevel = 10;
    
    // Se já está no nível máximo, mostrar 100%
    if (this.player.level >= maxLevel) {
      return 100;
    }
    
    // XP necessário para o nível atual (nível 1 = 0, nível 2 = 10, nível 3 = 20, etc.)
    const currentLevelXp = (this.player.level - 1) * xpPerLevel;
    // XP necessário para o próximo nível
    const nextLevelXp = this.player.level * xpPerLevel;
    
    // XP ganho no nível atual
    const xpInLevel = this.player.xp - currentLevelXp;
    // XP necessário para subir de nível
    const xpNeeded = nextLevelXp - currentLevelXp;
    
    // Calcular porcentagem (limitar entre 0 e 100)
    const progress = Math.min(100, Math.max(0, (xpInLevel / xpNeeded) * 100));
    return progress;
  }

  getHeartsArray(): boolean[] {
    return Array(this.player.maxHearts).fill(false).map((_, i) => i < this.player.hearts);
  }

  buyHeart(): void {
    const success = this.gameService.buyHeart();
    if (success) {
      // Vida comprada com sucesso
    } else {
      // Não tem moedas suficientes ou já está no máximo
      if (this.player.coins < 10) {
        alert('Você não tem moedas suficientes! Precisa de 10 moedas para comprar uma vida.');
      } else if (this.player.hearts >= this.player.maxHearts) {
        alert('Você já está com todas as vidas!');
      }
    }
  }
}

