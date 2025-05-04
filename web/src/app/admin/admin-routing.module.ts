import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthGuard } from '../auth.guard';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'products',
        loadComponent: () => import('./pages/product-list/product-list.component').then(m => m.ProductListComponent),
        canActivate: [AuthGuard]
      },
      {
        path: 'categories',
        loadComponent: () => import('./pages/category-list/category-list.component').then(m => m.CategoryListComponent),
        canActivate: [AuthGuard]
      },
      { path: '', redirectTo: '/admin/categories', pathMatch: 'full' }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
