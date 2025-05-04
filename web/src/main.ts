import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { DashboardComponent } from './app/pages/dashboard/dashboard.component';
import { ProductsComponent } from './app/pages/products/products.component';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { RegisterComponent } from './app/pages/register/register.component';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { LoginComponent } from './app/pages/login/login.component';
import { ProductDetailComponent } from './app/pages/product-detail/product-detail.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', loadChildren: () => import('./app/admin/admin.module').then(m => m.AdminModule) },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    importProvidersFrom(FormsModule),
    provideHttpClient(),
    provideAnimations(),
    provideToastr(),
  ]
});