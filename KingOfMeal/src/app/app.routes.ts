// app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from "./views/home/home.component";
import { CreateRecipeComponent } from "./views/create-recipe/create-recipe.component";
import { PostsComponent } from "./components/posts/posts.component";
import { LoginComponent } from "./components/login/login.component";
import { authGuard } from "./guards/auth.guard";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Single default redirect
  { path: 'home', component: HomeComponent },
  { path: 'create-recipe', component: CreateRecipeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: PostsComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '/home' }  // Wildcard route for 404s (optional)
];
