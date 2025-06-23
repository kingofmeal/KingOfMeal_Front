import { Component } from '@angular/core';
import {LeftSidebarComponent} from "../shared/left-sidebar/left-sidebar.component";
import {RightSidebarComponent} from "../shared/right-sidebar/right-sidebar.component";
import {SearchBarComponent} from "../shared/search-bar/search-bar.component";
import {ConcoursHeaderComponent} from "../app/shared/concours-header/concours-header.component";

@Component({
  selector: 'app-profile-page',
  imports: [
    LeftSidebarComponent,
    RightSidebarComponent,
    ConcoursHeaderComponent
  ],
  templateUrl: './profile-page.component.html',
  standalone: true,
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {
}
