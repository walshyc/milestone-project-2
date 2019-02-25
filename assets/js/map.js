

function initMap() {
    var mapCenter = { lat: 50.7436337, lng: 7.0208038 };
    var map = new google.maps.Map(document.getElementById('map'), { zoom:3, center: mapCenter });


$.getJSON( "../data/cities.json", function( json ) {
    console.log( "JSON Data received, name is " + json.city.name);
});
    
    var marker = new google.maps.Marker({position:{lat:52.3144, lng:4.9420},map:map});
    
}