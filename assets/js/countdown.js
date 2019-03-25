$(document).ready(function () {

var euroStartDate = new Date("Jun 12, 2020 20:00:00").getTime();

var a = setInterval(function() {
    var now = new Date().getTime();

    var length = euroStartDate - now;

    var days = Math.floor(length / (1000 * 60 *60 *24));
    var hours = Math.floor((length % (1000 *60 *60 * 24))/ (1000 *60 * 60));
    var minutes = Math.floor((length % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((length % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =`Euro 2020 starts in `;
    document.getElementById("days").innerHTML = `${days}<br> days`;
    document.getElementById("hours").innerHTML = `${hours}<br> hours`;
    document.getElementById("minutes").innerHTML = `${minutes}<br>minutes`;
    document.getElementById("seconds").innerHTML = `${seconds}<br> seconds`;

    if (length < 0) {
        clearInterval(a);
        document.getElementById("countdown").innerHTML("Euro 2020 has begun!");
    }
}, 1000);

});