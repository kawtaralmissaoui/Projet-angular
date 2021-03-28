import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locataire',
  templateUrl: './locataire.component.html',
  styleUrls: ['./locataire.component.css']
})
export class LocataireComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    var element = document.getElementById("CloseButton") as any;
    element.click();
  }
}
