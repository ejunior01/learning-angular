import { Component } from '@angular/core';
import { LucideAngularModule,Search } from 'lucide-angular';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './search-bar.component.html',

})
export class SearchBarComponent {
  readonly Search = Search;
}
