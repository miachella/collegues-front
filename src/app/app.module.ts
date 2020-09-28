import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { HttpClientModule } from '@angular/common/http';
import { FormCreationComponent } from './form-creation/form-creation.component'
import { FormsModule } from '@angular/forms';
import { AccueilComponent } from './MenuComponent/accueil/accueil.component';
import { GalerieComponent } from './MenuComponent/galerie/galerie.component';
import { AProposComponent } from './MenuComponent/apropos/apropos.component';

import { RouterModule, Routes } from '@angular/router';


export const ROUTES: Routes = [

  // /todos => PageListeTodosComponent
  { path: 'accueil', component:  AccueilComponent},
  { path: 'galerie', component:  GalerieComponent},
  { path: 'a-propos', component:  AProposComponent},
  { path: '', pathMatch: 'full', redirectTo: '/todos' }
];



@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent,
    FormCreationComponent,
    AccueilComponent,
    GalerieComponent,
    AProposComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
