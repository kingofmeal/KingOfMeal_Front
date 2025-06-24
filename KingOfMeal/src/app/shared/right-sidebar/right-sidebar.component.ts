import { Component } from '@angular/core';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css'],
  standalone: true 
})
export class RightSidebarComponent {
  trendingHashtags = [
    { name: 'dessert', posts: 1243, change: 12 },
    { name: 'vegan', posts: 982, change: 8 },
    { name: 'rapide', posts: 756, change: 15 },
    { name: 'italien', posts: 621, change: 5 },
    { name: 'sansgluten', posts: 543, change: 20 },
    { name: 'patisserie', posts: 432, change: 7 }
  ];

  activeMembers = [
    { name: 'Chef Antoine', contributions: 45 },
    { name: 'Marie Dupont', contributions: 38 },
    { name: 'Sophie Legrand', contributions: 32 },
    { name: 'Thomas Bernard', contributions: 28 }
  ];
}