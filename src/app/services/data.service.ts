import { c1, c2 } from './../mock/collegues.mock';
import { colleguesTab } from './../mock/matricules.mock';
import { Collegue } from './../models/Collegue';
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

@Injectable({
  providedIn: 'root'
})
export class DataService {

  URL_BACKEND: string = environment.backendUrl;
  private subCollegueSelectionne = new Subject<Collegue>();

  constructor(private http: HttpClient) { }

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
}
