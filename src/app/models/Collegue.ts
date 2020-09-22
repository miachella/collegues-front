export class Collegue {

    constructor(private _matricule: string, private _nom: string, private _prenoms: string, private _email: string, private _dateDeNaissance: Date, private _photoUrl: string){
    }

    get matricule(): string {
        return this._matricule;
    }

    get nom(): string {
        return this._nom;
    }

    get prenoms(): string{
        return this._prenoms;
    }

    get email(): string {
        return this._email;
    }

    get dateDeNaissance(): Date {
        return this._dateDeNaissance;
    }

    get photoUrl(): string {
        return this._photoUrl;
    }
}