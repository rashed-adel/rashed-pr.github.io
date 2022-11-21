$(document).ready(intit);

function intit()
{
    var map = L.map('map').setView([24.39200069447753, 54.58509587258202], 13);
    // var marker = L.marker([24.39200069447753, 54.58509587258202]).addTo(map);
    L.marker([24.39200069447753, 54.58509587258202]).addTo(map)
    .bindPopup('Our location inside Zayed university')
    .openPopup();

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

}
