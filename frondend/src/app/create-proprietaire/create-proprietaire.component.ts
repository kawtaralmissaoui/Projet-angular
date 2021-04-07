import { Component, OnInit } from '@angular/core';
import { document } from '../Model/document.model';
import { User } from '../Model/user';
import { Router } from '@angular/router';

import { JarwisService } from '../Services/jarwis.service';
import { TokenService } from '../Services/token.service';


import {NgForm} from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-create-proprietaire',
  templateUrl: './create-proprietaire.component.html',
  styleUrls: ['./create-proprietaire.component.css']
})
export class CreateProprietaireComponent implements OnInit {
  dataarray=[] as any;
  document = new document();

  constructor(private http: HttpClient, private Jarwis:JarwisService,private router:Router,private Token:TokenService) { }
   user = new User();

  ngOnInit(): void {
  }
  addForm(){
    this.document= new document();
    this.dataarray.push(this.document);

  }
   /*filedata:any;
   fileEvent(e:any){
    this.filedata = e.target.files[0];

   }*/

    onSubmitform(f: NgForm) {
      //var myFormData = new FormData();
      //myFormData.append('image', this.filedata);

      this.Jarwis.addpropriétaire(this.user).subscribe(

        data => console.log(data), error => console.log(error)
        );
      this.user = new User();

     /*var myFormData = new FormData();
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      myFormData.append('image', this.filedata);
      this.http.post('http://localhost:8000/api/auth/uploadimage', myFormData, {
      headers: headers
      }).subscribe(data => {
      });*/
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




