import { Component, OnInit } from '@angular/core';
import { PlacesPageRoutingModule } from '../places-routing.module';
import { PlacesPageModule } from '../places.module';
import { PlacesPage } from '../places.page';
import { PlacesService } from '../places.service';
import { ActivatedRoute } from '@angular/router';
import { place } from '../place.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  public titulo = 'place-detail';
  public place: any = "";
  public sinComments: string = "No hay comentarios todavía...";

  constructor(
    private activedRouted: ActivatedRoute,
    private placesService: PlacesService
  ) {}

  ngOnInit() {
    // this.place = this.placeService.getPlaceId("");
    this.activedRouted.paramMap.subscribe((paramMap) => {
      const recipeId: string|null= paramMap.get('placeID');
      this.place = this.placesService.getPlaceId(recipeId);
      console.log(this.place);
    });
  }

  deletePlace(){
    alert("Place eliminado.")
  }
}
