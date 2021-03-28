import { Component, OnInit } from '@angular/core';
import { document } from '../Model/document.model';
@Component({
  selector: 'app-create-societe',
  templateUrl: './create-societe.component.html',
  styleUrls: ['./create-societe.component.css']
})
export class CreateSocieteComponent implements OnInit {
  dataarray=[] as any;
  document = new document();
  constructor() { }

  ngOnInit(): void {
  }
  addForm(){
    this.document= new document();
    this.dataarray.push(this.document);

  }
}
