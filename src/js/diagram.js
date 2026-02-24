document.addEventListener("DOMContentLoaded", async()=>{
    loadData();
})

async function loadData() {
    const url = "https://mallarmiun.github.io/Frontend-baserad-webbutveckling/Moment%205%20-%20Dynamiska%20webbplatser/statistik_sokande_ht25.json";

    try {
        const response = await fetch(url);
        const antagningsInfo = await response.json();

        

        const toppKurser = getTopByType(antagningsInfo, "Kurs", 6);

        console.table(toppKurser);

    } catch(error){
        console.error("fel:", error);
    }
}


function getTopByType(antagning, type, count){
    return antagning 
        .filter(item => item.type && item.type.toLowerCase() == type.toLowerCase())
        .sort((a, b) => Number(b.applicantsTotal) - Number(a.applicantsTotal))
        .slice(0, count);
}
