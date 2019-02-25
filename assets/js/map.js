$(document).ready(function() {
    $.getJSON('../data/cities.json', function(data) {
        var city = data.city;
        console.log(city);
    });
});


function initMap() {
    var mapCenter = { lat: 50.7436337, lng: 7.0208038 };
   
    var map = new google.maps.Map(document.getElementById('map'), { zoom:3, center: mapCenter });

    
    var marker = new google.maps.Marker({position:{lat:52.3144, lng:4.9420},map: map, icon: "assets/img/marker-logo.png"});
    
}

function displayCityInfo() {
    $("#ams-btn").click(function (e) { 
        e.preventDefault();
        $("#bku-btn").hide();
        $("#bil-btn").hide();
        $("#buc-btn").hide();
        $("#bud-btn").hide();
        $("#cop-btn").hide();
        $("#dub-btn").hide();
        $("#gla-btn").hide();
        $("#ldn-btn").hide();
        $("#mun-btn").hide();
        $("#rom-btn").hide();
        $("#stp-btn").hide();
        
    });

    $("#stp-btn").click(function (e) { 
        e.preventDefault();
        $("#bku-btn").hide();
        $("#bil-btn").hide();
        $("#buc-btn").hide();
        $("#bud-btn").hide();
        $("#cop-btn").hide();
        $("#dub-btn").hide();
        $("#gla-btn").hide();
        $("#ldn-btn").hide();
        $("#mun-btn").hide();
        $("#rom-btn").hide();
        $("#ams-btn").hide();
        $("#stp-btn").siblings
        
    });
}