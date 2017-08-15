
    // initialize new google maps LatLng object
    var myLatlng = new google.maps.LatLng(40.705189,-74.009209);
    // set the map options hash
    var mapOptions = {
        center: myLatlng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    // get the maps div's HTML obj
    var map_canvas_obj = document.getElementById("map-canvas");
    // initialize a new Google Map with the options
    var map = new google.maps.Map(map_canvas_obj, mapOptions);
    // Add the marker to the map
    var marker = new google.maps.Marker({
        position: myLatlng,
        title:"Hello World!"
    });

function initialize_gmaps() {

    // Add the marker to the map by calling setMap()
    marker.setMap(map);
}

$(document).ready(function() {
    initialize_gmaps();
});

for(var i = 0; i < hotels.length; i++) {
    $('#hotel-choices').append(`<option value='${hotels[i].name}' data-lat='${hotels[i].place.location[0]}' data-lon='${hotels[i].place.location[1]}'>${hotels[i].name}</option>`);
}

for(var i = 0; i < restaurants.length; i++) {
    $('#restaurant-choices').append(`<option value='${restaurants[i].name}' data-lat='${restaurants[i].place.location[0]}' data-lon='${restaurants[i].place.location[1]}'>${restaurants[i].name}</option>`);
}

for(var i = 0; i < activities.length; i++) {
    $('#activity-choices').append(`<option value='${activities[i].name}' data-lat='${activities[i].place.location[0]}' data-lon='${activities[i].place.location[1]}'>${activities[i].name}</option>`);
}

$('#hotelPlus').on('click', function() {
    console.log($('#hotel-choices').val());
    var $hotelName = $('#hotel-choices').val();
    var lat = $('#hotel-choices').find(':selected').data('lat');
    var lon = $('#hotel-choices').find(':selected').data('lon');
    $('#hotelItinerary').append(`
    <span class="title">${$hotelName}</span>
    <button class="btn btn-xs btn-danger remove btn-circle">x</button>`)
    console.log(hotels);
    var Latlng = new google.maps.LatLng(lat, lon);
    var marker = new google.maps.Marker({
        position: Latlng,
        title: `${$hotelName}`
    });
    // Add the marker to the map by calling setMap()
   
    marker.setMap(map);
})

$('#restaurantPlus').on('click', function() {
    console.log($('#restaurant-choices').val());
    var $restaurant = $('#restaurant-choices').val()
    var lat = $('#restaurant-choices').find(':selected').data('lat');
    var lon = $('#restaurant-choices').find(':selected').data('lon');
    $('#restaurantItinerary').append(`
    <span class="title">${$restaurant}</span>
    <button class="btn btn-xs btn-danger remove btn-circle">x</button>`)
    var Latlng = new google.maps.LatLng(lat, lon);
    var marker = new google.maps.Marker({
        position: Latlng,
        title: `${$restaurant}`
    });
    // Add the marker to the map by calling setMap()
   
    marker.setMap(map);
})

$('#activityPlus').on('click', function() {
    console.log($('#activity-choices').val());
    var $activity = $('#activity-choices').val()
    var lat = $('#activity-choices').find(':selected').data('lat');
    var lon = $('#activity-choices').find(':selected').data('lon');
    $('#activityItinerary').append(`
    <span class="title">${$activity}</span>
    <button class="btn btn-xs btn-danger remove btn-circle">x</button>`)
    var Latlng = new google.maps.LatLng(lat, lon);
    var marker = new google.maps.Marker({
        position: Latlng,
        title: `${$activity}`
    });
    // Add the marker to the map by calling setMap()
   
    marker.setMap(map);
})