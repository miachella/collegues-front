import { DataService } from '../../../services/data.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  matricules: string[];
  matriculeNonTrouve = false;
  erreurTechnique = false;
  @Input() modeAffichage: boolean;
  @Input() modeCreation: boolean;



  constructor(private dataSrv: DataService) { }

  ngOnInit(): void {
  }

  rechercherCol(nomSaisi: string): void {
    this.modeAffichage=true;
    this.modeCreation=false;
    this.matricules = null;
    this.dataSrv.rechercherParNom(nomSaisi)
    .subscribe(matriculesBack => {
      this.erreurTechnique = false;
      if (matriculesBack.length > 0) {
        this.matriculeNonTrouve = false;
        this.matricules = matriculesBack;
      } else {
        this.matriculeNonTrouve = true;
      }

    },
      error => this.erreurTechnique = true);

  }

  selectionnerCol(matricule: string):void {
    this.modeAffichage=true;
    this.modeCreation=false;
   this.dataSrv.publierCol(matricule)
   .subscribe(() => { },
   error => this.erreurTechnique = true
);
  }


}
