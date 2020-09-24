import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { matricules } from '../mock/matricules.mock';
import { c1 } from '../mock/collegues.mock';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _matricules: Collegue[] = matricules;
  private _c1: Collegue = c1;

  constructor() { }

  rechercherParNom(nom: string): string[] {
    const listMatricules: string[] = [];
    return listMatricules;
    }

    recupererCollegueCourant(): Collegue {
    return c1;
    }
    
}
