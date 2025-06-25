import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


export interface Post {
  id: number;
  content: string;
  customerId: number;
  imageContent?: string;
  creationDate: string;
  updatedDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];
  private apiUrl = 'http://localhost:8080/api/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Post[] {
    return this.posts;
  }

  addPost(post: Post) {
    this.posts.unshift(post); // ajoute en haut
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  getMyPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/my`);
  }

  createPost(content: string, imageContent?: string): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, { content, imageContent });
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
