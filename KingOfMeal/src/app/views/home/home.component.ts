import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';  // remplace NgForOf par CommonModule pour plus complet
import { RouterLink } from '@angular/router';


import { SearchBarComponent } from '../../shared/search-bar/search-bar.component';
import { LeftSidebarComponent } from '../../shared/left-sidebar/left-sidebar.component';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SearchBarComponent,
    LeftSidebarComponent,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  posts: any[] = [];
  trendingTags = ['Angular', 'TypeScript', 'RxJS'];
  upcomingContests = [
    { id: 1, title: 'Concours Angular', startsInDays: 3 },
    { id: 2, title: 'Concours TypeScript', startsInDays: 7 }
  ];
  currentContest = {
    title: 'Grand Concours Angular',
    daysLeft: 5,
    participants: 120
  };

  // Exemple de mapping des IDs utilisateur aux noms
  userIdToName: { [key: number]: string } = {
    101: 'Alice',
    102: 'Bob',
    103: 'Charlie',
    // Ajoutez d'autres utilisateurs ici
  };

  // ID de l'utilisateur actuel
  currentUserId = 101; // Remplacez par l'ID de l'utilisateur actuel

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts = this.postService.getPosts();

    // Ajouter des publications fictives
    const fictivePosts = [
      {
        id: 999,
        content: 'Ceci est une publication fictive sur Angular.',
        customerId: 101,
        imageContent: 'image1.jpg',
        creationDate: new Date('2023-10-05')
      },
      {
        id: 998,
        content: 'Une autre publication fictive sur TypeScript.',
        customerId: 102,
        imageContent: 'image2.jpg',
        creationDate: new Date('2023-10-06')
      },
      {
        id: 997,
        content: 'Encore une publication fictive sur RxJS.',
        customerId: 103,
        imageContent: 'image3.jpg',
        creationDate: new Date('2023-10-07')
      }
    ];

    this.posts = [...this.posts, ...fictivePosts];
  }

  // Fonction pour obtenir le nom de l'utilisateur
  getUserName(userId: number): string {
    return this.userIdToName[userId] || 'Unknown';
  }

  // Fonction pour vérifier si le post appartient à l'utilisateur actuel
  isCurrentUserPost(userId: number): boolean {
    return userId === this.currentUserId;
  }
}
