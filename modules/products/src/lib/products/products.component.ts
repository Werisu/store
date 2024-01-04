import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiComponent } from '@store/shared-ui';

@Component({
  selector: 'store-products',
  standalone: true,
  imports: [CommonModule, SharedUiComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {}
