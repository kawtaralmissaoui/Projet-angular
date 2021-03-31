import { Component, OnInit } from '@angular/core';
import { document } from '../Model/document.model';
import { User } from '../Model/user';
import { Router } from '@angular/router';
import { JarwisService } from '../Services/jarwis.service';
import { TokenService } from '../Services/token.service';
@Component({
  selector: 'app-create-proprietaire',
  templateUrl: './create-proprietaire.component.html',
  styleUrls: ['./create-proprietaire.component.css']
})
export class CreateProprietaireComponent implements OnInit {
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
    this.Jarwis.addpropriétaire(this.user).subscribe(

      data => console.log(data), error => console.log(error)
      );
    this.user = new User();
   }


}
