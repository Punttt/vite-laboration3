document.addEventListener("DOMContentLoaded", async()=>{
    loadData();
})

async function loadData() {
    const url = "https://mallarmiun.github.io/Frontend-baserad-webbutveckling/Moment%205%20-%20Dynamiska%20webbplatser/statistik_sokande_ht25.json";

    try {
        const response = await fetch(url);
        const antagningsInfo = await response.json();

        console.table(antagningsInfo);

        const toppKurser = getTopByType(antagningsInfo, "Kurs", 6);

    } catch(error){
        console.error("fel:", error);
    }
}


function getTopByType(antagning, type, count){
    
}