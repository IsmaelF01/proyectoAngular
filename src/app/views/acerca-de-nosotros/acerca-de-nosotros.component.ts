import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de-nosotros',
  templateUrl: './acerca-de-nosotros.component.html',
  styleUrls: ['./acerca-de-nosotros.component.css']
})
export class AcercaDeNosotrosComponent{

  constructor() { }

  title= 'gmaps';

  position = {
    lat: 37.179709,
    lng: -1.821821
  };

  label = {
    color: 'rgb(168, 174, 192)',
    text: 'Calle Mayor'
  }

  ngOnInit(): void {
  }



}
