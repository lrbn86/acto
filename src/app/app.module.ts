import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionbarComponent } from './components/actionbar/actionbar.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { GameComponent } from './components/game/game.component';
import { PlayerComponent } from './components/player/player.component';
import { EnemyComponent } from './components/enemy/enemy.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionbarComponent,
    MainMenuComponent,
    GameComponent,
    PlayerComponent,
    EnemyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
