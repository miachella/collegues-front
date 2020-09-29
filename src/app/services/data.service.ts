import { Collegue } from './../models/Collegue';
import { CollegueInForm } from '../MenuComponent/accueil/form-creation/form-creation.component'
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';


interface CollegueBack {
  id: number;
  matricule: string;
  nom: string;
  prenoms: string;
  email: string;
  dateDeNaissance: string;
  photoUrl: string;
}

interface CollegueGalerie {
  matricule: string;
  photoUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  URL_BACKEND: string = environment.backendUrl;
  private subCollegueSelectionne = new Subject<Collegue>();

  constructor(private http: HttpClient) { }

  lister(): Observable<CollegueGalerie[]> {
    return this.http.get<CollegueGalerie[]>(`${this.URL_BACKEND}`);
  }

  rechercherParNom(nom: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.URL_BACKEND}?nom=${nom}`);
  }

  recupererCollegueCourant(): Observable<Collegue> {
    return this.subCollegueSelectionne.asObservable();
  }

  publierCol(matricule: string): Observable<Collegue>{
    return this.http.get<CollegueBack>(`${this.URL_BACKEND}?matricule=${matricule}`)
    .pipe(
      map(collegueBack => new Collegue(collegueBack.matricule, collegueBack.nom, collegueBack.prenoms, collegueBack.email,
        new Date(collegueBack.dateDeNaissance), collegueBack.photoUrl)),
      tap(collegue => this.subCollegueSelectionne.next(collegue))
    );
  }

  creerCollegue(collegue: CollegueInForm): Observable<Collegue> {
    return this.http.post<CollegueBack>(
      `${this.URL_BACKEND}`,
      collegue)
      .pipe(
        map(collegueBack => {
          const collegueEntre = new Collegue(collegueBack.matricule, collegueBack.nom, collegueBack.prenoms, collegueBack.email,
            new Date(collegueBack.dateDeNaissance), collegueBack.photoUrl);
          console.log(collegueEntre);
          return collegueEntre;
        }));
  }
  }