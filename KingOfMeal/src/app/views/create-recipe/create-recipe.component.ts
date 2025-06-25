import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";  // inclut NgIf, NgForOf et les pipes comme DatePipe
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { SearchBarComponent } from "../../shared/search-bar/search-bar.component";
import { LeftSidebarComponent } from "../../shared/left-sidebar/left-sidebar.component";
import { Post, PostService } from "../../services/post.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-recipe',
  standalone: true,
  imports: [
    SearchBarComponent,
    LeftSidebarComponent,
    FormsModule,
    CommonModule
  ],
  templateUrl: './create-recipe.component.html'
})
export class CreateRecipeComponent {
  content = '';
  imageBase64: string | null = null;
  today = new Date();
  customerId = 101; // ou récupérer dynamiquement si tu as un auth service

  constructor(private postService: PostService, private router: Router) {}

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageBase64 = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  publishPost() {
    const post: Post = {
      id: Date.now(),
      content: this.content,
      customerId: this.customerId,
      imageContent: this.imageBase64 || '',
      creationDate: '',
      updatedDate: ''
    };

    this.postService.addPost(post);
    this.router.navigate(['/']); // retour à la page d’accueil
  }
}
