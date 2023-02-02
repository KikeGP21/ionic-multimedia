import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Router } from '@angular/router';
import { place } from '../place.model';

@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.page.html',
  styleUrls: ['./place-add.page.scss'],
})
export class PlaceAddPage implements OnInit {

  public titulo: string = "Añadir un nuevo lugar"
  public holder_titulo: string = "Escribe un título"
  public holder_image: string = "Escribe un url Http://"
  public guardar: String = "Guardar"
  public places: place[] = [];

  constructor(private _placeService: PlacesService, private _routerCtrl: Router) { }

  ngOnInit() {
   
  }


  /**
   * saveNewPlace: Añade un nuevo lugar introducido en un formulario
   */
  saveNewPlace(title: any, imageURL: any){
    this._placeService.addPlace(title.value, imageURL.value)
    this._routerCtrl.navigate(['/places'])
  }
}
