import { Component, OnInit } from '@angular/core';
import { document } from '../Model/document.model';
import { User } from '../Model/user';
import { Router } from '@angular/router';
import { JarwisService } from '../Services/jarwis.service';
import { TokenService } from '../Services/token.service';
import Swal from 'sweetalert2' ;
@Component({
  selector: 'app-create-loc-phy',
  templateUrl: './create-loc-phy.component.html',
  styleUrls: ['./create-loc-phy.component.css']
})
export class CreateLocPhyComponent implements OnInit {
  dataarray=[] as any;
  document = new document();
  constructor(private Jarwis:JarwisService,private router:Router,private Token:TokenService) { }
   user = new User();

  ngOnInit(): void {

  }
  addForm(){
    this.document= new document();
    this.dataarray.push(this.document);

  }

  onSubmit(){
    this.Jarwis.addlocataire(this.user).subscribe(

      data => console.log(data), error => console.log(error)
      );
    this.user = new User();
   }


   opensweetalert(){
    Swal.fire({
      title: 'Succés',
      text: 'Ajout avec succes!',
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'OK!',
      cancelButtonText: 'No, keep it'
    })
   }

   erreur(){
    Swal.fire({
      title: 'Ereur',
      text: 'Erreur!',
      icon: 'warning',
      showCancelButton: false,
      confirmButtonText: 'OK!',
      cancelButtonText: 'No, keep it'
    })
   }

  alert(){
     if(Object.values(this.user).length!=0)
      this.opensweetalert();
    else
    this.erreur();
   }

}
