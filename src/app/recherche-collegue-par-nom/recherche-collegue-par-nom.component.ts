import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { colleguesTab } from '../mock/matricules.mock'


@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  matricules: string[];
  matriculeNonTrouve = false;
  erreurTechnique = false;


  constructor(private dataSrv: DataService) { }

  ngOnInit(): void {
  }

  rechercherCol(nomSaisi: string): void {
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
   this.dataSrv.publierCol(matricule)
   .subscribe(() => { },
   error => this.erreurTechnique = true
);
  }


}
