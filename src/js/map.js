let lat = 0;
let lng = 0;

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


// Hämta kordinater från Nominatim
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

        // testar skriva ut lat och lon
        lat = data.results[0].geometry.location.lat;
        lng = data.results[0].geometry.location.lng;

        console.log(`Lat: ${lat}, Lng: ${lng}`);

    } catch (error){
        console.error(error);
    }
}
