import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Bien } from '../Model/bien';
import { JarwisService } from '../Services/jarwis.service';
@Component({
  selector: 'app-bien',
  templateUrl: './bien.component.html',
  styleUrls: ['./bien.component.css']
})
export class BienComponent implements OnInit {

  table:boolean=false;
  bien = new Bien();
  biens=[] as any ;
  constructor(private Jarwis:JarwisService) { }


  ngOnInit(): void {
  }
  listActif(){
    this.Jarwis.getbienActif().subscribe(
      data => {console.log(data);  this.biens=Object.values(data);}, error => console.log(error)
      );
      this.table=true;
  }
  listArchiv(){
    this.Jarwis.getbienArchiv().subscribe(
      data => {console.log(data);  this.biens=Object.values(data);}, error => console.log(error)
      );
      this.table=true;
  }

}
