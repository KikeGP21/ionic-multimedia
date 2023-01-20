import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  public title:String = "Lugares"

  constructor() { }

  ngOnInit() {
    //debugger;
    console.log('Iniciando página...')
    console.log(this.title);
  }

}
