import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import {DialogModule} from "primeng/dialog";
import {AddContestComponent} from "../add-contest/add-contest.component";
import {SelectButtonModule} from "primeng/selectbutton";
import {Contest, ContestCardComponent} from "../contest-card/contest-card.component";

@Component({
  selector: 'app-concours-header',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, DialogModule, AddContestComponent, SelectButtonModule,
    ContestCardComponent],
  templateUrl: './concours-header.component.html',
  styleUrls: ['./concours-header.component.css']
})
export class ConcoursHeaderComponent {
  displayDialog = false;
  displayDetailsDialog = false;
  selectedContest: Contest | null = null;

  categoryOptions = ['En cours', 'À venir', 'Terminés'];
  selectedCategory = 'En cours';

  contestsInProgress: Contest[] = [];
  contestsUpcoming:   Contest[] = [];
  contestsFinished:   Contest[] = [];

  openDialog() {
    this.displayDialog = true;
  }

  /** Ouvre la modale détail */
  openDetailsDialog(c: Contest) {
    this.selectedContest = c;
    this.displayDetailsDialog = true;
  }

  /** Réception du concours créé depuis <app-add-contest> */
  onContestCreated(c: Contest) {
    const today  = new Date();
    const start  = new Date(c.startDate);
    const end    = new Date(c.endDate);

    if (end < today) {
      this.contestsFinished.unshift(c);
      this.selectedCategory = 'Terminés';
    } else if (start > today) {
      this.contestsUpcoming.unshift(c);
      this.selectedCategory = 'À venir';
    } else {
      this.contestsInProgress.unshift(c);
      this.selectedCategory = 'En cours';
    }
    this.displayDialog = false;
  }
}
