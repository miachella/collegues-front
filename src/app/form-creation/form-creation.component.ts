import { Component, OnInit } from '@angular/core';

interface Collegue {
  nom?: string;
  prenoms?: string;
  email?: string;
  dateDeNaissance?: string;
  photoUrl?: string;
}


@Component({
  selector: 'app-form-creation',
  templateUrl: './form-creation.component.html',
  styleUrls: ['./form-creation.component.css']
})
export class FormCreationComponent implements OnInit {

  collegue: Collegue = {};

  constructor() { }

  ngOnInit(): void {
  }

  valider(): void {
    console.log(this.collegue);
  }

}
