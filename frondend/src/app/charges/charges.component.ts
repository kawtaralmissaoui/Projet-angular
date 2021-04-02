import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Charge } from '../Model/charge';
import { JarwisService } from '../Services/jarwis.service';
@Component({
  selector: 'app-charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.css']
})
export class ChargesComponent implements OnInit {
  table:boolean=false;
  charge = new Charge();
  charges=[] as any ;
  constructor(private Jarwis:JarwisService) { }

  ngOnInit(): void {
  }

  listActif(){
    this.Jarwis.getchargeActif().subscribe(
      data => {console.log(data);  this.charges=Object.values(data);}, error => console.log(error)
      );
      this.table=true;
  }
  listArchiv(){
    this.Jarwis.getchargeArchiv().subscribe(
      data => {console.log(data);  this.charges=Object.values(data);}, error => console.log(error)
      );
      this.table=true;
  }

}
