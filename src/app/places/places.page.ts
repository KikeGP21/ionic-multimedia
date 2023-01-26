import { Component, OnInit } from '@angular/core';
import { PlacesService } from './places.service';
import { place } from './place.model';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {
  public title: String = 'Lugares del mundo';
  public places: place[] = [];

  constructor(private _placeService: PlacesService) {}

  ngOnInit() {
    //debugger;
    console.log('Iniciando página... ' + this.title);
    this.places = this._placeService.getPlaces();
  }
}
