import { Routes } from '@angular/router';
import {ProfilePageComponent} from "./profile-page/profile-page.component";
import {HomeComponent} from "./views/home/home.component";
import {CreateRecipeComponent} from "./views/create-recipe/create-recipe.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },  // Redirection
  { path: 'home', component: HomeComponent },
  { path: 'create-recipe', component: CreateRecipeComponent },// Page d'accueil
];
