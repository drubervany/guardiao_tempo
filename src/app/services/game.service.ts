import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Player, INITIAL_PLAYER } from '../models/player.model';
import { GameMissionReward } from '../models/game-mission.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private playerSubject = new BehaviorSubject<Player>(INITIAL_PLAYER);
  public player$: Observable<Player> = this.playerSubject.asObservable();

  private player: Player = { ...INITIAL_PLAYER };

  constructor() {
    this.load();
  }

  getPlayer(): Player {
    return { ...this.player };
  }

  // Completar missão com sucesso
  completeMission(reward: GameMissionReward, correctAnswers: number, totalQuestions: number): boolean {
    const minCorrect = reward.minCorrectAnswers || Math.ceil(totalQuestions * 0.7); // 70% por padrão
    
    if (correctAnswers >= minCorrect) {
      // Missão completada com sucesso
      this.player.xp += reward.xp;
      this.player.coins += (reward.coins || 0);
      
      // Adicionar item se não tiver ainda
      if (reward.item && !this.player.items.includes(reward.item)) {
        this.player.items.push(reward.item);
      }
      
      this.checkLevelUp();
      this.save();
      this.playerSubject.next({ ...this.player });
      return true;
    }
    
    return false;
  }

  // Errar resposta - perde coração
  loseHeart(): void {
    if (this.player.hearts > 0) {
      this.player.hearts--;
      this.save();
      this.playerSubject.next({ ...this.player });
    }
  }

  // Recuperar coração (desafio bônus)
  recoverHeart(): void {
    // Sempre recuperar uma vida quando acerta o bônus (até o máximo)
    if (this.player.hearts < this.player.maxHearts) {
      this.player.hearts++;
      this.save();
      this.playerSubject.next({ ...this.player });
    } else {
      // Se já está no máximo, garantir que está salvo e atualizado
      this.save();
      this.playerSubject.next({ ...this.player });
    }
  }

  // Comprar vida com moedas
  buyHeart(): boolean {
    const heartCost = 10; // Custo de 10 moedas por vida
    if (this.player.coins >= heartCost && this.player.hearts < this.player.maxHearts) {
      this.player.coins -= heartCost;
      this.player.hearts++;
      this.save();
      this.playerSubject.next({ ...this.player });
      return true;
    }
    return false;
  }

  // Verificar se pode fazer desafio bônus (sem corações)
  canDoBonusChallenge(): boolean {
    return this.player.hearts === 0;
  }

  // Ganhar moedas
  addCoins(amount: number): void {
    this.player.coins += amount;
    this.save();
    this.playerSubject.next({ ...this.player });
  }

  // Perder moedas
  removeCoins(amount: number): void {
    this.player.coins = Math.max(0, this.player.coins - amount); // Não pode ficar negativo
    this.save();
    this.playerSubject.next({ ...this.player });
  }

  // Verificar level up (até nível 12, 10 XP por nível)
  private checkLevelUp(): void {
    const maxLevel = 12;
    
    // Cada nível precisa de 10 XP (nível 1 = 0-9 XP, nível 2 = 10-19 XP, etc.)
    while (this.player.level < maxLevel && this.player.xp >= this.player.level * 10) {
      this.player.level++;
      // Ganha moedas ao subir de nível
      this.player.coins += 10;
    }
    
    if (this.player.level > 1) {
      this.save();
      this.playerSubject.next({ ...this.player });
    }
  }

  // Salvar no localStorage
  private save(): void {
    localStorage.setItem('anthony-player', JSON.stringify(this.player));
  }

  // Carregar do localStorage
  load(): void {
    const data = localStorage.getItem('anthony-player');
    if (data) {
      try {
        this.player = JSON.parse(data);
        // Garantir que tem todos os campos
        this.player = { ...INITIAL_PLAYER, ...this.player };
        this.playerSubject.next({ ...this.player });
      } catch (e) {
        console.error('Erro ao carregar dados do jogador:', e);
      }
    }
  }

  // Resetar jogo (opcional)
  resetGame(): void {
    this.player = { ...INITIAL_PLAYER };
    this.save();
    this.playerSubject.next({ ...this.player });
  }
}

