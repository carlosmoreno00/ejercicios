function success(pos) {
    var crd = pos.coords;
      
    var map = L.map('mapid').setView([crd.latitude, crd.longitude], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([crd.latitude, crd.longitude]).addTo(map)
    .bindPopup('Aqui estamos')
    .openPopup();
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
      
navigator.geolocation.getCurrentPosition(success, error);