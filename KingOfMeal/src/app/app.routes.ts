import { Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {CreateRecipeComponent} from "./views/create-recipe/create-recipe.component";
import {ContestPageComponent} from "./contest/contest-page.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },  // Redirection
  { path: 'home', component: HomeComponent },
  { path: 'create-recipe', component: CreateRecipeComponent },// Page d'accueil
  { path: 'concours', component: ContestPageComponent }, // Page de Concours 
];
