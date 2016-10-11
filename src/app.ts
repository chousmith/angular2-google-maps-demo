import {
  Component,
  NgModule
} from '@angular/core';

import {
  BrowserModule
} from '@angular/platform-browser';

import {
  AgmCoreModule
} from 'angular2-google-maps/core';

@Component({
  selector: 'map-app',
  styles: [`
    .sebm-google-map-container {
       height: 500px;
     }
  `],
  template: `
    <sebm-google-map
      [latitude]="lat"
      [longitude]="lng"
      [zoom]="zoom"
      (mapClick)="mapClicked($event)">

      <sebm-google-map-marker
          *ngFor="let m of markers; let i = index"
          (markerClick)="clickedMarker(m.label, i)"
          [latitude]="m.lat"
          [longitude]="m.lng"
          [label]="m.label"
          [markerDraggable]="m.draggable"
          (dragEnd)="markerDragEnd(m, $event)">

        <sebm-google-map-info-window>
          <strong>InfoWindow content</strong>
        </sebm-google-map-info-window>

      </sebm-google-map-marker>

      <!--
      <sebm-google-map-circle [latitude]="lat + 0.3" [longitude]="lng"
          [radius]="5000"
          [fillColor]="'red'"
          [circleDraggable]="true"
          [editable]="true">
      </sebm-google-map-circle>
      -->

    </sebm-google-map>
`})
export class App {

  // google maps zoom level
  zoom: number = 10;

  // initial center position for the map
  lat: number = 32.748069;
  lng: number = -117.164744;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    console.log('map clicked: ');
    console.log( $event );

    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [
	  {
		  lat: 32.960909,
		  lng: -117.268211,
		  label: 'A',
		  draggable: true
	  }
  ]
}
// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

if ( typeof GOOGLEMAPSAPIKEY == 'undefined' ) {
  console.log('looks like GOOGLEMAPSAPIKEY is undefined. Please refer to the README');
}

@NgModule({
  imports: [ BrowserModule, AgmCoreModule.forRoot({
    apiKey: typeof GOOGLEMAPSAPIKEY !== 'undefined' ? GOOGLEMAPSAPIKEY : ''
  }) ],
  declarations: [ App ],
  bootstrap: [ App ]
})
export class AppModule {}
