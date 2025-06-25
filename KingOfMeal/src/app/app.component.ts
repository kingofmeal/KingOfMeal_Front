import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBarComponent } from "./shared/search-bar/search-bar.component";
import { ProfilePageComponent } from "./profile-page/profile-page.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchBarComponent, ProfilePageComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {

}
