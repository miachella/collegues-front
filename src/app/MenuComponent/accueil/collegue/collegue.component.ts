import { DataService } from '../../../services/data.service';
import { Component, Input, OnInit } from '@angular/core';
import { Collegue } from '../../../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() col: Collegue;
  @Input() modeAffichage: boolean;
  @Input() modeCreation: boolean;

  constructor(private dataSrv: DataService) { }

  ngOnInit(): void {
    this.dataSrv.recupererCollegueCourant().subscribe(colSelect => this.col = colSelect);
  }

  modifierColl() {
    this.modeAffichage = false;
    this.modeCreation = false;
  }

  validerColl() {
    this.modeAffichage = true;
    this.modeCreation = false;
  }
  

}
