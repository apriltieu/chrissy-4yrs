//var map = L.map('map').setView([51.505, -0.09], 13);
//map.style.opacity = 0
//L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//    maxZoom: 19,
//    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//}).addTo(map);
var map = L.map('map').setView([0,0], 0);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
var marker = L.marker([-37.73, 144.95]).addTo(map);
var marker2 = L.marker([45.46887384715786, 9.181937953805093]).addTo(map);
marker2.bindPopup("<b>Oh wow!</b><br>Now we are here!").openPopup();
marker.bindPopup("<b>We started here!</b>").openPopup();
//L.popup()
//    .setLatLng([-37.73, 144.95])
//    .setContent("We started here!")
 //   .openOn(map);

//L.popup()
//    .setLatLng([51.513, -0.09])
//    .setContent("We are here!")
//    .openOn(map);


function mapfadein(){
	if(val < 1){
		val += 0.025;
		map.style.opacity = val;
	}
	else{
		clearInterval(fadeinInterval);
		if(ok == 2){
			ok += 1;
		}
	}
}

var fadeInterval;
var fadeinInterval;

timer();
setInterval(timer, 1000);
fadeInterval = setInterval(function(){
	if(ok == 2){
		clearInterval(fadeInterval);
		fadeinInterval = setInterval(mapfadein, 50);
	}
}, 50)


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var locbtn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var locspan = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
locbtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
locspan.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}