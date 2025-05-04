import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from './category.service';
import { ToastrService } from 'ngx-toastr';
interface Category {
  name: string;
  image: string;
}

@Component({
  selector: 'app-category',
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {

  constructor(private categoryService: CategoryService, private toastr: ToastrService) {

  }
  categoryData: Category[] = [];

  ngOnInit() {
    this.fetchAll()
  }
  fetchAll() {
    this.categoryService.getAllPublic(1, 20).subscribe({
      next: (response: any) => {
        this.categoryData = response.data || [];
      },
      error: (err: any) => {
        this.toastr.error('Error fetching categories', 'Error');
      },
    });
  }
}
