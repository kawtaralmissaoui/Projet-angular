import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-societe',
  templateUrl: './societe.component.html',
  styleUrls: ['./societe.component.css']
})
export class SocieteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    var element = document.getElementById("CloseButton") as any;
    element.click();
  }
}
