import { Component, OnInit } from '@angular/core';
import { Location } from '../Model/location';
import { Router } from '@angular/router';
import { JarwisService } from '../Services/jarwis.service';
import { TokenService } from '../Services/token.service';
@Component({
  selector: 'app-create-location',
  templateUrl: './create-location.component.html',
  styleUrls: ['./create-location.component.css']
})
export class CreateLocationComponent implements OnInit {

  constructor(private Jarwis:JarwisService,private router:Router,private Token:TokenService) { }
  location = new Location();
  ngOnInit(): void {
  }

  onSubmit(){
    this.Jarwis.addlocation(this.location).subscribe(
      data => console.log(data), error => console.log(error)
      );
    this.location = new Location();
   }

}
