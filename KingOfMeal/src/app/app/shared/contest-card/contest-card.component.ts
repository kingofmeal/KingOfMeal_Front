// contest-card.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

export interface Contest {
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  visibility: 'public' | 'private';
  participants?: number;
  tag?: string;
}

@Component({
  selector: 'app-contest-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contest-card.component.html',
  styleUrls: ['./contest-card.component.css']
})
export class ContestCardComponent {
  @Input() contest!: Contest;

  @Output() voirDetailsClicked = new EventEmitter<Contest>();

  /** Renvoie 'inProgress' | 'upcoming' | 'finished' */
  get status(): 'inProgress' | 'upcoming' | 'finished' {
    const today = new Date();
    const start = new Date(this.contest.startDate);
    const end = new Date(this.contest.endDate);

    if (end < today) return 'finished';
    if (start > today) return 'upcoming';
    return 'inProgress';
  }

  voirDetails() {
    this.voirDetailsClicked.emit(this.contest);
  }
}
