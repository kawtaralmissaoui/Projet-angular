import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../Services/jarwis.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { User } from '../Model/user';
import jspdf from 'jspdf'
import html2canvas from 'html2canvas'
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-details-societe',
  templateUrl: './details-societe.component.html',
  styleUrls: ['./details-societe.component.css']
})
export class DetailsSocieteComponent implements OnInit {
  id :any;
  public user: User = new User;
  constructor(private route: ActivatedRoute,private router: Router,private Jarwis:JarwisService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.Jarwis.getuserbyid(this.id)
    .subscribe(data => {
      //console.log(this.user)
   data[0]=this.id;
    console.log(data[0]);
    this.user= data[0];
    console.log(data)
    this.user=data;
    console.log(this.user)
    }, error => console.log(error));
    }

    archiver(id :number){
      this.Jarwis.archiverUser(this.id,this.user).subscribe(
        data=>{
          console.log(data)
        },error => console.log(error)
        )

        if(Object.values(this.user).length!=0)
        this.opensweetalert();
        else
        this.erreur();



    }
    editer(id:number){
      console.log('cliecked', id);

      this.Jarwis.getuserbyid(this.id)
      .subscribe(data => {
        //console.log(this.user)
      data[0]=this.id;
      console.log(data[0]);
      this.user= data[0];
      //console.log(data)
      this.user=data;
      console.log(this.user)
      }, error => console.log(error));

      if(this.user.type===0)
        this.router.navigate(['edit-p', id]);
      else
      this.router.navigate(['edit-morale', id]);
    }

    exportAsPDF()
    {
      var data = document.getElementById('pdf');
      html2canvas(data as any).then(canvas => {
        console.log(canvas);
        const contentDataURL = canvas.toDataURL('image/png')
        var imgHeight = canvas.height * 202 / canvas.width;
        console.log(imgHeight);
        let pdf = new jspdf('p', 'mm', 'a4'); //Generates PDF in landscape mode
        // let pdf = new jspdf('p', 'cm', 'a4'); Generates PDF in portrait mode
        pdf.addImage(contentDataURL, 'PNG', 0, 0,202,imgHeight);
        pdf.save('proprietaire.pdf');
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


}
