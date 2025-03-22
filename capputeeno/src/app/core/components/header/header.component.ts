import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ShoppingCartBagComponent } from '../shopping-cart-bag/shopping-cart-bag.component';

@Component({
  selector: 'app-header',
  imports: [SearchBarComponent,ShoppingCartBagComponent,NgOptimizedImage],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
}
