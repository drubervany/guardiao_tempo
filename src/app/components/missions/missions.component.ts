import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MissionsService } from '../../services/missions.service';
import { Mission } from '../../models/mission.model';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {
  missions: Mission[] = [];

  constructor(
    private missionsService: MissionsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.missions = this.missionsService.getMissions();
  }

  goHome(): void {
    this.router.navigate(['/']);
  }

  startMission(mission: Mission): void {
    if (this.missionsService.isMissionUnlocked(mission.id)) {
      this.router.navigate(['/mission', mission.id]);
    }
  }

  isUnlocked(missionId: number): boolean {
    return this.missionsService.isMissionUnlocked(missionId);
  }
}

