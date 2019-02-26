function initMap() {
    var mapCenter = { lat: 50.7436337, lng: 18.4208038 };

    var map = new google.maps.Map(document.getElementById('map'), { zoom: 3, center: mapCenter });
    $.getJSON('assets/data/cities.json', function (data) {


        $.each(data, function (key, value) {
            console.log(value.name);
            cityName = value.name;
            cityLat = value.stadiumLat;
            cityLng = value.stadiumLng;

            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(cityLat, cityLng),
                icon: "assets/img/marker-logo.png",
                map: map
            })
        });


    });
}

// function displayCityInfo() {
//     $("#ams-btn").click(function (e) { 
//         e.preventDefault();
//         $("#bku-btn").hide();
//         $("#bil-btn").hide();
//         $("#buc-btn").hide();
//         $("#bud-btn").hide();
//         $("#cop-btn").hide();
//         $("#dub-btn").hide();
//         $("#gla-btn").hide();
//         $("#ldn-btn").hide();
//         $("#mun-btn").hide();
//         $("#rom-btn").hide();
//         $("#stp-btn").hide();

//     });

//     $("#stp-btn").click(function (e) { 
//         e.preventDefault();
//         $("#bku-btn").hide();
//         $("#bil-btn").hide();
//         $("#buc-btn").hide();
//         $("#bud-btn").hide();
//         $("#cop-btn").hide();
//         $("#dub-btn").hide();
//         $("#gla-btn").hide();
//         $("#ldn-btn").hide();
//         $("#mun-btn").hide();
//         $("#rom-btn").hide();
//         $("#ams-btn").hide();
//         $("#stp-btn").siblings

//     });
// }

