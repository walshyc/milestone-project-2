function initMap() {
    var mapCenter = { lat: 50.7436337, lng: 7.0208038 };
    var map = new google.maps.Map(document.getElementById('map'), { zoom:3, center: mapCenter });

    $.getJSON( "../data/cities.json", function(citiesData) {
        console.log(cities.city.name);
    }
}