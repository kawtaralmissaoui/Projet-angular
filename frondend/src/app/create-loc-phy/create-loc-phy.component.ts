import { Component, OnInit } from '@angular/core';
import { document } from '../Model/document.model';
@Component({
  selector: 'app-create-loc-phy',
  templateUrl: './create-loc-phy.component.html',
  styleUrls: ['./create-loc-phy.component.css']
})
export class CreateLocPhyComponent implements OnInit {
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
