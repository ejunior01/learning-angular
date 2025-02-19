import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { LucideAngularModule,ShoppingBag } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage, SearchBarComponent,LucideAngularModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
readonly ShoppingBag = ShoppingBag
}
