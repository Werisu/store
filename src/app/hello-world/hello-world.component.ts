import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'store-hello-world',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.scss',
})
export class HelloWorldComponent {}
