import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
  ],
  imports: [
    AdminComponent,
    ProductListComponent,
    CategoryListComponent,
    CommonModule,
    RouterOutlet,
    RouterModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
