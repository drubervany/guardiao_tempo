import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MissionsComponent } from './components/missions/missions.component';
import { MissionDetailComponent } from './components/mission-detail/mission-detail.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { HudComponent } from './components/hud/hud.component';
import { MissionsService } from './services/missions.service';
import { GameService } from './services/game.service';
import { MissionRewardsService } from './services/mission-rewards.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MissionsComponent,
    MissionDetailComponent,
    AvatarComponent,
    HudComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'missions', component: MissionsComponent },
      { path: 'mission/:id', component: MissionDetailComponent }
    ])
  ],
  providers: [MissionsService, GameService, MissionRewardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

