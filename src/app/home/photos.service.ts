import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private url: string = "https://jsonplaceholder.typicode.com/photos"

  constructor(private _http: HttpClient) { }

  /**
   * Llama a servicio externo (web) para traer un listado de fotos
   */
  getPhotos(){
    return this._http.get(this.url)
  }
}
