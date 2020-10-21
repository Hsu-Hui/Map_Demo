var map;
(function ($) {
    $(document).ready(function () {
        $('#mapid').height(window.innerHeight);
         map = L.map('mapid', {
            center: [25.0677705, 121.5111187],
            zoom: 10
        });
        L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            maxZoom: 14,
            attribution: 'Map data: © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: © <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
        }).addTo(map);
    });
    
   
})($)

function get_point() {
    L.marker([25.033976, 121.5623502]).addTo(map)
        .bindPopup('<h1>臺北101</h1>')
        .openPopup();
}


