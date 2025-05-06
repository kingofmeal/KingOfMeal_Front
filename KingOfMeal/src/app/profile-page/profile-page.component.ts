import { Component } from '@angular/core';
import {LeftSidebarComponent} from "../shared/left-sidebar/left-sidebar.component";
import {RightSidebarComponent} from "../shared/right-sidebar/right-sidebar.component";
import {SearchBarComponent} from "../shared/search-bar/search-bar.component";

@Component({
    selector: 'app-profile-page',
    imports: [
        SearchBarComponent,
        LeftSidebarComponent,
        RightSidebarComponent
    ],
    templateUrl: './profile-page.component.html',
    styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {
}
