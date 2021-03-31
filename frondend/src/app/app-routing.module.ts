import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SocieteComponent } from './societe/societe.component';
import { LocataireComponent } from './locataire/locataire.component';
import { LocationComponent } from './location/location.component';
import { PaiementComponent } from './paiement/paiement.component';
import { ChargesComponent } from './charges/charges.component';
import { QuittanceComponent } from './quittance/quittance.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateLocPhyComponent } from './create-loc-phy/create-loc-phy.component';
import { CreateLocMorComponent } from './create-loc-mor/create-loc-mor.component';
import { CreateProprietaireComponent } from './create-proprietaire/create-proprietaire.component';
import { CreateSocieteComponent } from './create-societe/create-societe.component';
import { CreateLocationComponent } from './create-location/create-location.component';
import { CreateChargeComponent } from './create-charge/create-charge.component';
import { CreatePaiementComponent } from './create-paiement/create-paiement.component';
const routes: Routes = [
  { path:'' ,
  component: HomeComponent },
 // children:[
  { path:'dashboard',
  component: DashboardComponent },
  { path:'societe',
  component: SocieteComponent },
  {
    path:'locataire',
    component:LocataireComponent
  },
  {
    path:'location',
    component:LocationComponent
  },
  {
    path:'paiement',
    component:PaiementComponent
  },
  {
    path:'charges',
    component:ChargesComponent
  },
  {
    path:'quittance',
    component:QuittanceComponent
  },
  {
    path:'documents',
    component:DocumentsComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'create-loc-phy',
    component:CreateLocPhyComponent
  },
  {
    path:'create-loc-mor',
    component:CreateLocMorComponent
  },
  {
    path:'create-proprietaire',
    component:CreateProprietaireComponent
  },
  {
    path:'create-societe',
    component:CreateSocieteComponent
  },
  {
    path:'create-location',
    component:CreateLocationComponent
  },
  {
    path:'create-charge',
    component:CreateChargeComponent
  },
  {
    path:'create-paiement',
    component:CreatePaiementComponent
  },
 /*]
},*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
