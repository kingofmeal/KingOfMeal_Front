import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contest } from '../contest-card/contest-card.component';

@Component({
  selector: 'app-contest-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contest-details.component.html',
  styleUrls: ['./contest-details.component.css']
})
export class ContestDetailsComponent {
  @Input({ required: true }) contest!: Contest;
}
