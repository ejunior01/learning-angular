import { Component } from '@angular/core';
import { LucideAngularModule, ChevronDown } from 'lucide-angular';

@Component({
  selector: 'app-products-list-sort',
  imports: [LucideAngularModule],
  templateUrl: './products-list-sort.component.html',
})
export class ProductsListSortComponent {
  readonly ChevronDown = ChevronDown;
}
