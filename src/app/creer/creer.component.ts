import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-creer',
  templateUrl: './creer.component.html',
  styleUrls: ['./creer.component.css']
})
export class CreerComponent {

  @Output() change:EventEmitter<string> = new EventEmitter<string>();

  quandOnClique() {
    console.log('Création d\'un nouveau collègue');
    }

}
