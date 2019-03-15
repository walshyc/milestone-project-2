function initMap() {
    var mapCenter = { lat: 50.7436337, lng: 18.4208039 };
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



    var map = new google.maps.Map(document.getElementById('map'), { zoom: 3, center: mapCenter });





    $.getJSON('assets/data/cities.json', function (data) {


        for (i = 0; i < data.length; i++) {
            stadiumCoords.push([data[i].stadiumLat, data[i].stadiumLng]);
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

                .append(`<div id="serviceBtns-${countryFlag}" class= "city-hide" >
                                        <button id="foodBtn-${countryFlag}" class = "btn btn-primary btn-service" ><i class="material-icons">
                                        fastfood</i><br>Food</button>
                                        <button id="barBtn-${countryFlag}" class = "btn btn-primary btn-service" ><i class="material-icons">
                                        local_drink</i><br>Bars</button>
                                        <button id="atmBtn-${countryFlag}" class = "btn btn-primary btn-service" ><i class="material-icons">
                                        atm</i><br>Cash</button>
                                        <button id="transportBtn-${countryFlag}" class = "btn btn-primary btn-service" ><i class="material-icons">
                                        directions_bus</i><br>Travel</button>
                                        </div>

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
            });

            $("#ams-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-nl").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
                $("#serviceBtns-nl").removeClass("city-hide");
                zoomTo(52.3680, 4.9036, 12);


            })

            $("#bku-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-az").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
                $("#serviceBtns-az").removeClass("city-hide");
                zoomTo(40.4093, 49.8671, 12);
            })

            $("#bil-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-es").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
                $("#serviceBtns-es").removeClass("city-hide");
                zoomTo(43.2630, -2.9350, 14);
            })

            $("#buc-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-ro").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
                $("#serviceBtns-ro").removeClass("city-hide");
                zoomTo(44.4268, 26.1025, 12);
            })

            $("#bud-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-hu").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
                $("#serviceBtns-hu").removeClass("city-hide");
                zoomTo(47.4979, 19.0402, 12);
            })

            $("#cop-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-dk").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
                $("#serviceBtns-dk").removeClass("city-hide");
                zoomTo(55.6761, 12.5683, 13);
            })

            $("#dub-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-ie").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
                $("#serviceBtns-ie").removeClass("city-hide");
                zoomTo(53.3498, -6.2603, 13);
            })

            $("#gla-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-gb-sct").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
                $("#serviceBtns-gb-sct").removeClass("city-hide");
                zoomTo(55.8595, -4.2518, 12);
            })

            $("#ldn-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-gb-eng").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
                $("#serviceBtns-gb-eng").removeClass("city-hide");
                zoomTo(51.5080123, -0.129448, 10);
            })

            $("#mun-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-de").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
                $("#serviceBtns-de").removeClass("city-hide");
                zoomTo(48.1461, 11.5820, 11);
            })

            $("#rom-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-it").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
                $("#serviceBtns-it").removeClass("city-hide");
                zoomTo(41.9028, 12.4964, 12);
            })

            $("#stp-btn").click(function (e) {
                e.preventDefault();
                $("#buttons-container").hide();
                $("#city-info-ru").removeClass("city-hide");
                $("#map").addClass("col-lg-8 col-xs-12");
                $("#cityInfo").addClass("col-lg-4 col-xs-12");
                $("#resetBtn").text("View All Cities");
                $("#serviceBtns-ru").removeClass("city-hide");
                zoomTo(59.9343, 30.3351, 11);
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
                radius: 5000,
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
                    icon: foodIcon
                });

                var infoWindow = new google.maps.InfoWindow({
                    content: ""
                });

                google.maps.event.addListener(marker, 'click', function () {
                    infoWindow.setContent(place.name);
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

        function atmMarker(location) {
            var center = new google.maps.LatLng(location[0], location[1]);
            var request = {
                location: center,
                radius: 5000,
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
                    icon: atmIcon
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
                        createMarker(results[i],airIcon);
                    }
                    map.setZoom(12);
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
                        createMarker(results[i],trainIcon);
                    }
                    map.setZoom(12);
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
                        createMarker(results[i],busIcon);
                    }
                    map.setZoom(12);
                }
            });



            function createMarker(place,icon) {
                marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location,
                    icon: icon
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
                radius: 5000,
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
                    icon: barIcon
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



        $("#foodBtn-nl").click(function (e) {
            e.preventDefault();
            deleteMarkers();
            foodMarker(stadiumCoords[0]);
        });

        $("#barBtn-nl").click(function (e) {
            e.preventDefault();
            deleteMarkers();
            barMarker(stadiumCoords[0]);
        });

        $("#atmBtn-nl").click(function (e) {
            e.preventDefault();
            deleteMarkers();
            atmMarker(stadiumCoords[0]);
        });

        $("#transportBtn-nl").click(function (e) {
            e.preventDefault();
            deleteMarkers();
            transportMarker("Amsterdam Airport", "Amsterdam Train Station", "Amsertdam Bus Station");
        });


    }




    );



}



