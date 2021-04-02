import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Location } from '../Model/location';
import { JarwisService } from '../Services/jarwis.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  table:boolean=false;
  location = new Location();
  locations=[] as any ;
  constructor(private Jarwis:JarwisService) { }

  ngOnInit(): void {
  }

  listActif(){
    this.Jarwis.getlocationActif().subscribe(
      data => {console.log(data);  this.locations=Object.values(data);}, error => console.log(error)
      );
      this.table=true;
  }
  listArchiv(){
    this.Jarwis.getlocationArchiv().subscribe(
      data => {console.log(data);  this.locations=Object.values(data);}, error => console.log(error)
      );
      this.table=true;
  }

}
