import { Component } from '@angular/core';
import { from } from 'rxjs';
import { c1, c2, c3, c4 } from './mock/collegues.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  c1 = c1;
  c2 = c2;
  c3 = c3;
  c4 = c4;
  title = 'collegues-front';
}
