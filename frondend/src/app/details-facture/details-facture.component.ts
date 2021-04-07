import { Component, OnInit } from '@angular/core';
import jspdf from 'jspdf'
import html2canvas from 'html2canvas'
import { fakeAsync } from '@angular/core/testing';
@Component({
  selector: 'app-details-facture',
  templateUrl: './details-facture.component.html',
  styleUrls: ['./details-facture.component.css']
})
export class DetailsFactureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
      pdf.save('Filename.pdf');
    });
  }








}
