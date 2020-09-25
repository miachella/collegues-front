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

  constructor(private dataSrv: DataService) { }

  ngOnInit(): void {
  }

  rechercherCol(): void {
    this.matricules = this.dataSrv.rechercherParNom('');
  }


}
