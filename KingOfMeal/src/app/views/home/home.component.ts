import {Component, ViewEncapsulation} from '@angular/core';
import {NgForOf} from "@angular/common";

import {SidebarComponent} from "../../shared/sidebar/sidebar.component";
import {SearchBarComponent} from "../../shared/search-bar/search-bar.component";

@Component({
  selector: 'app-home',
  imports: [
    SidebarComponent,
    SearchBarComponent,
    NgForOf,

  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  posts = [
    {
      author: 'Marie Dupont',
      title: 'Tarte aux fraises et crème pâtissière',
      description: 'Une délicieuse tarte aux fraises de saison avec une crème pâtissière légère à la vanille.',
      tags: ['dessert', 'fraises', 'tarte'],
      likes: 124,
      comments: 18
    },
    {
      author: 'Léo Martin',
      title: 'Spaghetti Carbonara',
      description: 'Une recette italienne authentique, sans crème, juste des œufs, du parmesan et du guanciale.',
      tags: ['italien', 'pâtes', 'tradition'],
      likes: 89,
      comments: 12
    },
    {
      author: 'Nina Leroy',
      title: 'Burger vegan maison',
      description: 'Un burger savoureux à base de haricots noirs, sans viande mais plein de goût.',
      tags: ['vegan', 'rapide', 'burger'],
      likes: 150,
      comments: 30
    },
    {
      author: 'Julien Moreau',
      title: 'Soupe thaï coco et crevettes',
      description: 'Une soupe onctueuse au lait de coco avec des saveurs exotiques et épicées.',
      tags: ['soupe', 'asiatique', 'crevettes'],
      likes: 72,
      comments: 8
    }
  ];

  trendingTags = ['dessert', 'vegan', 'rapide', 'italien', 'sansgluten', 'pâtes', 'exotique'];

  // Concours en cours
  currentContest = {
    title: 'Cuisine Vegan',
    daysLeft: 3,
    participants: 42
  };

  // Concours à venir (peut être affiché plus tard dans l’interface si besoin)
  upcomingContests = [
    {
      title: 'Délices d’Été',
      startsInDays: 5
    },
    {
      title: 'Plats traditionnels d’Afrique',
      startsInDays: 10
    },
    {
      title: 'Cuisine de Noël',
      startsInDays: 20
    }
  ];
}

