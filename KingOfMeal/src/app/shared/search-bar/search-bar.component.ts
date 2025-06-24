import { Component } from '@angular/core';
import { AvatarModule } from "primeng/avatar";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-search-bar',
  imports: [AvatarModule, InputTextModule, ButtonModule],
  templateUrl: './search-bar.component.html',
  standalone: true,
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

}
