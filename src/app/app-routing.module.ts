import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MusicComponent } from './music/music.component';
import { ShowsComponent } from './shows/shows.component';
import { MerchComponent } from './merch/merch.component';

const routes: Routes = [
  { path: 'main', component: MainPageComponent},
  { path: 'music', component: MusicComponent},
  { path: 'shows', component: ShowsComponent},
  { path: 'merch', component: MerchComponent},
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
