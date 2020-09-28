import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

class CollegueGalerie{
  matricule?: string;
  photoUrl?: string;
}

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {

  collegues: CollegueGalerie[];
  erreurTechnique = false;
  pasDeCollegue: boolean;

  constructor(private dataSrv: DataService) { }

  ngOnInit(): void {
    this.afficherCol();
  }

  afficherCol(): void {
    this.collegues = null;
    this.dataSrv.lister()
    .subscribe(colleguesBack => {
      this.erreurTechnique = false;
      if (colleguesBack.length > 0) {
        this.pasDeCollegue = false;
        this.collegues = colleguesBack;
      } else {
        this.pasDeCollegue = true;
      }
    },
    error => this.erreurTechnique = true);
  }

}
