const express = require('express');
const MAPBOX_API_KEY = "pk.eyJ1Ijoia2F0ZXNoaWVsZHNzaG93cm9vbSIsImEiOiJjamQ0MGVjNWU0N2JrMnlvNXVtdjc0NGdoIn0.hfzyhp68MYmXpJQ6uT9IQw";
const MapboxClient = require('mapbox');
const app = express()
var client = new MapboxClient(MAPBOX_API_KEY);

app.get('/', (req, res) => res.send('Hello World!'));

// Returns a list of places that need to be plotted on the map.
// First, calls the airtable API to get the list of data objects.  Then, checks for any with empty location info (lat/long) and calls the mapbox api to assign them lat and longitudes.

app.get('/map', (req, res) => res.send('Hello World!'));


app.listen(3000, () => {

})
