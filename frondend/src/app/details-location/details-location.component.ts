import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../Services/jarwis.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Location } from '../Model/location';
import jspdf from 'jspdf'
import html2canvas from 'html2canvas'
import Swal from 'sweetalert2/dist/sweetalert2.js';
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
       if(Object.values(this.location).length!=0)
        this.opensweetalert();
        else
        this.erreur();
        var element = document.getElementById("CloseButton") as any;
        element.click();
  }

  editer(id:number){
    console.log('cliecked', id);
   this.router.navigate(['edit-location', id])
  }

  exportAsPDF()
  {
    var data = document.getElementById('pdf');
    html2canvas(data as any).then(canvas => {
      console.log(canvas);
      const contentDataURL = canvas.toDataURL('image/png')
      var imgHeight = canvas.height * 208 / canvas.width;
      console.log(imgHeight);
      let pdf = new jspdf('p', 'mm', 'a4'); //Generates PDF in landscape mode
      // let pdf = new jspdf('p', 'cm', 'a4'); Generates PDF in portrait mode
      pdf.addImage(contentDataURL, 'PNG', 0, 0,208,imgHeight);
      pdf.save('location.pdf');
    });
  }

  opensweetalert(){
    Swal.fire({
      title: 'Succés',
      text: 'Archiver avec succes!',
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


   close(){
    var element = document.getElementById("CloseButton") as any;
    element.click();
  }
}
