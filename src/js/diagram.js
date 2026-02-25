import Chart from "chart.js/auto";

document.addEventListener("DOMContentLoaded", async()=>{
    loadData();
})

async function loadData() {
    const url = "https://mallarmiun.github.io/Frontend-baserad-webbutveckling/Moment%205%20-%20Dynamiska%20webbplatser/statistik_sokande_ht25.json";

    try {
        const response = await fetch(url);
        const antagningsInfo = await response.json();

        // Filtrera och sortera
        const toppKurser = getTopByType(antagningsInfo, "Kurs", 6);
        const toppProgram = getTopByType(antagningsInfo, "Program", 5);

        // Skapa labels och data (Kurser)
        const kurserLabels = toppKurser.map(item => item.name);
        const kurserData = toppKurser.map(item => item.applicantsTotal);

        // Skapa labels och data (Kurser)
        const programLabels = toppProgram.map(item => item.name);
        const programData = toppProgram.map(item => item.applicantsTotal);

        console.table(programLabels);
        console.table(programData);

        // Skapa diagram
        new Chart(document.getElementById("chartKurser"),{
            type: "bar",
            data: {
                labels: kurserLabels,
                dataset: [{
                    labels: "Totalt antal sökande (kurser)",
                    data: kurserData
                }]
            }
        });

        /** 
        new chart(document.getElementById("chartProgram"),{

        })*/

    } catch(error){
        console.error("fel:", error);
    }
}


/**
 * Sortera i fallande ordning för sökanden och returnera värdet
 */
function getTopByType(antagning, type, count){
    return antagning 
        .filter(item => item.type && item.type.toLowerCase() == type.toLowerCase())
        .sort((a, b) => Number(b.applicantsTotal) - Number(a.applicantsTotal))
        .slice(0, count);
}
