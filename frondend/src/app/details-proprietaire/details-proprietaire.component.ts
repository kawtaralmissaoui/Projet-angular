import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../Services/jarwis.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { User } from '../Model/user';
import jspdf from 'jspdf'
import html2canvas from 'html2canvas'
@Component({
  selector: 'app-details-proprietaire',
  templateUrl: './details-proprietaire.component.html',
  styleUrls: ['./details-proprietaire.component.css']
})
export class DetailsProprietaireComponent implements OnInit {
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
    }
    editer(id:number){
      console.log('cliecked', id);
     this.router.navigate(['edit-p', id])
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


}


