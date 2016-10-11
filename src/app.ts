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
          <strong>InfoWindow #{{ i + 1 }}</strong>
          <span *ngIf="m.title"><br />Title: {{ m.title }}</span>
          <span *ngIf="m.label"><br />Marker Label: {{ m.label }}</span>
          <span *ngIf="!m.label"><br />Marker Label: n/a</span><br />
          Lat: {{ m.lat }}<br />
          Lng: {{ m.lng }}
        </sebm-google-map-info-window>

      </sebm-google-map-marker>

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

    var alphamap = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    var newlabel = alphamap[ this.markers.length % 7 ];

    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      label: newlabel
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
    // (re)set the marker lat & lng?
    m.lat = $event.coords.lat;
    m.lng = $event.coords.lng;
  }

  markers: marker[] = [
	  {
		  lat: 32.748069,
		  lng: -117.164744,
		  label: 'A',
      title: 'Ninthlink, Inc.',
		  draggable: false
	  },
	  {
		  lat: 32.960909,
		  lng: -117.268211,
		  label: 'B',
      title: 'Power Plant Park?',
		  draggable: true
	  }
  ]
}
// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	title?: string;
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
