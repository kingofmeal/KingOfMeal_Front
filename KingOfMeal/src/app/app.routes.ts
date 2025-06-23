import { Routes } from '@angular/router';
import {ProfilePageComponent} from "./profile-page/profile-page.component";
import {CommunityPageComponent} from "./community-page/community-page.component";
export const routes: Routes = [

  { path : 'profile', component: ProfilePageComponent },
  { path : 'community', component: CommunityPageComponent },
  
];
