
document.addEventListener("DOMContentLoaded", ()=>{

    const form = document.getElementById("locationForm");
    const input = document.getElementById("locationInput");

    form.addEventListener("submit", async (e)=>{
        e.preventDefault();

        const query = input.value;
        console.log(query);

        searchLocation(query);
    })
})


// Hämta kordinater från Nominatim
async function searchLocation(query){
    const url = `https://corsproxy.io/?https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&addressdetails=1&limit=1&polygon_geojson=0`;
    const response = await fetch(url);
    const data = await response.json();

    if(data.length === 0){
        throw new Error("Ingen plats hittades."); 
    }

    console.log(data[0].lat);
    console.log(data[0].lon);
}