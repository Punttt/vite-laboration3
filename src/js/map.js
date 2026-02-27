
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
    const url = `https://nominatim.openstreetmap.org/search?q=${query}&format=json`;
    let data;

    try {  
        const response = await fetch(url);
        data = await response.json();

        console.table(data);

    } catch (error){
        console.error(error);
    }
    

    console.log(data[0].lat);
    console.log(data[0].lon);
}