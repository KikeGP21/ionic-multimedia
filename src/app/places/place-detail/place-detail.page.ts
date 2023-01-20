import { Component, OnInit } from '@angular/core';
import { PlacesPageRoutingModule } from '../places-routing.module';
import { PlacesPageModule } from '../places.module';
import { PlacesPage } from '../places.page';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  public nombre: string = "";

  constructor() { }

  ngOnInit() {
  }

}
