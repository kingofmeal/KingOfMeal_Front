import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import {DialogModule} from "primeng/dialog";

@Component({
  selector: 'app-concours-header',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, DialogModule],
  templateUrl: './concours-header.component.html',
  styleUrls: ['./concours-header.component.css']
})
export class ConcoursHeaderComponent {
  displayDialog = false;

  openDialog() {
    this.displayDialog = true;
  }

}
