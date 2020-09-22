import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent {

  @Output() change:EventEmitter<string> = new EventEmitter<string>();

  quandOnClique() {
    console.log('Modification du collègue');
    }

}
