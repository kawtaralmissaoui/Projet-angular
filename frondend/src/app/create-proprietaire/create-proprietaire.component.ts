import { Component, OnInit } from '@angular/core';
import { document } from '../Model/document.model';
@Component({
  selector: 'app-create-proprietaire',
  templateUrl: './create-proprietaire.component.html',
  styleUrls: ['./create-proprietaire.component.css']
})
export class CreateProprietaireComponent implements OnInit {
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
