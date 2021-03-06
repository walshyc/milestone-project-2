// Function to creat Google Map
function initMap() {
    //Center of map so all 12 cities are shown
    var mapCenter = {
        lat: 50.7436337,
        lng: 18.4208039
    };


    // global variable declarations
    var activeInfoWindow;
    var stadiumCoords = [];
    var foodMarkers = [];
    var atmMarkers = [];
    var barMarkers = [];
    var transportMarkers = [];
    var airports = [];
    var trainStation = [];
    var busStation = [];
    var defaultRadius = 1500;
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: mapCenter
    });
    // Load local JSON file
    $.getJSON('assets/data/cities.json', function (data) {

        // Loop to create the data to create markers
        for (i = 0; i < data.length; i++) {
            stadiumCoords.push([data[i].stadiumLat, data[i].stadiumLng]);
            airports.push(data[i].airport);
            trainStation.push(data[i].train);
            busStation.push(data[i].bus);

        }

        // create variables for each city
        $.each(data, function (key, value) {
            cityName = value.name;
            stadiumName = value.stadium;
            stadiumCapacity = value.capacity;
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


            // create marker for each stadium
            var stadiumMarker = new google.maps.Marker({
                position: new google.maps.LatLng(cityLat, cityLng),
                icon: "assets/img/markers/marker-logo.png",
                map: map,
                title: `${cityName}`
            });


            // Create infowindow & marker for stadium
            var infoWindowContent = `<div class="blue-text">
            <h3><span class="flag-icon flag-icon-${countryFlag}"></span> ${cityName}</h3>
            <h5>${stadiumName}</h5></div>
            `;
            var infoWindow = new google.maps.InfoWindow({
                position: new google.maps.LatLng(cityLat, cityLng),
                content: infoWindowContent
            });

            google.maps.event.addListener(stadiumMarker, 'click', function () {
                activeInfoWindow && activeInfoWindow.close();
                infoWindow.open(map, stadiumMarker);
                activeInfoWindow = infoWindow;
            });

            // create services and city information for both mobile and desktop
            $("#cityInfo").append(`
                    <div id="serviceToggles-${countryFlag}-desktop" class= "city-hide service-toggles service-toggles-desktop" >
                    <div class="card text-white bg-primary pt-2">
                        <div class="row justify-content-center">
                            <div class="col-3 form-check form-check-inline text-center">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="foodRadio-${countryFlag}" value="food">
                                <label class="form-check-label btn p-2 mb-2 btn-small  btn-service" for="foodRadio-${countryFlag}"><i class='material-icons'>local_dining</i><br>Food</label>
                            </div>

                            <div class="col-3 form-check form-check-inline text-center">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="barRadio-${countryFlag}" value="bar">
                                <label class="form-check-label btn p-2 mb-2 btn-small btn-service" for="barRadio-${countryFlag}"><i class='material-icons'>local_drink</i><br>Bars</label>
                            </div>

                            <div class="col-3 form-check form-check-inline text-center">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="hotelRadio-${countryFlag}" value="hotel">
                                <label class="form-check-label btn p-2 mb-2 btn-small btn-service" for="hotelRadio-${countryFlag}"><i class='material-icons'>hotel</i><br>Hotel</label>
                            </div>
                        </div>
                        
                        <div class="row justify-content-center">

                            <div class="col-3  form-check form-check-inline text-center">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="atmRadio-${countryFlag}" value="cash">
                                <label class="form-check-label btn p-2 mb-2 btn-service" for="atmRadio-${countryFlag}"><i class='material-icons'>euro_symbol</i><br>ATM's</label>
                            </div>

                            <div class="col-3  form-check form-check-inline text-center">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="travelRadio-${countryFlag}" value="travel">
                                <label class="form-check-label btn p-2 mb-2 btn-service" for="travelRadio-${countryFlag}"><i class='material-icons'>flight</i><br>Travel</label>
                            </div>

                            <div class="col-3  form-check form-check-inline text-center">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="museumRadio-${countryFlag}" value="museum">
                                <label class="form-check-label btn p-2 mb-2 btn-service" for="museumRadio-${countryFlag}"><i class='material-icons'>place</i><br>Museum</label>
                            </div>
                      </div>
                    </div>
                    </div>  
                                        <div id="city-info-${countryFlag}" class="card text-white bg-primary city-hide">
                                        <div class="row">
                                        <div class="col-9 header-column">
                                                <div class="card-header"><span class="flag-icon flag-icon-${countryFlag}"></span> ${cityName} </div> 
                                        </div>
                                        <div class="col-3 hide-column"> <button type="button" 
                                        class="btn btn-hide hide-button">Hide 
                                </button>
                                        </div>

                                                <div class="card-body info"  >
                                                <h4 class="card-title">${stadiumName}</h4>
                                                <ul>
                                                        <li><span class="list-text">Capacity: ${stadiumCapacity}</span></li>
                                                        <li><span class="list-text">${factOne}</span></li>
                                                        <li><span class="list-text">${factTwo}</span></li>
                                                        <li><span class="list-text">${factThree}</span></li>
                                                        <li><span class="list-text">${factFour}</span></li>
                                                </ul>

                                                <h4 class="card-title">Euro 2020 Games at ${stadiumName}, ${cityName}</h4>
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
                                    </div>
                                    </div>

                                    <div id="serviceToggles-${countryFlag}-mobile" class= "city-hide service-toggles service-toggles-mobile" >
                    <div class="card text-white bg-primary pt-2">
                        <div class="row justify-content-center">
                            <div class="col-3 form-check form-check-inline text-center m-0">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="foodRadio-${countryFlag}" value="food">
                                <label class="form-check-label btn p-2 mb-2 btn-small  btn-service-mobile" for="foodRadio-${countryFlag}"><i class='material-icons'>local_dining</i><br>Food</label>
                            </div>

                            <div class="col-3 form-check form-check-inline text-center m-0">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="barRadio-${countryFlag}" value="bar">
                                <label class="form-check-label btn p-2 mb-2 btn-small btn-service-mobile" for="barRadio-${countryFlag}"><i class='material-icons'>local_drink</i><br>Bars</label>
                            </div>

                            <div class="col-3 form-check form-check-inline text-center m-0">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="hotelRadio-${countryFlag}" value="hotel">
                                <label class="form-check-label btn p-2 mb-2 btn-small btn-service-mobile" for="hotelRadio-${countryFlag}"><i class='material-icons'>hotel</i><br>Hotel</label>
                            </div>
                        </div>
                        
                        <div class="row justify-content-center">

                            <div class="col-3 form-check form-check-inline text-center m-0">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="atmRadio-${countryFlag}" value="cash">
                                <label class="form-check-label btn p-2 mb-2 btn-service-mobile" for="atmRadio-${countryFlag}"><i class='material-icons'>euro_symbol</i><br>ATM's</label>
                            </div>

                            <div class="col-3 form-check form-check-inline text-center m-0">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="travelRadio-${countryFlag}" value="travel">
                                <label class="form-check-label btn p-2 mb-2 btn-service-mobile" for="travelRadio-${countryFlag}"><i class='material-icons'>flight</i><br>Travel</label>
                            </div>

                            <div class="col-3 form-check form-check-inline text-center m-0">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="museumRadio-${countryFlag}" value="museum">
                                <label class="form-check-label btn p-2 mb-2 btn-service-mobile" for="museumRadio-${countryFlag}"><i class='material-icons'>place</i><br>Museum</label>
                            </div>
                      </div>
                    </div>
                    </div>
                                
                                    
                                    
                                    
                                    `);
        });

        // function to zoom the map to a specified location
        function zoomTo(lat, lon, zoom) {
            myLatLng = new google.maps.LatLng(lat, lon);
            map.panTo(myLatLng);
            map.setZoom(zoom);
        }

        // function which deals with the buttons when clicked
        function displayCity() {
            // Allows for city info to be hidden or displayed on mobile
            $(".hide-button").click(function (e) {
                e.preventDefault();
                $(".info").slideToggle('slow');
                if ($(this).text() == 'Show') {
                    $(this).text('Hide');
                } else {
                    $(this).text('Show');
                }

            });
            // Allows for the website to reset back to its original state
            $("#reset-btn").click(function (e) {
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
                $("#reset-btn").text("Click on a city for more information");
                $(".service-toggles").addClass("city-hide");
                $(".info").show();
                zoomTo(50.7436337, 18.4208038, 3);
                deleteMarkers();
            });
            // Amsterdam button 
            $("#ams-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-nl").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#reset-btn").text("View All Cities");
                $("#serviceToggles-nl-mobile").removeClass("city-hide");
                $("#serviceToggles-nl-desktop").removeClass("city-hide");
                zoomTo(stadiumCoords[0][0], stadiumCoords[0][1], 13);
            });
            // Baku button 
            $("#bku-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-az").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#reset-btn").text("View All Cities");
                $("#serviceToggles-az-mobile").removeClass("city-hide");
                $("#serviceToggles-az-desktop").removeClass("city-hide");
                zoomTo(stadiumCoords[1][0], stadiumCoords[1][1], 13);
            });
            // Bilbao button 
            $("#bil-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-es").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#reset-btn").text("View All Cities");
                $("#serviceToggles-es-mobile").removeClass("city-hide");
                $("#serviceToggles-es-desktop").removeClass("city-hide");
                zoomTo(stadiumCoords[2][0], stadiumCoords[2][1], 13);
            });
            // Bucharest button 
            $("#buc-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-ro").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#reset-btn").text("View All Cities");
                $("#serviceToggles-ro-mobile").removeClass("city-hide");
                $("#serviceToggles-ro-desktop").removeClass("city-hide");
                zoomTo(stadiumCoords[3][0], stadiumCoords[3][1], 13);
            });
            // Budapest button 
            $("#bud-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-hu").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#reset-btn").text("View All Cities");
                $("#serviceToggles-hu-mobile").removeClass("city-hide");
                $("#serviceToggles-hu-desktop").removeClass("city-hide");
                zoomTo(stadiumCoords[4][0], stadiumCoords[4][1], 13);
            });
            // Copenhagen button 
            $("#cop-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-dk").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#reset-btn").text("View All Cities");
                $("#serviceToggles-dk-mobile").removeClass("city-hide");
                $("#serviceToggles-dk-desktop").removeClass("city-hide");
                zoomTo(stadiumCoords[5][0], stadiumCoords[5][1], 13);
            });
            // Dublin button 
            $("#dub-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-ie").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#reset-btn").text("View All Cities");
                $("#serviceToggles-ie-mobile").removeClass("city-hide");
                $("#serviceToggles-ie-desktop").removeClass("city-hide");
                zoomTo(stadiumCoords[6][0], stadiumCoords[6][1], 13);
            });
            // Glasgow button 
            $("#gla-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-gb-sct").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#reset-btn").text("View All Cities");
                $("#serviceToggles-gb-sct-mobile").removeClass("city-hide");
                $("#serviceToggles-gb-sct-desktop").removeClass("city-hide");
                zoomTo(stadiumCoords[7][0], stadiumCoords[7][1], 13);
            });
            // London button 
            $("#ldn-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-gb-eng").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#reset-btn").text("View All Cities");
                $("#serviceToggles-gb-eng-mobile").removeClass("city-hide");
                $("#serviceToggles-gb-eng-desktop").removeClass("city-hide");
                zoomTo(stadiumCoords[8][0], stadiumCoords[8][1], 13);
            });
            // Munich button 
            $("#mun-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-de").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#reset-btn").text("View All Cities");
                $("#serviceToggles-de-mobile").removeClass("city-hide");
                $("#serviceToggles-de-desktop").removeClass("city-hide");
                zoomTo(stadiumCoords[9][0], stadiumCoords[9][1], 13);
            });
            // Rome button
            $("#rom-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-it").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#reset-btn").text("View All Cities");
                $("#serviceToggles-it-mobile").removeClass("city-hide");
                $("#serviceToggles-it-desktop").removeClass("city-hide");
                zoomTo(stadiumCoords[10][0], stadiumCoords[10][1], 13);
            });
            // St Petersburg button
            $("#stp-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-ru").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#reset-btn").text("View All Cities");
                $("#serviceToggles-ru-mobile").removeClass("city-hide");
                $("#serviceToggles-ru-desktop").removeClass("city-hide");
                zoomTo(stadiumCoords[11][0], stadiumCoords[11][1], 13);
            });
        }

        displayCity();

        // function which clears the map of any markers
        function deleteMarkers() {
            for (var i = 0; i < foodMarkers.length; i++) {
                foodMarkers[i].setMap(null);
            }
            for (var a = 0; a < atmMarkers.length; a++) {
                atmMarkers[a].setMap(null);
            }
            for (var b = 0; b < transportMarkers.length; b++) {
                transportMarkers[b].setMap(null);
            }
            for (var c = 0; c < barMarkers.length; c++) {
                barMarkers[c].setMap(null);
            }
        }
        // create marker icon
        var icon = {
            url: "assets/img/markers/marker-icon.png",
            scaledSize: new google.maps.Size(20, 30),
        };
        // Function to create markers for restaurants
        function foodMarker(location, radius) {
            var center = new google.maps.LatLng(location[0], location[1]);
            var request = {
                location: center,
                radius: radius,
                types: ["meal_takeaway"]
            };
            var service = new google.maps.places.PlacesService(map);
            service.nearbySearch(request, callback);

            function createMarker(place) {
                marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location,
                    icon: icon,
                    animation: google.maps.Animation.DROP
                });

                var infoWindow = new google.maps.InfoWindow({
                    content: ``
                });
                google.maps.event.addListener(marker, 'click', function () {
                    infoWindow.setContent(`<div class="blue-text"><h5><i class='material-icons blue-text'>local_dining</i> ${place.name}</h5>
                        <h6><a class="blue-text" href="https://www.google.com/maps/search/?api=1&query=${place.name}&query_place_id=${place.place_id}" target="_blank"><i class='material-icons blue-text small-icon'>star_rate</i>Rating: ${place.rating} / 5</a></h6>
                        <h6><a class="blue-text" href="https://www.google.com/maps/dir/?api=1&destination=${place.name}&destination_place_id=${place.place_id}" target="_blank"><i class='material-icons blue-text small-icon'>directions</i>Directions</a></h6></div>`);
                    activeInfoWindow && activeInfoWindow.close();
                    infoWindow.open(map, this);
                    activeInfoWindow = infoWindow;
                });
                foodMarkers.push(marker);
            }

            function callback(results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        createMarker(results[i]);
                    }
                }
            }
        }
        // Function to create markers for Museums
        function museumMarker(location, radius) {
            var center = new google.maps.LatLng(location[0], location[1]);
            var request = {
                location: center,
                radius: radius,
                types: ["museum"]
            };
            var service = new google.maps.places.PlacesService(map);
            service.nearbySearch(request, callback);

            function createMarker(place) {
                marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location,
                    icon: icon,
                    animation: google.maps.Animation.DROP
                });

                var infoWindow = new google.maps.InfoWindow({
                    content: ''
                });

                google.maps.event.addListener(marker, 'click', function () {
                    infoWindow.setContent(`<div class="blue-text"><h5><i class='material-icons blue-text'>place</i> ${place.name}</h5>
                        <h6><a class="blue-text" href="https://www.google.com/maps/search/?api=1&query=${place.name}&query_place_id=${place.place_id}" target="_blank"><i class='material-icons blue-text small-icon'>star_rate</i>Rating: ${place.rating} / 5</a></h6>
                        <h6><a class="blue-text" href="https://www.google.com/maps/dir/?api=1&destination=${place.name}&destination_place_id=${place.place_id}" target="_blank"><i class='material-icons blue-text small-icon'>directions</i>Directions</a></h6></div>`);
                    activeInfoWindow && activeInfoWindow.close();
                    infoWindow.open(map, this);
                    activeInfoWindow = infoWindow;
                });
                atmMarkers.push(marker);
            }

            function callback(results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        createMarker(results[i]);
                    }
                }
            }
        }
        // Function to create markers for hotels
        function hotelMarker(location, radius) {
            var center = new google.maps.LatLng(location[0], location[1]);
            var request = {
                location: center,
                radius: radius,

                types: ["lodging"]
            };
            var service = new google.maps.places.PlacesService(map);
            service.nearbySearch(request, callback);

            function createMarker(place) {
                marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location,
                    icon: icon,
                    animation: google.maps.Animation.DROP
                });

                var infoWindow = new google.maps.InfoWindow({
                    content: ''
                });

                google.maps.event.addListener(marker, 'click', function () {
                    infoWindow.setContent(`<div class="blue-text"><h5><i class='material-icons blue-text'>hotel</i> ${place.name}</h5>
                        <h6><a class="blue-text" href="https://www.google.com/maps/search/?api=1&query=${place.name}&query_place_id=${place.place_id}" target="_blank"><i class='material-icons blue-text small-icon'>star_rate</i>Rating: ${place.rating} / 5</a></h6>
                        <h6><a class="blue-text" href="https://www.google.com/maps/dir/?api=1&destination=${place.name}&destination_place_id=${place.place_id}" target="_blank"><i class='material-icons blue-text small-icon'>directions</i>Directions</a></h6></div>`);
                    activeInfoWindow && activeInfoWindow.close();
                    infoWindow.open(map, this);
                    activeInfoWindow = infoWindow;
                });
                atmMarkers.push(marker);
            }

            function callback(results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        createMarker(results[i]);
                    }
                }
            }
        }
        // Function to create markers for ATM's
        function atmMarker(location, radius) {
            var center = new google.maps.LatLng(location[0], location[1]);
            var request = {
                location: center,
                radius: radius,
                types: ["atm"]
            };
            var service = new google.maps.places.PlacesService(map);
            service.nearbySearch(request, callback);

            function createMarker(place) {
                marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location,
                    icon: icon,
                    animation: google.maps.Animation.DROP
                });

                var infoWindow = new google.maps.InfoWindow({
                    content: ''
                });

                google.maps.event.addListener(marker, 'click', function () {
                    infoWindow.setContent(`<div class="blue-text"><h5><i class='material-icons blue-text'>euro_symbol</i> ${place.name}</h5>
                        <h6><a class="blue-text" href="https://www.google.com/maps/dir/?api=1&destination=${place.name}&destination_place_id=${place.place_id}" target="_blank"><i class='material-icons blue-text small-icon'>directions</i>Directions</a></h6></div>`);
                    activeInfoWindow && activeInfoWindow.close();
                    infoWindow.open(map, this);
                    activeInfoWindow = infoWindow;
                });
                atmMarkers.push(marker);
            }

            function callback(results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        createMarker(results[i]);
                    }


                }
            }
        }
        // Function to create markers for transport hubs
        function transportMarker(airport, train, bus, zoom) {

            var airportRequest = {
                query: airport,
                fields: ['name', 'geometry'],
            };
            var service = new google.maps.places.PlacesService(map);

            service.findPlaceFromQuery(airportRequest, function (results, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    var airIcon = {
                        url: "assets/img/markers/airport-marker.png",
                        scaledSize: new google.maps.Size(20, 30)
                    };
                    for (var i = 0; i < results.length; i++) {
                        createMarker(results[i], airIcon);
                    }
                    map.setZoom(zoom);
                }
            });

            var trainRequest = {
                query: train,
                fields: ['name', 'geometry'],
            };
            service.findPlaceFromQuery(trainRequest, function (results, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        var trainIcon = {
                            url: "assets/img/markers/train-marker.png",
                            scaledSize: new google.maps.Size(20, 30)
                        };
                        createMarker(results[i], trainIcon);
                    }
                    map.setZoom(zoom);

                }
            });

            var busRequest = {
                query: bus,
                fields: ['name', 'geometry'],
            };
            service.findPlaceFromQuery(busRequest, function (results, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        var busIcon = {
                            url: "assets/img/markers/bus-marker.png",
                            scaledSize: new google.maps.Size(20, 30)
                        };
                        createMarker(results[i], busIcon);
                    }
                    map.setZoom(zoom);
                }
            });

            function createMarker(place, icon) {
                marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location,
                    icon: icon,
                    animation: google.maps.Animation.DROP
                });
                var infoWindow = new google.maps.InfoWindow({
                    content: ''
                });
                google.maps.event.addListener(marker, 'click', function () {
                    infoWindow.setContent(`<div class="blue-text"><h5>${place.name}</h5>
                            <h6><a class="blue-text" href="https://www.google.com/maps/dir/?api=1&destination=${place.name}" target="_blank"><i class='material-icons blue-text small-icon'>directions</i>Directions</a></h6></div>`);
                    activeInfoWindow && activeInfoWindow.close();
                    infoWindow.open(map, this);
                    activeInfoWindow = infoWindow;
                });


                transportMarkers.push(marker);

            }

        }

        // Function to create markers for bars
        function barMarker(location, radius) {
            var center = new google.maps.LatLng(location[0], location[1]);
            var request = {
                location: center,
                radius: radius,
                types: ["bar"]
            };
            var service = new google.maps.places.PlacesService(map);
            service.nearbySearch(request, callback);

            function createMarker(place) {
                marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location,
                    icon: icon,
                    animation: google.maps.Animation.DROP
                });
                var infoWindow = new google.maps.InfoWindow({
                    content: ''
                });
                google.maps.event.addListener(marker, 'click', function () {
                    infoWindow.setContent(`<div class="blue-text"><h5><i class='material-icons blue-text'>local_drink</i> ${place.name}</h5>
                        <h6><a class="blue-text" href="https://www.google.com/maps/search/?api=1&query=${place.name}&query_place_id=${place.place_id}" target="_blank"><i class='material-icons blue-text small-icon'>star_rate</i>Rating: ${place.rating} / 5</a></h6>
                        <h6><a class="blue-text" href="https://www.google.com/maps/dir/?api=1&destination=${place.name}&destination_place_id=${place.place_id}" target="_blank"><i class='material-icons blue-text small-icon'>directions</i>Directions</a></h6></div>`);
                    activeInfoWindow && activeInfoWindow.close();
                    infoWindow.open(map, this);
                    activeInfoWindow = infoWindow;
                });
                barMarkers.push(marker);
            }

            function callback(results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        createMarker(results[i]);
                    }
                }
            }
        }

        // Amsterdam Buttons
        $("#foodRadio-nl").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[0][0], stadiumCoords[0][1], 14);
            foodMarker(stadiumCoords[0], defaultRadius);
        });

        $("#barRadio-nl").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[0][0], stadiumCoords[0][1], 14);
            barMarker(stadiumCoords[0], defaultRadius);
        });

        $("#hotelRadio-nl").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[0][0], stadiumCoords[0][1], 14);
            hotelMarker(stadiumCoords[0], defaultRadius);
        });

        $("#atmRadio-nl").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[0][0], stadiumCoords[0][1], 14);
            atmMarker(stadiumCoords[0], defaultRadius);
        });

        $("#travelRadio-nl").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            transportMarker(airports[0], trainStation[0], busStation[0], 10);
        });

        $("#museumRadio-nl").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[0][0], stadiumCoords[0][1], 12);
            museumMarker(stadiumCoords[0], 5000);
        });

        // Baku Buttons
        $("#foodRadio-az").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[1][0], stadiumCoords[1][1], 12);
            foodMarker(stadiumCoords[1], 10000);
        });

        $("#barRadio-az").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[1][0], stadiumCoords[1][1], 13);
            barMarker(stadiumCoords[1], 7500);
        });

        $("#hotelRadio-az").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[1][0], stadiumCoords[1][1], 13);
            hotelMarker(stadiumCoords[1], 5000);
        });

        $("#atmRadio-az").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[1][0], stadiumCoords[1][1], 13);
            atmMarker(stadiumCoords[1], defaultRadius);
        });

        $("#travelRadio-az").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            transportMarker(airports[1], trainStation[1], busStation[1], 10);
        });

        $("#museumRadio-az").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[1][0], stadiumCoords[1][1], 12);
            museumMarker(stadiumCoords[1], 5000);
        });

        // Bilbao Buttons
        $("#foodRadio-es").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[2][0], stadiumCoords[2][1], 14);
            foodMarker(stadiumCoords[2], defaultRadius);
        });

        $("#barRadio-es").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[2][0], stadiumCoords[2][1], 14);
            barMarker(stadiumCoords[2], defaultRadius);
        });

        $("#hotelRadio-es").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[2][0], stadiumCoords[2][1], 14);
            hotelMarker(stadiumCoords[2], defaultRadius);
        });

        $("#atmRadio-es").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            mzoomTo(stadiumCoords[2][0], stadiumCoords[2][1], 14);
            atmMarker(stadiumCoords[2], defaultRadius);
        });

        $("#travelRadio-es").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            transportMarker(airports[2], trainStation[2], busStation[2], 12);
        });

        $("#museumRadio-es").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[2][0], stadiumCoords[2][1], 12);
            museumMarker(stadiumCoords[2], 5000);
        });

        // Bucharest Buttons
        $("#foodRadio-ro").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[3][0], stadiumCoords[3][1], 14);
            foodMarker(stadiumCoords[3], defaultRadius);
        });

        $("#barRadio-ro").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[3][0], stadiumCoords[3][1], 14);
            barMarker(stadiumCoords[3], defaultRadius);
        });

        $("#hotelRadio-ro").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[3][0], stadiumCoords[3][1], 14);
            hotelMarker(stadiumCoords[3], defaultRadius);
        });

        $("#atmRadio-ro").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[3][0], stadiumCoords[3][1], 14);
            atmMarker(stadiumCoords[3], defaultRadius);
        });

        $("#travelRadio-ro").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            transportMarker(airports[3], trainStation[3], busStation[3], 11);
        });

        $("#museumRadio-ro").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[3][0], stadiumCoords[3][1], 13);
            museumMarker(stadiumCoords[3], 5000);
        });

        // Budapest Buttons
        $("#foodRadio-hu").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[4][0], stadiumCoords[4][1], 14);
            foodMarker(stadiumCoords[4], defaultRadius);
        });

        $("#barRadio-hu").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[4][0], stadiumCoords[4][1], 14);
            barMarker(stadiumCoords[4], defaultRadius);
        });

        $("#hotelRadio-hu").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[4][0], stadiumCoords[4][1], 14);
            hotelMarker(stadiumCoords[4], defaultRadius);
        });

        $("#atmRadio-hu").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[4][0], stadiumCoords[4][1], 14);
            atmMarker(stadiumCoords[4], defaultRadius);
        });

        $("#travelRadio-hu").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            transportMarker(airports[4], trainStation[4], busStation[4], 10);
        });

        $("#museumRadio-hu").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[4][0], stadiumCoords[4][1], 13);
            museumMarker(stadiumCoords[4], 5000);
        });

        // Copenhagen Buttons
        $("#foodRadio-dk").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[5][0], stadiumCoords[5][1], 14);
            foodMarker(stadiumCoords[5], defaultRadius);
        });

        $("#barRadio-dk").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[5][0], stadiumCoords[5][1], 14);
            barMarker(stadiumCoords[5], defaultRadius);
        });

        $("#hotelRadio-dk").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[5][0], stadiumCoords[5][1], 14);
            hotelMarker(stadiumCoords[5], defaultRadius);
        });

        $("#atmRadio-dk").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[5][0], stadiumCoords[5][1], 14);
            atmMarker(stadiumCoords[5], defaultRadius);
        });

        $("#travelRadio-dk").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            transportMarker(airports[5], trainStation[5], busStation[5], 11);
        });

        $("#museumRadio-dk").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[5][0], stadiumCoords[5][1], 13);
            museumMarker(stadiumCoords[5], 5000);
        });


        // Dublin Buttons
        $("#foodRadio-ie").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[6][0], stadiumCoords[6][1], 14);
            foodMarker(stadiumCoords[6], defaultRadius);
        });

        $("#barRadio-ie").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[6][0], stadiumCoords[6][1], 14);
            barMarker(stadiumCoords[6], defaultRadius);
        });

        $("#hotelRadio-ie").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[6][0], stadiumCoords[6][1], 14);
            hotelMarker(stadiumCoords[6], defaultRadius);
        });

        $("#atmRadio-ie").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[6][0], stadiumCoords[6][1], 14);
            atmMarker(stadiumCoords[6], defaultRadius);
        });

        $("#travelRadio-ie").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            transportMarker(airports[6], trainStation[6], busStation[6], 11);
        });

        $("#museumRadio-ie").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[6][0], stadiumCoords[6][1], 13);
            museumMarker(stadiumCoords[6], 5000);
        });

        // Glasgow Buttons
        $("#foodRadio-gb-sct").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[7][0], stadiumCoords[7][1], 14);
            foodMarker(stadiumCoords[7], defaultRadius);
        });

        $("#barRadio-gb-sct").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[7][0], stadiumCoords[7][1], 14);
            barMarker(stadiumCoords[7], defaultRadius);
        });

        $("#hotelRadio-gb-sct").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[7][0], stadiumCoords[7][1], 14);
            hotelMarker(stadiumCoords[7], defaultRadius);
        });

        $("#atmRadio-gb-sct").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[7][0], stadiumCoords[7][1], 14);
            atmMarker(stadiumCoords[7], defaultRadius);
        });

        $("#travelRadio-gb-sct").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            transportMarker(airports[7], trainStation[7], busStation[7], 10);
        });

        $("#museumRadio-gb-sct").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[7][0], stadiumCoords[7][1], 13);
            museumMarker(stadiumCoords[7], 5000);
        });

        // London Buttons
        $("#foodRadio-gb-eng").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[8][0], stadiumCoords[8][1], 14);
            foodMarker(stadiumCoords[8], defaultRadius);
        });

        $("#barRadio-gb-eng").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[8][0], stadiumCoords[8][1], 14);
            barMarker(stadiumCoords[8], defaultRadius);
        });

        $("#hotelRadio-gb-eng").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[8][0], stadiumCoords[8][1], 14);
            hotelMarker(stadiumCoords[8], defaultRadius);
        });

        $("#atmRadio-gb-eng").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[8][0], stadiumCoords[8][1], 14);
            atmMarker(stadiumCoords[8], defaultRadius);
        });

        $("#travelRadio-gb-eng").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            transportMarker(airports[8], trainStation[8], busStation[8], 10);
        });

        $("#museumRadio-gb-eng").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[8][0], stadiumCoords[8][1], 13);
            museumMarker(stadiumCoords[8], 5000);
        });

        // Munich Buttons
        $("#foodRadio-de").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[9][0], stadiumCoords[9][1], 13);
            foodMarker(stadiumCoords[9], 4000);
        });

        $("#barRadio-de").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[9][0], stadiumCoords[9][1], 13);
            barMarker(stadiumCoords[9], 3000);
        });

        $("#hotelRadio-de").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[9][0], stadiumCoords[9][1], 13);
            hotelMarker(stadiumCoords[9], 4000);
        });

        $("#atmRadio-de").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[9][0], stadiumCoords[9][1], 13);
            atmMarker(stadiumCoords[9], 3000);
        });

        $("#travelRadio-de").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            transportMarker(airports[9], trainStation[9], busStation[9], 10);
        });

        $("#museumRadio-de").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[9][0], stadiumCoords[9][1], 12);
            museumMarker(stadiumCoords[9], 10000);
        });

        // Rome Buttons
        $("#foodRadio-it").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[10][0], stadiumCoords[10][1], 14);
            foodMarker(stadiumCoords[10], defaultRadius);
        });

        $("#barRadio-it").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[10][0], stadiumCoords[10][1], 14);
            barMarker(stadiumCoords[10], defaultRadius);
        });

        $("#hotelRadio-it").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[10][0], stadiumCoords[10][1], 14);
            hotelMarker(stadiumCoords[10], defaultRadius);
        });

        $("#atmRadio-it").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[10][0], stadiumCoords[10][1], 14);
            atmMarker(stadiumCoords[10], defaultRadius);
        });

        $("#travelRadio-it").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            transportMarker(airports[10], trainStation[10], busStation[10], 10);
        });

        $("#museumRadio-it").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[10][0], stadiumCoords[10][1], 13);
            museumMarker(stadiumCoords[10], 5000);
        });

        // St. Petersburg Buttons
        $("#foodRadio-ru").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[11][0], stadiumCoords[11][1], 13);
            foodMarker(stadiumCoords[11], 3000);
        });

        $("#barRadio-ru").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[11][0], stadiumCoords[11][1], 13);
            barMarker(stadiumCoords[11], 3000);
        });

        $("#hotelRadio-ru").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[11][0], stadiumCoords[11][1], 14);
            hotelMarker(stadiumCoords[11], defaultRadius);
        });

        $("#atmRadio-ru").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[11][0], stadiumCoords[11][1], 14);
            atmMarker(stadiumCoords[11], defaultRadius);
        });

        $("#travelRadio-ru").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            transportMarker(airports[11], trainStation[11], busStation[11], 10);
        });

        $("#museumRadio-ru").change(function (e) {
            e.preventDefault();
            deleteMarkers();
            zoomTo(stadiumCoords[11][0], stadiumCoords[11][1], 12);
            museumMarker(stadiumCoords[11], 10000);
        });
    });
}