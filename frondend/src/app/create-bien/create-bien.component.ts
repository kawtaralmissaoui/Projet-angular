import { Component, OnInit } from '@angular/core';
import { Bien } from '../Model/bien';
import { Router } from '@angular/router';
import { JarwisService } from '../Services/jarwis.service';
import { TokenService } from '../Services/token.service';
import Swal from 'sweetalert2' ;
import { User } from '../Model/user';
@Component({
  selector: 'app-create-bien',
  templateUrl: './create-bien.component.html',
  styleUrls: ['./create-bien.component.css']
})
export class CreateBienComponent implements OnInit {

  constructor(private Jarwis:JarwisService,private router:Router,private Token:TokenService) { }
  bien=new Bien;
  user = new User();
  users=[] as any ;
  ngOnInit(): void {
    this.listActif();
  }

  onSubmit(){
    this.Jarwis.addbien(this.bien).subscribe(
      data => console.log(data), error => console.log(error)

      );
    this.bien = new Bien();
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
     if(Object.values(this.bien).length!=0)
      this.opensweetalert();
    else
    this.erreur();
   }

   listActif(){
    this.Jarwis.getProPhyActif().subscribe(
      data => {console.log(data);  this.users=Object.values(data);}, error => console.log(error)
      );
  }


}
