var Latitude = undefined;
var Longitude = undefined;


$(document).on ('click','#olharmapa',function(){
  function checkConnection(){
  var networkState = navigator.connection.type;

  var status = {};

  states[Connection.NONE] = 'Sem conexão por favor conectar a uma rede';

  alert(states[networkState]);
  }
  checkConnection(); 
   
  document.addEventListener("deviceready", onDeviceReady, false);
  function onDeviceReady() {
  console.log("navigator.geolocation works well");
  }       

  var onSuccess = function(position) {
    alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
};

var watchId = navigator.geolocation.watchPosition(geolocationSuccess,
 [geolocationError],
 [geolocationOptions]); 

 function onSuccess(position) {
    var element = document.getElementById('geolocation');
    element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                        'Longitude: ' + position.coords.longitude     + '<br />' +
                        '<hr />'      + element.innerHTML;
}

function getWeatherLocation() {

    navigator.geolocation.getCurrentPosition
    (onWeatherSuccess, onWeatherError, { enableHighAccuracy: true });
}  
});

