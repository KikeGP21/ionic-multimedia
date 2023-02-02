import { Component } from '@angular/core';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public titulo: string = "Listado de internet"
  public fotos: any

  constructor(private _photoService: PhotosService) {}

  /**
   * Llama al servicio de obtener fotos de la clase 'photos.service.ts'
   */
  ngOnInit(){
    this._photoService.getPhotos().subscribe(data =>{
      this.fotos = data
    })
  }
}
