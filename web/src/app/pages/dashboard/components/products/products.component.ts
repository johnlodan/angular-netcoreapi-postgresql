import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Product {
  id: string;
  name: string;
  price: number;
  sold: number;
  image: string;
}

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  constructor(private router: Router) { }

  productsData: Product[] = [
    {
      id: 'e8c9b3d4-72ea-4a3f-bd7a-8648b7601d02',
      name: "BUY 1 TAKE 1 Bulb Dual Lens 8MP+8MP 5G NO WIFI Needed CCTV Camera V380 Auto Tracking Night Vision",
      price: 338,
      sold: 240,
      image: "https://down-ph.img.susercontent.com/file/ph-11134207-7r992-lu4pmmzn0ccpfd@resize_w450_nl.webp"
    },
    {
      id: 'a4d7be29-86bb-450e-942d-5cb558db5305',
      name: "The Darkest Minds Series (Book 1-5) [Paperback] By: Alexandra Bracken",
      price: 1100,
      sold: 540,
      image: "https://down-ph.img.susercontent.com/file/sg-11134201-23010-v1tyne4iysmv7b.webp"
    },
    {
      id: 'f395273d-d1d2-45fd-b823-39e33cbfd227',
      name: "Polarized UV400 Men Women 2025 Sport Running Glasses Fishing Eyeglasses Driving Riding Sunglasses Metal Frame Travel Eyewear",
      price: 847,
      sold: 150,
      image: "https://down-ph.img.susercontent.com/file/cn-11134207-7r98o-lzee3jxdawf641.webp"
    },
    {
      id: 'b51de023-44cc-4c6a-aefa-29c6054a78fc',
      name: "Bluetooth 5.4 Hifi Mp3 Player Mp4 Media Fm Radio Recorder Camera Portable Music Player",
      price: 980,
      sold: 56,
      image: "https://down-ph.img.susercontent.com/file/sg-11134201-7rcdh-lsgwd0pccx1tfe.webp"
    },
    {
      id: 'db234741-5c8c-4a98-880d-3a1b8bf35bb3',
      name: "Kingston HyperX FURY DDR4 RAM Desktop 4GB 8GB 16GB 2400Mhz 2666Mhz 3200Mhz DIMM Game Memory",
      price: 1249,
      sold: 200,
      image: "https://down-ph.img.susercontent.com/file/ph-11134207-7r991-lwbat9ocvald50.webp"
    },
    {
      id: '1b836ebc-dc91-47a6-988a-179e4f245524',
      name: "PVC Folding Door Fire O-Formaldehyde Accordion Sliding Door Home Kitchen Balcony Bathroom Shop Simpl",
      price: 1249,
      sold: 156,
      image: "https://down-ph.img.susercontent.com/file/ph-11134207-7rasb-m2taevpxm8jv75.webp"
    },
    {
      id: 'e5785c9f-9c76-42cc-9fbe-0e1566486a73',
      name: "[2024 New] EVERLAST Boxing Punching Bag for Adults PU Heavy Duty MMA Valentine Gift",
      price: 1299,
      sold: 132,
      image: "https://down-ph.img.susercontent.com/file/sg-11134201-22120-61y6xy50k0kv0f.webp"
    },
    {
      id: '9c924f66-5b34-4e3b-b4fb-7890e4cc5292',
      name: "Mini MP3 K6 Bluetooth Compatible 5.0 Transmitter Receiver Auxiliary 3.5mm Jack Wireless Adapter Fm Computer Mini Walkman",
      price: 386,
      sold: 210,
      image: "https://down-ph.img.susercontent.com/file/b34a8c3d6c5068343f5d17e39302abc6.webp"
    }
  ];

  redirectToProduct(productId: string) {
    const token = localStorage.getItem('authToken');

    if (!token) {
      this.router.navigate(['/login']); // Redirect to login if no token found
    } else {
      this.router.navigate([`/product/${productId}`]); // Proceed to product details
    }
  }


  truncate(text: string, maxLength: number): string {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  }
}
