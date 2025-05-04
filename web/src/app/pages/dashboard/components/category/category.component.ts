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
  categoryData: Category[] = [
    { name: "Men's Apparel", image: "https://down-ph.img.susercontent.com/file/2e9bfe13ce9cecfbfad8010b843651f6@resize_w320_nl.webp" },
    { name: "Mobile Gadgets", image: "https://down-ph.img.susercontent.com/file/b3ae45e4ea16d61f0f6cf98ed623bb67@resize_w320_nl.webp" },
    { name: "Accessories", image: "https://down-ph.img.susercontent.com/file/9f2080fe651867bceb3a4d0f474247b3@resize_w320_nl.webp" },
    { name: "Entertainment", image: "https://down-ph.img.susercontent.com/file/f88a53eadc71460a50ba49316235a5a5@resize_w320_nl.webp" },
    { name: "Babies & Kids", image: "https://down-ph.img.susercontent.com/file/fbf1d6707dac5f09db46e60b87aae351@resize_w320_nl.webp" },
    { name: "Home & Living", image: "https://down-ph.img.susercontent.com/file/e96e55c299602c20d369183378887a86@resize_w320_nl.webp" },
    { name: "Groceries", image: "https://down-ph.img.susercontent.com/file/f2423bdc8e19310ece9cf70c81e58897@resize_w320_nl.webp" },
    { name: "Toys & Games", image: "https://down-ph.img.susercontent.com/file/aff648bd1cc6d00de3d908457de3e128@resize_w320_nl.webp" },
    { name: "Women's Bags", image: "https://down-ph.img.susercontent.com/file/55267466ff3f0445bf28c21ddafd409c@resize_w320_nl.webp" },
    { name: "Women Accessories", image: "https://down-ph.img.susercontent.com/file/9ab43516f83df1b1bc400edf56bccac7@resize_w320_nl.webp" },
    { name: "Women`s Apparel", image: "https://down-ph.img.susercontent.com/file/372cf1ccdb799772760d819408df35ba@resize_w320_nl.webp" },
    { name: "Health & Personal Care", image: "https://down-ph.img.susercontent.com/file/5906153a145fc19c2d808012f682f2fd@resize_w320_nl.webp" },
    { name: "Makeups & Fragrances", image: "https://down-ph.img.susercontent.com/file/15bcf95dddc19a5fb0fb0f9e777761a2@resize_w320_nl.webp" },
    { name: "Home Appliances", image: "https://down-ph.img.susercontent.com/file/d31d29d2f160baeb7592964cd9090a52@resize_w320_nl.webp" },
    { name: "Laptops & Computers", image: "https://down-ph.img.susercontent.com/file/25936be031f917470cb8c8ad9f311413@resize_w320_nl.webp" },
    { name: "Cameras", image: "https://down-ph.img.susercontent.com/file/5a9d9bb1c39229501a6acec4f89fdc5c@resize_w320_nl.webp" },
    { name: "Sports & Travel", image: "https://down-ph.img.susercontent.com/file/f12cfed5944ad868e181c6583a5a4426@resize_w320_nl.webp" },
    { name: "Men's Bags & Accessories", image: "https://down-ph.img.susercontent.com/file/a3db43790bd5a473e606076fa4bc6717@resize_w320_nl.webp" },
    { name: "Men's Shoes", image: "https://down-ph.img.susercontent.com/file/4485e4fb0ed0372934c6e11ec3601d7c@resize_w320_nl.webp" },
    { name: "Motors", image: "https://down-ph.img.susercontent.com/file/34e01853a846ee2280853aa6792effca@resize_w320_nl.webp" },
  ];

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
