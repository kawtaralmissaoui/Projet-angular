import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Bien } from '../Model/bien';
import { JarwisService } from '../Services/jarwis.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-edit-bien',
  templateUrl: './edit-bien.component.html',
  styleUrls: ['./edit-bien.component.css']
})
export class EditBienComponent implements OnInit {
  public bien : Bien=new Bien;
  id: any;
  constructor(private route: ActivatedRoute,private router: Router,private Jarwis: JarwisService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.Jarwis.getbienbyid(this.id)
    .subscribe(data => {
      //console.log(this.user)
   data[0]=this.id;
    console.log(data[0]);
    this.bien= data[0];
    console.log(data)
    this.bien=data;
    console.log(this.bien)
    }, error => console.log(error));
  }

  onSubmitform(f: NgForm) {
    this.Jarwis.updatebien(this.id, this.bien).subscribe(
      data => console.log(data), error => console.log(error)
      );
    this.bien = new Bien();
    this.router.navigate(['/bien']);
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
    icon: 'error',
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

}
