import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { CardProductComponent } from './core/components/card-product/card-product.component';
import { ProductsNavBarComponent } from './core/components/products-nav-bar/products-nav-bar.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    CardProductComponent,
    ProductsNavBarComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Capputeeno';
}
