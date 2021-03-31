import { Component, OnInit } from '@angular/core';
import { Charge } from '../Model/charge';
import { Router } from '@angular/router';
import { JarwisService } from '../Services/jarwis.service';
import { TokenService } from '../Services/token.service';
@Component({
  selector: 'app-create-paiement',
  templateUrl: './create-paiement.component.html',
  styleUrls: ['./create-paiement.component.css']
})
export class CreatePaiementComponent implements OnInit {

  constructor(private Jarwis:JarwisService,private router:Router,private Token:TokenService) { }
charge=new Charge;
  ngOnInit(): void {
  }

  onSubmit(){
    this.Jarwis.addpaiement(this.charge).subscribe(
      data => console.log(data), error => console.log(error)
      );
    this.charge = new Charge();
   }

}
