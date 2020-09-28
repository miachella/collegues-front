import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

export interface CollegueInForm {
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

  collegue: CollegueInForm = {};
  erreurTechnique = false;

  constructor(private dataSrv: DataService) { }

  ngOnInit(): void {
  }

  valider(): void {

    this.dataSrv.creerCollegue(this.collegue).subscribe(
      col => {
        this.collegue = {};
      },
      error => this.erreurTechnique = true
    );
    }

}
