import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../Services/jarwis.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Location } from '../Model/location';
@Component({
  selector: 'app-details-location',
  templateUrl: './details-location.component.html',
  styleUrls: ['./details-location.component.css']
})
export class DetailsLocationComponent implements OnInit {

  id :any;
  public location: Location = new Location;
  constructor(private route: ActivatedRoute,private router: Router,private Jarwis:JarwisService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.Jarwis.getlocationbyid(this.id)
    .subscribe(data => {
      //console.log(this.user)
   data[0]=this.id;
    console.log(data[0]);
    this.location= data[0];
    console.log(data)
    this.location=data;
    console.log(this.location)
    }, error => console.log(error));
  }

  archiver(id :number){
    this.Jarwis.archiverLocation(this.id,this.location).subscribe(
      data=>{
        console.log(data)
      },error => console.log(error)
      )
  }

  editer(id:number){
    console.log('cliecked', id);
   this.router.navigate(['edit-location', id])
  }
}
