import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../Services/jarwis.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Bien } from '../Model/bien';
import jspdf from 'jspdf'
import html2canvas from 'html2canvas'
@Component({
  selector: 'app-details-bien',
  templateUrl: './details-bien.component.html',
  styleUrls: ['./details-bien.component.css']
})
export class DetailsBienComponent implements OnInit {

  id :any;
  public bien: Bien = new Bien;
  constructor(private route: ActivatedRoute,private router: Router,private Jarwis:JarwisService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.Jarwis.getbienbyid(this.id)
    .subscribe(data => {
      //console.log(this.user)
   data[0]=this.id;
    console.log(data[0]);
    this.bien= data[0];
    console.log(data)
    this.bien=data;
    console.log(this.bien)
    }, error => console.log(error));
  }


  archiver(id :number){
    this.Jarwis.archiverBien(this.id,this.bien).subscribe(
      data=>{
        console.log(data)
      },error => console.log(error)
      )
  }

  editer(id:number){
    console.log('cliecked', id);
   this.router.navigate(['edit-bien', id])
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
      pdf.save('bien.pdf');
    });
  }
}
