import { Component } from '@angular/core';
import { CommunityHeaderComponent } from "../app/shared/community-header/community-header.component";

@Component({
  selector: 'app-community-page',
  imports: [
  
    CommunityHeaderComponent
  ],
  templateUrl: './community-page.component.html',
  standalone: true,
  styleUrls: ['./community-page.component.css']
})
export class CommunityPageComponent {}