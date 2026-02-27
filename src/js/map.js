
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
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(query)}&key=AIzaSyC4Gx-KoIj3bIpmEd9Q9AkETl8ZJxRVzAI`;
    let data;

    try {  
        const response = await fetch(url);
        data = await response.json();

        console.table(data);

    } catch (error){
        console.error(error);
    }
}

// 

// `https://nominatim.openstreetmap.org/search?q=${query}&format=json`;