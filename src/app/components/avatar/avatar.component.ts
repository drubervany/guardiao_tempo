import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
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

  hasItem(itemId: string): boolean {
    return this.player.items.includes(itemId);
  }
}

