import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-community-header', 
  standalone: true,
  imports: [CommonModule],
  templateUrl: './community-header.component.html',
})
export class CommunityHeaderComponent { 
  activeTab: string = 'discussions';

  posts = [
    {
      id: 1,
      tag: 'dessert',
      time: 'Il y a 2 heures',
      title: 'Quelle est votre technique secrète pour une pâte brisée parfaite ?',
      author: 'Marie Dupont',
      content: 'Salut tout le monde ! Je galère toujours avec ma pâte brisée...',
      likes: 23,
      comments: 15,
      lastReply: 'Il y a 30 min'
    },
    {
      id: 2,
      tag: 'vegan',
      time: 'Il y a 4 heures',
      title: "Substituts d'œufs en pâtisserie : vos retours d'expérience",
      author: 'Sophie Legrand',
      content: "J'ai testé plusieurs alternatives aux œufs (aquafaba, graines de lin...)",
      likes: 18,
      comments: 22,
      lastReply: 'Il y a 1 heure'
    },
    {
      id: 3,
      tag: 'rapide',
      time: 'Il y a 6 heures',
      title: 'Repas équilibrés en moins de 20 minutes : mission impossible ?',
      author: 'Thomas Bernard',
      content: "Entre le boulot et les enfants, j'ai besoin d'idées de repas sains...",
      likes: 31,
      comments: 28,
      lastReply: 'Il y a 15 min'
    }
  ];
}