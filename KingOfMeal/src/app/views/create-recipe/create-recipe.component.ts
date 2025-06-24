import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {SidebarComponent} from "../../shared/sidebar/sidebar.component";
import {SearchBarComponent} from "../../shared/search-bar/search-bar.component";

@Component({
  selector: 'app-create-recipe',
  imports: [
    FormsModule,
    NgIf,
    NgForOf,
    SidebarComponent,
    SearchBarComponent
  ],
  templateUrl: './create-recipe.component.html',
  styleUrl: './create-recipe.component.css'
})
export class CreateRecipeComponent {
  title: string = '';
  description: string = '';
  prepTime: string = '';
  cookTime: string = '';
  portions: string = '';
  tags: string[] = ['dessert', 'fraises', 'tarte'];

  imagePreview: string | ArrayBuffer | null = null;

  onImageSelected(event: Event): void {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  saveDraft(): void {
    console.log('Recette enregistrée comme brouillon');
  }

  publishRecipe(): void {
    console.log('Recette publiée :', {
      title: this.title,
      description: this.description,
      prepTime: this.prepTime,
      cookTime: this.cookTime,
      portions: this.portions,
      tags: this.tags
    });
  }

}
