import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    private router: Router,
    private gameService: GameService
  ) {}

  startMission(): void {
    // Resetar o jogo ao começar
    this.gameService.resetGame();
    this.router.navigate(['/missions']);
  }
}

