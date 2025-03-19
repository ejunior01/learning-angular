import { Component } from '@angular/core';
import { LucideAngularModule, ShoppingBag } from 'lucide-angular';

@Component({
  selector: 'app-shopping-cart-bag',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './shopping-cart-bag.component.html',
})
export class ShoppingCartBagComponent {
  readonly ShoppingBag = ShoppingBag;
}
