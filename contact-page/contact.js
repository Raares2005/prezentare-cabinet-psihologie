function initMap() {
    // The location of Uluru
    const cabinet = {lat: 44.18158115919225, lng: 28.648052011227666};
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("location-on-map"), {
      zoom: 4,
      center: cabinet,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: cabinet,
      map: map,
    });
  }
  
  window.initMap = initMap;