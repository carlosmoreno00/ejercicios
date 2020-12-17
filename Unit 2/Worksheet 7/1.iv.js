var id, target;

function success(pos) {
    var crd = pos.coords;
      
    if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
        console.log('Congratulations, you reached the target');
        navigator.geolocation.clearWatch(id);
    }
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

target = {
    latitude : 0,
    longitude: 0
  };
      
id = navigator.geolocation.watchPosition(success, error);