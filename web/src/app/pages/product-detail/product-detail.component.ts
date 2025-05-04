import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {

  productId: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id'); // Get ID from URL
    console.log('Product ID:', this.productId);
  }

  goToDashboard() {
    this.router.navigate(['/admin']); // Navigate manually
  }


}
