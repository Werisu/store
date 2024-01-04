import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'store-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {}
