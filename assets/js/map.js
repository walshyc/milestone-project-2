function initMap() {
    var mapCenter = { lat: 50.7436337, lng: 18.4208038 };
    var activeInfoWindow;

    var map = new google.maps.Map(document.getElementById('map'), { zoom: 3, center: mapCenter });
    $.getJSON('assets/data/cities.json', function (data) {


        $.each(data, function (key, value) {
            console.log(value.name);
            console.log(value.facts[0].one);
            cityName = value.name;
            stadiumName = value.stadium;
            stadiumCapacity = value.capacity
            cityLat = value.stadiumLat;
            cityLng = value.stadiumLng;
            countryFlag = value.flagIcon;
            countryName = value.country;
            factOne = value.facts[0].one;
            factTwo = value.facts[0].two;
            factThree = value.facts[0].three;
            factFour = value.facts[0].four;
            gameOne = value.games[0].one;
            gameTwo = value.games[0].two;
            gameThree = value.games[0].three;
            gameFour = value.games[0].four;




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

            google.maps.event.addListener(marker, 'click', function () {
                activeInfoWindow && activeInfoWindow.close();
                infoWindow.open(map, marker);
                activeInfoWindow = infoWindow;
            });


            $("#cityInfo").append(`<div id="city-info-${countryFlag}" class="card text-white bg-primary city-hide">
              <div class="card-header"><span class="flag-icon flag-icon-${countryFlag}"></span> ${countryName} - ${cityName}</div>
              <div class="card-body">
                      <h4 class="card-title">${stadiumName}</h4>
                      <ul>
                              <li><span class="list-text">Capacity: ${stadiumCapacity}</span></li>
                              <li><span class="list-text">${factOne}</span></li>
                              <li><span class="list-text">${factTwo}</span></li>
                              <li><span class="list-text">${factThree}</span></li>
                              <li><span class="list-text">${factFour}</span></li>                     
                      </ul>

                      <h4 class="card-title">Euro 2020 Games</h4>
                      <ul>
                              <li><span class="list-text">${gameOne}</span></li>
                              <li><span class="list-text">${gameTwo}</span></li>
                              <li><span class="list-text">${gameThree}</span></li>
                              <li><span class="list-text">${gameFour}</span></li>
                                                
                      </ul>

                      
                      
              </div>
      </div>`);


            



        });
        function displayCity() {

            $("#resetBtn").click(function (e) { 
                e.preventDefault();
                $("#buttons-container").show();
                $("#city-info-nl").addClass("city-hide");
                $("#city-info-az").addClass("city-hide");
                $("#city-info-es").addClass("city-hide");
                $("#city-info-ro").addClass("city-hide");
                $("#city-info-hu").addClass("city-hide");
                $("#city-info-dk").addClass("city-hide");
                $("#city-info-ie").addClass("city-hide");
                $("#city-info-gb-sct").addClass("city-hide");
                $("#city-info-gb-eng").addClass("city-hide");
                $("#city-info-de").addClass("city-hide");
                $("#city-info-it").addClass("city-hide");
                $("#city-info-ru").addClass("city-hide");
                $("#map").removeClass("col-lg-8 col-xs-12");
                $("#cityInfo").removeClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("Select a City");
            });

            $("#ams-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-nl").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
            })

            $("#bku-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-az").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
            })

            $("#bil-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-es").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
            })

            $("#buc-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-ro").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
            })

            $("#bud-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-hu").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
            })

            $("#cop-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-dk").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
            })

            $("#dub-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-ie").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
            })

            $("#gla-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-gb-sct").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
            })

            $("#ldn-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-gb-eng").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
            })

            $("#mun-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-de").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
            })

            $("#rom-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-it").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
            })

            $("#stp-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-ru").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
            })
        }

        displayCity();

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

