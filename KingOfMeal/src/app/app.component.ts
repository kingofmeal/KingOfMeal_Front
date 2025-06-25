import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AuthModalComponent} from "./components/auth-modal/auth-modal.component";
import {NgIf} from "@angular/common";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AuthModalComponent, NgIf],
  standalone: true,
  styleUrl: './app.component.css',
  template: `
    <div class="app">
      <app-auth-modal *ngIf="!isLoggedIn"></app-auth-modal>
      <router-outlet *ngIf="isLoggedIn"></router-outlet>
    </div>
  `
})
export class AppComponent implements OnInit{
  title = 'KingOfMeal';
  isLoggedIn = false; // Add this property

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();

    // Listen for login state changes
    this.authService.loginStateChanged.subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
    });
  }
}
