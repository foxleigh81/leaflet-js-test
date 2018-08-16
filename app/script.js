var latlong = [50.837705, -0.980612]
var mymap = L.map('mapid').setView(latlong, 17);
var pintIcon = L.icon({
    iconUrl: 'pint-icon.png',
    shadowUrl: 'pint-icon-shadow.png',

    iconSize: [45, 86], // size of the icon
    shadowSize: [90, 86], // size of the shadow
    iconAnchor: [45, 43], // point of the icon which will correspond to marker's location
    shadowAnchor: [45, 43], // the same for the shadow
    popupAnchor: [-22, -43] // point from which the popup should open relative to the iconAnchor
});


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);
var marker = L.marker(latlong, { icon: pintIcon }).bindPopup("<b>The Ship Inn</b><br>My favourite summertime pub.").openPopup().addTo(mymap);