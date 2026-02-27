let map;
let marker;
let lat = 62.3908;
let lng = 17.3069;

// Initierar kartan.
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: lat, lng: lng },
        zoom: 12
    });
}

document.addEventListener("DOMContentLoaded", ()=>{

    const form = document.getElementById("locationForm");
    const input = document.getElementById("locationInput");

    form.addEventListener("submit", async (e)=>{
        e.preventDefault();

        const query = input.value;
        console.log(query);

        await searchLocation(query);
    })
})


// Hämta kordinater från google API
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
