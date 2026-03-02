/** @type {google.maps.Map} */
let map;

/** @type {google.maps.Marker} */
let marker;

/**
 * Startlatitud för kartan
 * 
 * @type {number}
 */
let lat = 62.3908;

/**
 * Startlongitud för kartan
 * 
 * @type {number}
 */
let lng = 17.3069;


/**
 * Initierar kartan och placerar den på startkoordinaterna.
 * Körs automatiskt av Google API via initMap.
 */
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: lat, lng: lng },
        zoom: 12
    });
}

/**
 * Uppdaterar den befintliga kartan med en position och pin/marker
 * Tar bort tidigare mark om det finns kvar
 * 
 * @param {number} lat - Latitud  för den nya positionen
 * @param {number} lng - Longitud för den nya positionen
 */
function updateMap(){
    const pos = { lat, lng };

    map.setCenter(pos);
    map.setZoom(12);

    if(marker) marker.setMap(null);

    marker = new google.maps.Marker({
        position: pos,
        map: map
    });

}

/**
 * Initierar eventlyssnare när DOM är färdigladdat
 * Hämtat formulär och inputelement och lyssnar på submit händelser.
 * Vid Submit hämtar användarens söksträng, koordinater slås ihop med searchLocation()
 * Sedan uppdateras kartan med updateMap()
 */
document.addEventListener("DOMContentLoaded", ()=>{

    const form = document.getElementById("locationForm");
    const input = document.getElementById("locationInput");

    form.addEventListener("submit", async (e)=>{
        e.preventDefault();

        const query = input.value;
        console.log(query);

        await searchLocation(query);
        updateMap();
    })
})


/**
 * Hämtar koordinater från Google Geocoding API baserat på en söksträng 
 * 
 * @async
 * @param {string} query - Den plats som användaren söker efter
 * @returns {Promise<void>}
 */
async function searchLocation(query){
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(query)}&key=AIzaSyC4Gx-KoIj3bIpmEd9Q9AkETl8ZJxRVzAI`;
    let data;

    try {  
        const response = await fetch(url);
        data = await response.json();

        if(data.status != "OK"){
            console.error(data.error_message);
            return;
        }

        lat = data.results[0].geometry.location.lat;
        lng = data.results[0].geometry.location.lng;

        console.log(`Lat: ${lat}, Lng: ${lng}`);

    } catch (error){
        console.error(error);
    }
}

window.initMap = initMap;
