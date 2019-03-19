function initMap() {
    var mapCenter = {
        lat: 50.7436337,
        lng: 18.4208039
    };
    var amsterdam = new google.maps.LatLng(52.3143691, 4.9417);
    var activeInfoWindow;
    var stadiumCoords = [];
    var foodMarkers = [];
    var atmMarkers = [];
    var barMarkers = [];
    var transportMarkers = [];
    var airports = [];
    var trainStation = [];
    var busStation = [];





    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: mapCenter
    });





    $.getJSON('assets/data/cities.json', function (data) {


            for (i = 0; i < data.length; i++) {
                stadiumCoords.push([data[i].stadiumLat, data[i].stadiumLng]);
                airports.push(data[i].airport);
                trainStation.push(data[i].train);
                busStation.push(data[i].bus);

                console.log(airports[0]);
            }

            console.log(stadiumCoords);

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



                var stadiumMarker = new google.maps.Marker({
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

                google.maps.event.addListener(stadiumMarker, 'click', function () {
                    activeInfoWindow && activeInfoWindow.close();
                    infoWindow.open(map, stadiumMarker);
                    activeInfoWindow = infoWindow;
                });

                // stadiumMarker.addListener('click', function () {
                //     map.setZoom(12);
                //     map.setCenter(stadiumMarker.getPosition());
                //     infoWindow.close();

                // });


                $("#cityInfo")

                    .append(`

                                        <div id="city-info-${countryFlag}" class="card text-white bg-primary city-hide">
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
                                    </div>

                                    <div id="serviceToggles-${countryFlag}" class= "city-hide service-toggles" >
                                    <div class="card text-white bg-primary pt-2">
                                        <div class="row justify-content-center">
                                            <div class="col-3 m-0 mb-2 p-0 form-check form-check-inline text-center">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="foodRadio-${countryFlag}" value="food">
                                                <label class="form-check-label" for="foodRadio-${countryFlag}"><i class='material-icons'>local_dining</i> Food</label>
                                            </div>

                                            <div class="col-3 m-0 mb-2 p-0 form-check form-check-inline text-center">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="barRadio-${countryFlag}" value="bar">
                                                <label class="form-check-label" for="barRadio-${countryFlag}"><i class='material-icons'>local_drink</i> Bars</label>
                                            </div>

                                            <div class="col-3 m-0 mb-2 p-0 form-check form-check-inline text-center">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="hotelRadio-${countryFlag}" value="hotel">
                                                <label class="form-check-label" for="hotelRadio-${countryFlag}"><i class='material-icons'>hotel</i> Hotel</label>
                                            </div>
                                        </div>
                                        <div class="row justify-content-center">

                                            <div class="col-3 m-0 mb-2 p-0 form-check form-check-inline text-center">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="atmRadio-${countryFlag}" value="cash">
                                                <label class="form-check-label" for="atmRadio-${countryFlag}"><i class='material-icons'>euro_symbol</i> ATM's</label>
                                            </div>

                                            <div class="col-3 m-0 mb-2 p-0 form-check form-check-inline text-center">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="travelRadio-${countryFlag}" value="travel">
                                                <label class="form-check-label" for="travelRadio-${countryFlag}"><i class='material-icons'>flight</i> Travel</label>
                                            </div>

                                            <div class="col-3 m-0 mb-2 p-0 form-check form-check-inline text-center">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="museumRadio-${countryFlag}" value="museum">
                                                <label class="form-check-label" for="museumRadio-${countryFlag}"><i class='material-icons'>place</i> Museum</label>
                                            </div>
                                      </div>
                                    </div>
                                    </div>  
                                    
                                    
                                    
                                    `);
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
                    $("#serviceBtns-nl").addClass("city-hide");
                    $("#city-info-az").addClass("city-hide");
                    $("#serviceBtns-az").addClass("city-hide");
                    $("#city-info-es").addClass("city-hide");
                    $("#serviceBtns-es").addClass("city-hide");
                    $("#city-info-ro").addClass("city-hide");
                    $("#serviceBtns-ro").addClass("city-hide");
                    $("#city-info-hu").addClass("city-hide");
                    $("#serviceBtns-hu").addClass("city-hide");
                    $("#city-info-dk").addClass("city-hide");
                    $("#serviceBtns-dk").addClass("city-hide");
                    $("#city-info-ie").addClass("city-hide");
                    $("#serviceBtns-ie").addClass("city-hide");
                    $("#city-info-gb-sct").addClass("city-hide");
                    $("#serviceBtns-gb-sct").addClass("city-hide");
                    $("#city-info-gb-eng").addClass("city-hide");
                    $("#serviceBtns-gb-eng").addClass("city-hide");
                    $("#city-info-de").addClass("city-hide");
                    $("#serviceBtns-de").addClass("city-hide");
                    $("#city-info-it").addClass("city-hide");
                    $("#serviceBtns-it").addClass("city-hide");
                    $("#city-info-ru").addClass("city-hide");
                    $("#serviceBtns-ru").addClass("city-hide");
                    $("#map").removeClass("col-lg-8 col-xs-12");
                    $("#cityInfo").removeClass("col-lg-4 col-xs-12");
                    $("#resetBtn").text("Select a City");
                    zoomTo(50.7436337, 18.4208038, 3);
                    deleteMarkers();
                });

                $("#ams-btn").click(function (e) {
                    e.preventDefault();
                    $("#buttons-container").hide();
                    $("#city-info-nl").removeClass("city-hide");
                    $("#map").addClass("col-lg-8 col-xs-12");
                    $("#cityInfo").addClass("col-lg-4 col-xs-12");
                    $("#resetBtn").text("View All Cities");
                    $("#serviceBtns-nl").removeClass("city-hide");
                    $("#serviceToggles-nl").removeClass("city-hide");
                    zoomTo(stadiumCoords[0][0], stadiumCoords[0][1], 13);


                })

                $("#bku-btn").click(function (e) {
                    e.preventDefault();
                    $("#buttons-container").hide();
                    $("#city-info-az").removeClass("city-hide");
                    $("#map").addClass("col-lg-8 col-xs-12");
                    $("#cityInfo").addClass("col-lg-4 col-xs-12");
                    $("#resetBtn").text("View All Cities");
                    $("#serviceBtns-az").removeClass("city-hide");
                    zoomTo(stadiumCoords[1][0], stadiumCoords[1][1], 13);
                })

                $("#bil-btn").click(function (e) {
                    e.preventDefault();
                    $("#buttons-container").hide();
                    $("#city-info-es").removeClass("city-hide");
                    $("#map").addClass("col-lg-8 col-xs-12");
                    $("#cityInfo").addClass("col-lg-4 col-xs-12");
                    $("#resetBtn").text("View All Cities");
                    $("#serviceBtns-es").removeClass("city-hide");
                    zoomTo(stadiumCoords[2][0], stadiumCoords[2][1], 13);
                })

                $("#buc-btn").click(function (e) {
                    e.preventDefault();
                    $("#buttons-container").hide();
                    $("#city-info-ro").removeClass("city-hide");
                    $("#map").addClass("col-lg-8 col-xs-12");
                    $("#cityInfo").addClass("col-lg-4 col-xs-12");
                    $("#resetBtn").text("View All Cities");
                    $("#serviceBtns-ro").removeClass("city-hide");
                    zoomTo(stadiumCoords[3][0], stadiumCoords[3][1], 13);
                })

                $("#bud-btn").click(function (e) {
                    e.preventDefault();
                    $("#buttons-container").hide();
                    $("#city-info-hu").removeClass("city-hide");
                    $("#map").addClass("col-lg-8 col-xs-12");
                    $("#cityInfo").addClass("col-lg-4 col-xs-12");
                    $("#resetBtn").text("View All Cities");
                    $("#serviceBtns-hu").removeClass("city-hide");
                    zoomTo(stadiumCoords[4][0], stadiumCoords[4][1], 13);
                })

                $("#cop-btn").click(function (e) {
                    e.preventDefault();
                    $("#buttons-container").hide();
                    $("#city-info-dk").removeClass("city-hide");
                    $("#map").addClass("col-lg-8 col-xs-12");
                    $("#cityInfo").addClass("col-lg-4 col-xs-12");
                    $("#resetBtn").text("View All Cities");
                    $("#serviceBtns-dk").removeClass("city-hide");
                    zoomTo(stadiumCoords[5][0], stadiumCoords[5][1], 13);
                })

                $("#dub-btn").click(function (e) {
                    e.preventDefault();
                    $("#buttons-container").hide();
                    $("#city-info-ie").removeClass("city-hide");
                    $("#map").addClass("col-lg-8 col-xs-12");
                    $("#cityInfo").addClass("col-lg-4 col-xs-12");
                    $("#resetBtn").text("View All Cities");
                    $("#serviceBtns-ie").removeClass("city-hide");
                    zoomTo(stadiumCoords[6][0], stadiumCoords[6][1], 13);
                })

                $("#gla-btn").click(function (e) {
                    e.preventDefault();
                    $("#buttons-container").hide();
                    $("#city-info-gb-sct").removeClass("city-hide");
                    $("#map").addClass("col-lg-8 col-xs-12");
                    $("#cityInfo").addClass("col-lg-4 col-xs-12");
                    $("#resetBtn").text("View All Cities");
                    $("#serviceBtns-gb-sct").removeClass("city-hide");
                    zoomTo(stadiumCoords[7][0], stadiumCoords[7][1], 13);
                })

                $("#ldn-btn").click(function (e) {
                    e.preventDefault();
                    $("#buttons-container").hide();
                    $("#city-info-gb-eng").removeClass("city-hide");
                    $("#map").addClass("col-lg-8 col-xs-12");
                    $("#cityInfo").addClass("col-lg-4 col-xs-12");
                    $("#resetBtn").text("View All Cities");
                    $("#serviceBtns-gb-eng").removeClass("city-hide");
                    zoomTo(stadiumCoords[8][0], stadiumCoords[8][1], 13);
                })

                $("#mun-btn").click(function (e) {
                    e.preventDefault();
                    $("#buttons-container").hide();
                    $("#city-info-de").removeClass("city-hide");
                    $("#map").addClass("col-lg-8 col-xs-12");
                    $("#cityInfo").addClass("col-lg-4 col-xs-12");
                    $("#resetBtn").text("View All Cities");
                    $("#serviceBtns-de").removeClass("city-hide");
                    zoomTo(stadiumCoords[9][0], stadiumCoords[9][1], 13);
                })

                $("#rom-btn").click(function (e) {
                    e.preventDefault();
                    $("#buttons-container").hide();
                    $("#city-info-it").removeClass("city-hide");
                    $("#map").addClass("col-lg-8 col-xs-12");
                    $("#cityInfo").addClass("col-lg-4 col-xs-12");
                    $("#resetBtn").text("View All Cities");
                    $("#serviceBtns-it").removeClass("city-hide");
                    zoomTo(stadiumCoords[10][0], stadiumCoords[10][1], 13);
                })

                $("#stp-btn").click(function (e) {
                    e.preventDefault();
                    $("#buttons-container").hide();
                    $("#city-info-ru").removeClass("city-hide");
                    $("#map").addClass("col-lg-8 col-xs-12");
                    $("#cityInfo").addClass("col-lg-4 col-xs-12");
                    $("#resetBtn").text("View All Cities");
                    $("#serviceBtns-ru").removeClass("city-hide");
                    zoomTo(stadiumCoords[11][0], stadiumCoords[11][1], 13);
                })
            }

            displayCity();

            function deleteMarkers() {



                for (var i = 0; i < foodMarkers.length; i++) {
                    foodMarkers[i].setMap(null);

                }
                for (var i = 0; i < atmMarkers.length; i++) {
                    atmMarkers[i].setMap(null);
                }
                for (var i = 0; i < transportMarkers.length; i++) {
                    transportMarkers[i].setMap(null);
                }
                for (var i = 0; i < barMarkers.length; i++) {
                    barMarkers[i].setMap(null);
                }


            }

            function foodMarker(location) {
                var center = new google.maps.LatLng(location[0], location[1]);
                var request = {
                    location: center,
                    radius: 1500,
                    types: ["meal_takeaway"]
                };
                var service = new google.maps.places.PlacesService(map);
                service.nearbySearch(request, callback)

                function createMarker(place) {

                    var foodIcon = {
                        url: "assets/img/markers/food.png",
                        scaledSize: new google.maps.Size(20, 20),
                    };
                    marker = new google.maps.Marker({
                        map: map,
                        position: place.geometry.location,
                        icon: foodIcon,
                        animation: google.maps.Animation.DROP
                    });

                    var infoWindow = new google.maps.InfoWindow({
                        content: ``
                    });

                    console.log(place.photos[0].html_attributions[0])

                    google.maps.event.addListener(marker, 'click', function () {
                        infoWindow.setContent(`${place.name} <br>${(place.opening_hours = true) ? "Open Now!" : "Closed"}
                        <br>
                        Rating: ${place.rating} / 5
                        <br>
                        <a href="https://www.google.com/maps/search/?api=1&query=${place.name}&query_place_id=${place.place_id}" target="_blank">View more info</a> ` );
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

            function museumMarker(location) {
                var center = new google.maps.LatLng(location[0], location[1]);
                var request = {
                    location: center,
                    radius: 5000,
                    types: ["museum"]
                };
                var service = new google.maps.places.PlacesService(map);
                service.nearbySearch(request, callback)

                function createMarker(place) {
                    var museumIcon = {
                        url: "assets/img/markers/museum.png",
                        scaledSize: new google.maps.Size(20, 20),
                    };

                    marker = new google.maps.Marker({
                        map: map,
                        position: place.geometry.location,
                        icon: museumIcon,
                        animation: google.maps.Animation.DROP
                    });

                    var infoWindow = new google.maps.InfoWindow({
                        content: ''
                    });

                    google.maps.event.addListener(marker, 'click', function () {
                        infoWindow.setContent(place.name);
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

            function hotelMarker(location) {
                var center = new google.maps.LatLng(location[0], location[1]);
                var request = {
                    location: center,
                    radius: 1500,

                    types: ["lodging"]
                };
                var service = new google.maps.places.PlacesService(map);
                service.nearbySearch(request, callback)

                function createMarker(place) {
                    var hotelIcon = {
                        url: "assets/img/markers/hotel.png",
                        scaledSize: new google.maps.Size(20, 20),
                    };

                    marker = new google.maps.Marker({
                        map: map,
                        position: place.geometry.location,
                        icon: hotelIcon,
                        animation: google.maps.Animation.DROP
                    });

                    var infoWindow = new google.maps.InfoWindow({
                        content: ''
                    });

                    google.maps.event.addListener(marker, 'click', function () {
                        infoWindow.setContent(place.name);
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


            function atmMarker(location) {
                var center = new google.maps.LatLng(location[0], location[1]);
                var request = {
                    location: center,
                    radius: 1500,
                    types: ["atm"]
                };
                var service = new google.maps.places.PlacesService(map);
                service.nearbySearch(request, callback)

                function createMarker(place) {
                    var atmIcon = {
                        url: "assets/img/markers/atm.png",
                        scaledSize: new google.maps.Size(20, 20),
                    };

                    marker = new google.maps.Marker({
                        map: map,
                        position: place.geometry.location,
                        icon: atmIcon,
                        animation: google.maps.Animation.DROP
                    });

                    var infoWindow = new google.maps.InfoWindow({
                        content: ''
                    });

                    google.maps.event.addListener(marker, 'click', function () {
                        infoWindow.setContent(place.name);
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

            function transportMarker(airport, train, bus) {

                var airportRequest = {
                    query: airport,
                    fields: ['name', 'geometry'],
                };
                var service = new google.maps.places.PlacesService(map);


                service.findPlaceFromQuery(airportRequest, function (results, status) {
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        var airIcon = {
                            url: "assets/img/markers/airport.png",
                            scaledSize: new google.maps.Size(30, 30)
                        };
                        for (var i = 0; i < results.length; i++) {
                            createMarker(results[i], airIcon);
                        }
                        map.setZoom(10);
                    }
                });

                var trainRequest = {
                    query: train,
                    fields: ['name', 'geometry'],
                };
                var service = new google.maps.places.PlacesService(map);


                service.findPlaceFromQuery(trainRequest, function (results, status) {
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        for (var i = 0; i < results.length; i++) {
                            var trainIcon = {
                                url: "assets/img/markers/train.png",
                                scaledSize: new google.maps.Size(30, 30)
                            };
                            createMarker(results[i], trainIcon);
                        }
                        map.setZoom(10);
                    }
                });

                var busRequest = {
                    query: bus,
                    fields: ['name', 'geometry'],
                };
                var service = new google.maps.places.PlacesService(map);


                service.findPlaceFromQuery(busRequest, function (results, status) {
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        for (var i = 0; i < results.length; i++) {
                            var busIcon = {
                                url: "assets/img/markers/bus.png",
                                scaledSize: new google.maps.Size(30, 30)
                            };
                            createMarker(results[i], busIcon);
                        }
                        map.setZoom(10);
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
                        infoWindow.setContent(place.name);
                        activeInfoWindow && activeInfoWindow.close();
                        infoWindow.open(map, this);
                        activeInfoWindow = infoWindow;
                    });
                    transportMarkers.push(marker);

                }

            }


            function barMarker(location) {
                var center = new google.maps.LatLng(location[0], location[1]);
                var request = {
                    location: center,
                    radius: 1500,
                    types: ["bar"]
                };
                var service = new google.maps.places.PlacesService(map);
                service.nearbySearch(request, callback)

                function createMarker(place) {
                    var barIcon = {
                        url: "assets/img/markers/bar.png",
                        scaledSize: new google.maps.Size(20, 20),
                    };
                    marker = new google.maps.Marker({
                        map: map,
                        position: place.geometry.location,
                        icon: barIcon,
                        animation: google.maps.Animation.DROP
                    });

                    var infoWindow = new google.maps.InfoWindow({
                        content: ''
                    });

                    google.maps.event.addListener(marker, 'click', function () {
                        infoWindow.setContent(place.name);
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


            // $("#food-nl").on('change', function() {
            //     $('#bars-nl').bootstrapToggle('off');
            //     $('#hotel-nl').bootstrapToggle('off');
            //     deleteMarkers();
            //     map.setZoom(13);
            //     foodMarker(stadiumCoords[0]);
            // });

            


             $("#foodRadio-nl").change(function (e) {
                 e.preventDefault();
                 deleteMarkers();
                 map.setZoom(14);
                 foodMarker(stadiumCoords[0]);
             });

             $("#barRadio-nl").change(function (e) {
                e.preventDefault();
                deleteMarkers();
                map.setZoom(14);
                barMarker(stadiumCoords[0]);
            });

            $("#hotelRadio-nl").change(function (e) {
                e.preventDefault();
                deleteMarkers();
                map.setZoom(14);
                hotelMarker(stadiumCoords[0]);
            });

            $("#atmRadio-nl").change(function (e) {
                e.preventDefault();
                deleteMarkers();
                map.setZoom(14);
                atmMarker(stadiumCoords[0]);
            });

            $("#travelRadio-nl").change(function (e) {
                e.preventDefault();
                deleteMarkers();
                transportMarker(airports[0], "Amsterdam Train Station", "Amsertdam Bus Station");
            });

            $("#museumRadio-nl").change(function (e) {
                e.preventDefault();
                deleteMarkers();
                map.setZoom(12);
                museumMarker(stadiumCoords[0]);
            });


        }




    );



}