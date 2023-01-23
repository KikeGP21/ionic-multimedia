import { Component, OnInit } from '@angular/core';
import { PlacesPageRoutingModule } from '../places-routing.module';
import { PlacesPageModule } from '../places.module';
import { PlacesPage } from '../places.page';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  public titulo = 'place-detail';
  // public place = ;

  constructor(private placeService: PlacesService) {}

  ngOnInit() {
    // this.place = this.placeService.getPlaceId("");
  }
}
