import { Component, OnInit } from '@angular/core';
import { document } from '../Model/document.model';
@Component({
  selector: 'app-create-loc-mor',
  templateUrl: './create-loc-mor.component.html',
  styleUrls: ['./create-loc-mor.component.css']
})
export class CreateLocMorComponent implements OnInit {
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
