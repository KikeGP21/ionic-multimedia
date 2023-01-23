import { Injectable } from '@angular/core';
import { place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private places: place[] = [
    {
      id: '1',
      title: 'Torre Eiffel',
      imageURL:
        'https://www.mercerhoteles.com/photo/blog/45/1/sevilla-a-los-pies-de-la-giralda.jpg?w=1440',
      comments: [
        'Maravillosa torre, preciosa',
        'una belleza, impresionante altura',
      ],
    },
    {
      id: '2',
      title: 'Estatua de la Libertad',
      imageURL:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/1200px-Statue_of_Liberty_7.jpg',
      comments: [
        'Increibles vistas desde la bahía',
        'Las vistas desde arriba son una pasada',
      ],
    },
    {
      id: '3',
      title: 'Messi',
      imageURL:
        'https://i.pinimg.com/474x/bd/10/77/bd1077fc515fff7d6795d22731f79007.jpg',
      comments: ['Lionel Andres Messi Cucittini'],
    },
    {
      id: '4',
      title: 'Lucario',
      imageURL: 'https://images8.alphacoders.com/875/875827.jpg',
      comments: [
        'Pokémon de tipo lucha/acero introducido en la cuarta generación.',
      ],
    },
    {
      id: '5',
      title: 'Mona Lisa',
      imageURL:
        'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6c/50/1b.jpg',
      comments: [
        'Maravillosa torre, preciosa',
        'una belleza, impresionante altura',
      ],
    },
  ];

  constructor() {}

  /**
   * Devuelve el array places
   */
  getPlaces() {
    return [...this.places];
  }

  /**
   * Devuelve uno de los elementos del array 'places' mediante Id.
   * Parámetro de entrada: placeId -> Identificador del elemento a devolver.
   */
  getPlaceId(placeId: string) {
    return {
      ...this.places.find((place) => {
        return place.id === placeId;
      }),
    };
  }

  /**
   *
   */
  addPlace(title: string, imageURL: string) {
    this.places.push({
      id: (this.places.length + 1).toString(),
      title,
      imageURL,
      comments: [],
    });
  }

  /**
   *
   */
  deletePlace(placeId: string) {
    this.places = this.places.filter((place) => {
      return place.id != placeId;
    });
  }
}
