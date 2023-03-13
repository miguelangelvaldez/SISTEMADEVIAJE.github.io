const places = [
  {
    address: "Santo Domingo",
    type: "Lugar turístico"
  },
  {
    address: "pedernales",
    type: "Lugar turístico"
  },
  {
    address: "la mata de farfan",
    type: "Lugar turístico"
  },
  {
    address: "dajabon",
    type: "Lugar turístico"
  },
  {
    address: "monte cristi",
    type: "Lugar turístico"
  },
  {
    address: "cabrera",
    type: "Lugar turístico"
  },
  {
    address: "Puerto Plata",
    type: "Lugar turístico"
  },
  {
    address: "Punta Cana",
    type: "Lugar turístico"
  },
  {
    address: "Nagua",
    type: "Lugar turístico"
  },
  {
    address: "Bani",
    type: "Lugar turístico"
  },

  {
    address: "Barahona",
    type: "Lugar turístico"
  },
  {
    address: "La Romana",
    type: "Lugar turístico"
  },
  {
    address: "Santiago de los Caballeros",
    type: "Lugar turístico"
  }
];

let map;
const markers = [];

// Inicializa el mapa con los parámetros necesarios
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {lat: 18.735693, lng: -70.162651},
    mapTypeId: google.maps.MapTypeId.HYBRID
  });
  addMarkers();
}

// Agrega todos los marcadores a la vez al mapa
function addMarkers() {
  let geocoder = new google.maps.Geocoder();

  places.forEach(place => {
    geocoder.geocode({address: place.address}, function(results, status) {
      if (status === 'OK') {
        let marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          label: place.type
        });
        markers.push(marker);
      }
    });
  });
}

// Función para calcular la distancia entre dos puntos
function toRadians(degrees) {
  return degrees * Math.PI / 180;
}

function calculateDistance() {
  const latitude1 = toRadians(Number(document.getElementById("latitude1").value));
  const longitud1 = toRadians(Number(document.getElementById("longitud1").value));
  const latitude2 = toRadians(Number(document.getElementById("latitude2").value));
  const longitud2 = toRadians(Number(document.getElementById("longitud2").value));

  const R = 6371; // Radio de la tierra en km
  const dLat = latitude2 - latitude1;
  const dLon = longitud2 - longitud1;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(latitude1) * Math.cos(latitude2) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const distance = R * c;

  document.getElementById("result").textContent = `La distantancia entre(${latitude1}, ${longitud1}) y (${latitude2}, ${longitud2}) es ${distance.toFixed(2)} kilometers.`;
}

initMap();


