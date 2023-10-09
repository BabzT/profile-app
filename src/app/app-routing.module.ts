import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfilesComponent } from './pages/profiles/profiles.component';
import { ProfileDetailsComponent } from './pages/profile-details/profile-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/profiles', pathMatch: 'full' },
  { path: 'profiles', component: ProfilesComponent },
  { path: 'profiles/:id', component: ProfileDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routeComponents = [ProfilesComponent, ProfileDetailsComponent];
