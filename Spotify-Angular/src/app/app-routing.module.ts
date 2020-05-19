import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './components/audio/player/player.component';
import { HomeComponent } from './Components/HomePage/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'player', component: PlayerComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [HomeComponent, PlayerComponent]
