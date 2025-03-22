import { Routes } from '@angular/router';
import { ProductsComponent } from './feature/catalog/pages/products/products.component';

export const routes: Routes = [{
  path: '',
  component: ProductsComponent,
  title: 'Produtos'
}];
