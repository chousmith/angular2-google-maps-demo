# Angular2 + Google Maps demo

Based off the plunker http://plnkr.co/edit/YX7W20?p=preview from https://angular-maps.com/

## installation

1. Clone or Download the repo
2. Create a `config.js` file with the following: `var GOOGLEMAPSAPIKEY = 'YOUR-API-KEY';`, or just copy and rename `config.sample.js` to `config.js`.
3. If you do not already have one, then per https://angular-maps.com/docs/getting-started.html , get an API key here: https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
4. Replace the `YOUR-API-KEY` in `config.js` with that actual Google Maps JavaScript API key.
5. Open index.html in a browser of some sort?

## nuts and bolts and question marks

* The `index.html` file is all you need to open to get this going.
* It should load a full screen Google Maps map centered around [Ninthlink, Inc.](http://www.ninthlink.com/) assuming it is set up correct
* It will add a Marker there and another Marker which can be dragged around.
* Clicking on the map will add another Marker where you clicked.
* Clicking on a Marker will open an InfoWindow.
* `systemjs.config.js` is what actually loads all the pieces, replacing the `<map-app>...</map-app>` in `index.html` with actual Angular2 + Google Maps functionality, assuming that you have a Google Maps JavaScript API key in place.
* At this point, I have little / no idea how the `unpkg.com` scripts work, other than the `paths: { 'npm:': 'https://unpkg.com/' }`...
* See notes above and below about `config.js`.
* do the `map` items in `systemjs.config.js` have to be in that order?

## and then?

There is probably a better way to do that, but this was the quick way to do that.

### also...

If you try and run this index.html, and by run I mean even just open it in a Chrome browser as is, if you do not have that `config.js` file with that `var GOOGLEMAPSAPIKEY` then `console.log` will complain and the map will not map.
