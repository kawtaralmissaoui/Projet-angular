import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../Model/user';
import { Router } from '@angular/router';
import { JarwisService } from '../Services/jarwis.service';
@Component({
  selector: 'app-locataire',
  templateUrl: './locataire.component.html',
  styleUrls: ['./locataire.component.css']
})
export class LocataireComponent implements OnInit {
  table:boolean=false;
  user = new User();
  users=[] as any ;
  constructor(private Jarwis:JarwisService,private router:Router) { }

  ngOnInit(): void {
  }
  onClick(){
    var element = document.getElementById("CloseButton") as any;
    element.click();
  }
  listActif(){
    this.Jarwis.getLocPhyActif().subscribe(
      data => {console.log(data);  this.users=Object.values(data);}, error => console.log(error)
      );
      this.table=true;
  }
  listArchiv(){
    this.Jarwis.getLocPhyArchiv().subscribe(
      data => {console.log(data);  this.users=Object.values(data);}, error => console.log(error)
      );
      this.table=true;
  }

  detaillocataire(id : number){

      this.router.navigate(['/details-locataire', id]);
      console.log(id);

  }
}
