import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryListService } from './category-list.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

interface Category {
  id?: string;
  name: string;
  description: string;
  image: string;
  data?: any;
}

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ToastrModule, NgxDatatableModule],
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent {

  constructor(private categoryService: CategoryListService, private toastr: ToastrService) { }

  showModal = false;
  isEditing = false;
  category: Category = { name: '', image: '', description: '' };
  categories: Category[] = [];
  currentPage = 1;
  pageSize = 5;
  totalCount = 0;

  ngOnInit() {
    this.fetchAll();
  }

  pageChanged(event: { offset: number }): void {
    this.currentPage = event.offset + 1;
    this.fetchAll();
  }

  fetchAll() {
    this.categoryService.getAll(this.currentPage, this.pageSize).subscribe({
      next: (response: any) => {
        this.categories = response.data || [];
        this.totalCount = response.totalCount || 0;
      },
      error: (err: any) => {
        this.toastr.error('Error fetching categories', 'Error');
      },
    });
  }

  openModal(category?: Category) {
    if (category) {
      this.category = { ...category };
      this.isEditing = true;
    } else {
      this.category = { name: '', image: '', description: '' };
      this.isEditing = false;
    }
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  editCategory(id: string) {
    const categoryToEdit = this.categories.find(cat => cat.id === id);
    if (categoryToEdit) {
      this.openModal(categoryToEdit);
    }
  }

  deleteCategory(id: string) {
    this.categoryService.delete(id).subscribe({
      next: () => {
        this.fetchAll();
        this.toastr.success('Category deleted successfully!', 'Success');
      },
      error: () => {
        this.toastr.error('Failed to delete category!', 'Error');
      }
    });
  }

  submitCategory() {
    if (this.isEditing && this.category.id) {
      this.categoryService.update(this.category.id, this.category).subscribe({
        next: () => {
          this.fetchAll();
          this.toastr.success('Category updated successfully!', 'Success');
          this.closeModal();
        },
        error: () => {
          this.toastr.error('Failed to update category!', 'Error');
        },
      });
    } else {
      this.categoryService.create(this.category).subscribe({
        next: () => {
          this.fetchAll();
          this.toastr.success('Category successfully created!', 'Success');
          this.closeModal();
        },
        error: () => {
          this.toastr.error('Failed to create category!', 'Error');
        },
      });
    }
  }
}