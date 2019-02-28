function initMap() {
    var mapCenter = { lat: 50.7436337, lng: 18.4208038 };
    var activeInfoWindow;

    var map = new google.maps.Map(document.getElementById('map'), { zoom: 3, center: mapCenter });
    $.getJSON('assets/data/cities.json', function (data) {


        $.each(data, function (key, value) {
            console.log(value.name);
            cityName = value.name;
            stadiumName = value.stadium;
            stadiumCapacity = value.capacity
            cityLat = value.stadiumLat;
            cityLng = value.stadiumLng;
            countryFlag = value.flagIcon;

            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(cityLat, cityLng),
                icon: "assets/img/marker-logo.png",
                map: map,
                title: `${cityName}`
            });

            var infoWindowContent = `<div class="col">
            <h3><span class="flag-icon flag-icon-${countryFlag}"></span> ${cityName}</h3>
            <h5>${stadiumName}</h5>
            <p>Capacity: ${stadiumCapacity}</p>
        </div>`;

            

             var infoWindow = new google.maps.InfoWindow({
                position: new google.maps.LatLng(cityLat, cityLng),
                content: infoWindowContent
            });
            
            google.maps.event.addListener(marker, 'click', function() {
                activeInfoWindow&&activeInfoWindow.close();
                infoWindow.open(map, marker);
                activeInfoWindow = infoWindow;
              });
            
            

            // marker.addListener('click', function () {
            //     if (!marker.open) {

            //         infowindow.open(map, marker);
            //         marker.open = true
            //     } else {
            //         infowindow.close();
            //         marker.open = false;
            //     }
            // });





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

