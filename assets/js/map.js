var xhr = new XMLHttpRequest();
var data;

xhr.open("GET", "../data/cities.json");
xhr.send();

function setData(jsonData) {
    data = jsonData;
}

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        setData(JSON.parse(this.responseText));
    };
}

console.log(data);


function initMap() {
    var mapCenter = { lat: 50.7436337, lng: 7.0208038 };
   
    var map = new google.maps.Map(document.getElementById('map'), { zoom:3, center: mapCenter });

    
    var marker = new google.maps.Marker({position:{lat:52.3144, lng:4.9420},map: map, icon: "assets/img/marker-logo.png"});
    
}