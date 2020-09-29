import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  modeCreation = false;
  modeAffichage = true;

  constructor() { }

  ngOnInit(): void {
  }

  creerColl() {
    this.modeCreation = true;
    this.modeAffichage = false;
  }

  stopCreerColl() {
    this.modeCreation = false;
    this.modeAffichage = true;
  }
}
