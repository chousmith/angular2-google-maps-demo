# Angular2 + Google Maps demo

Based off the plunker http://plnkr.co/edit/YX7W20?p=preview from https://angular-maps.com/

## Installation

1. Clone or Download the repo
2. Create a `config.js` file with the following: `var GOOGLEMAPSAPIKEY = 'YOUR-API-KEY';`, or just copy and rename `config.sample.js` to `config.js`.
3. If you do not already have one, then per https://angular-maps.com/docs/getting-started.html , get an API key here: https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
4. Replace the `YOUR-API-KEY` in `config.js` with that actual Google Maps JavaScript API key.
5. Open index.html in a browser of some sort?

## And Then?

There is probably a better way to do that, but this was the quick way to do that.

### Also...

If you try and run this index.html, and by run I mean even just open it in a Chrome browser as is, if you do not have that `config.js` file with that `var GOOGLEMAPSAPIKEY` then `console.log` will complain and the map will not map.
