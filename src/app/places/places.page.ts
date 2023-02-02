import { Component, OnInit } from '@angular/core';
import { PlacesService } from './places.service';
import { place } from './place.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {
  public title: String = 'Lugares del mundo';
  public places: place[] = [];

  constructor(private _placeService: PlacesService, private _routerCtrl: Router) {}

  ngOnInit() {
    //debugger;
    console.log('Iniciando página... ' + this.title);
    this.ionViewWillEnter()
  }

  ionViewWillEnter(){
    this.places = this._placeService.getPlaces();
  }

  /**
   * NewPlace: Añadir nuevo elemento: abre formulario.
   */
  NewPlace(){
    this._routerCtrl.navigate(['/places/place-add'])
  }
}
