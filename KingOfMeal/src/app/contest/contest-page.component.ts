import { Component } from '@angular/core';
import {LeftSidebarComponent} from "../shared/left-sidebar/left-sidebar.component";
import {RightSidebarComponent} from "../shared/right-sidebar/right-sidebar.component";
import {SearchBarComponent} from "../shared/search-bar/search-bar.component";
import {ConcoursHeaderComponent} from "../app/shared/concours-header/concours-header.component";

@Component({
  selector: 'app-contest-page',
  imports: [
    LeftSidebarComponent,
    RightSidebarComponent,
    ConcoursHeaderComponent
  ],
  templateUrl: './contest-page.component.html',
  standalone: true,
  styleUrl: './contest-page.component.css'
})
export class ContestPageComponent {
}
