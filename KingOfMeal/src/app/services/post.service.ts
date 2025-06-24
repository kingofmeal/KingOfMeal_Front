import { Injectable } from '@angular/core';


export interface Post {
  id: number;
  content: string;
  customerId: number;
  imageContent?: string;
  creationDate: Date;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];

  constructor() {}

  getPosts(): Post[] {
    return this.posts;
  }

  addPost(post: Post) {
    this.posts.unshift(post); // ajoute en haut
  }
}
