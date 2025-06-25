import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { Component, EventEmitter, Output } from '@angular/core';
import { Contest } from '../contest-card/contest-card.component';

@Component({
  selector: 'app-add-contest',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    CalendarModule,
    RadioButtonModule
  ],
  templateUrl: './add-contest.component.html',
  styleUrls: ['./add-contest.component.css']
})
export class AddContestComponent {
  // Champs principaux
  name = '';
  description = '';
  startDate: Date | null = null;
  endDate: Date | null = null;
  visibility: 'public' | 'private' = 'public';

  // Invitations dynamiques
  newInvite = '';
  invitedUsers: string[] = [];

  @Output() contestCreated = new EventEmitter<Contest>();


  addInvite() {
    if (this.newInvite.trim()) {
      this.invitedUsers.push(this.newInvite.trim());
      this.newInvite = '';
    }
  }
  removeInvite(index: number) {
    this.invitedUsers.splice(index, 1);
  }

  // Tags dynamiques
  newTag = '';
  tags: string[] = [];

  addTag() {
    if (this.newTag.trim()) {
      this.tags.push(this.newTag.trim());
      this.newTag = '';
    }
  }
  removeTag(index: number) {
    this.tags.splice(index, 1);
  }

  submit() {
    if (!this.name.trim()) return;

    const newContest: Contest = {
      name: this.name.trim(),
      description: this.description.trim(),
      startDate: this.startDate!,
      endDate: this.endDate!,
      visibility: this.visibility,
      tag: this.tags[0] || undefined,
      participants: 0
    };

    this.contestCreated.emit(newContest);

    // facultatif : réinitialise le formulaire
    this.name = '';
    this.description = '';
    this.startDate = this.endDate = null;
    this.visibility = 'public';
    this.invitedUsers = [];
    this.tags = [];
  }
}
