import { Component } from '@angular/core';
import { CategoryComponent } from './components/category/category.component';
import { ProductsComponent } from './components/products/products.component';
@Component({
  selector: 'app-dashboard',
  imports: [CategoryComponent, ProductsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
