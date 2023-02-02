import { Component, OnInit } from '@angular/core';
import { PlacesPageRoutingModule } from '../places-routing.module';
import { PlacesPageModule } from '../places.module';
import { PlacesPage } from '../places.page';
import { PlacesService } from '../places.service';
import { ActivatedRoute, Router } from '@angular/router';
import { place } from '../place.model';
import { AlertController } from '@ionic/angular';

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
    private _activedRouted: ActivatedRoute,
    private _placesService: PlacesService,
    private _router: Router,
    private _alertCtrl: AlertController

  ) {}

  ngOnInit() {
    // this.place = this.placeService.getPlaceId("");
    this._activedRouted.paramMap.subscribe((paramMap) => {
      const recipeId: string|null= paramMap.get('placeID');
      this.place = this._placesService.getPlaceId(recipeId);
      console.log(this.place);
    });
  }

  /**
   * deletePlace: borra el place actual y vuelve a la vista de listado de places
   */
  async deletePlace(){

    const element = await this._alertCtrl.create(
      {
        header: "¿ Estás seguro de querrer borrar el place '" + this.place.title + "' ?",
        message: "Ten cuidado...",
        buttons:[
          {
          text: "Cancelar",
          role: "cancel"
        },
        {
          text: "Aceptar",
          handler: () => {
          alert("Place '" + this.place.title + "' eliminado.")
          this._placesService.deletePlace(this.place.id)
          this._router.navigate(['/places']) }
        }
        ]
      }
    );

    await element.present()
  }
}
