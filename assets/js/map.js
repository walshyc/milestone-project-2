function initMap() {
    var mapCenter = { lat: 50.7436337, lng: 18.4208038 };
    var amsterdam = new google.maps.LatLng(52.3143691,4.9417);
    var activeInfoWindow;
    var facts = [];

    var map = new google.maps.Map(document.getElementById('map'), { zoom: 3, center: mapCenter });
   
    var request = {
        location: amsterdam,
        radius: 10000,
        types: ['hotel']
    };

    var service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, callback)

    function callback(results, status){
        if(status == google.maps.places.PlacesServiceStatus.OK){
            for (var i = 0; i<results.length; i++) {
                createMarker(results[i]);
            }

           
        }
    }
        

    
    $.getJSON('assets/data/cities.json', function (data) {



        for (i = 0; i < data.length; i++) {
            facts.push(data[i].facts);
        }

        console.log(facts);

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
            gameFive = value.games[0].five;
            gameSix = value.games[0].six;
            gameSeven = value.games[0].seven;



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

            marker.addListener('click', function () {
                map.setZoom(12);
                map.setCenter(marker.getPosition());
                infoWindow.close();

            });


            $("#cityInfo")
                    
                            .append(`<div id="city-info-${countryFlag}" class="card text-white bg-primary city-hide">
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

                                    <h4 class="card-title">Euro 2020 Games at <br> ${stadiumName}, ${cityName}</h4>
                                    <ul>
                                            <li><span class="list-text">${gameOne}</span></li>
                                            <li><span class="list-text">${gameTwo}</span></li>
                                            <li><span class="list-text">${gameThree}</span></li>
                                            <li><span class="list-text">${gameFour}</span></li>
                                            ${(gameFive != undefined) ? "<li><span class='list-text'>" + gameFive + "</span></li>" : ""}
                                            ${(gameSix != undefined) ? "<li><span class='list-text'>" + gameSix + "</span></li>" : ""}  
                                            ${(gameSeven != undefined) ? "<li><span class='list-text'>" + gameSeven + "</span></li>" : ""}            
                                    </ul>

                            
                            
                                    </div>
                                    </div>`);
        });


        function zoomTo(lat, lon, zoom) {
            myLatLng = new google.maps.LatLng(lat, lon)
            map.panTo(myLatLng);
            map.setZoom(zoom);
        }


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
                zoomTo(50.7436337, 18.4208038, 3);
            });

            $("#ams-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-nl").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
                $("#serviceBtns").removeClass("city-hide");
                zoomTo(52.3680, 4.9036, 12);

                
            })

            $("#bku-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-az").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
                zoomTo(40.4093, 49.8671, 12);
            })

            $("#bil-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-es").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
                zoomTo(43.2630, -2.9350, 14);
            })

            $("#buc-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-ro").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
                zoomTo(44.4268, 26.1025, 12);
            })

            $("#bud-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-hu").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
                zoomTo(47.4979, 19.0402, 12);
            })

            $("#cop-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-dk").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
                zoomTo(55.6761, 12.5683, 13);
            })

            $("#dub-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-ie").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
                zoomTo(53.3498, -6.2603, 13);
            })

            $("#gla-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-gb-sct").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
                zoomTo(55.8595, -4.2518, 12);
            })

            $("#ldn-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-gb-eng").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
                zoomTo(51.5080123, -0.129448, 10);
            })

            $("#mun-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-de").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
                zoomTo(48.1461, 11.5820, 11);
            })

            $("#rom-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-it").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
                zoomTo(41.9028, 12.4964, 12);
            })

            $("#stp-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-ru").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
                zoomTo(59.9343, 30.3351, 11);
            })
        }

        displayCity();

        
        }
        
        


    );
}


