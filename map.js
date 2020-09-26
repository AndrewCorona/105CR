var map = L.map('map').setView([33.176892, -117.351236], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([33.176892, -117.351236]).addTo(map)
    .bindPopup('The Fashion Pet')
    .openPopup();

    33.176892, -117.351236