import { DataService } from './../services/data.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() col: Collegue;
  modeAffichage = true;
  modeCreation = false;

  constructor(private dataSrv: DataService) { }

  ngOnInit(): void {
    this.dataSrv.recupererCollegueCourant().subscribe(colSelect => this.col = colSelect);
  }

  creerColl() {
    console.log('Créer un nouveau collègue');
    this.modeCreation = true;
  }

  modifierColl() {
    this.modeAffichage = false;
  }

  validerColl() {
    this.modeAffichage = true;
  }

}
