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

        // Skapa diagram stapel för kurser
        new Chart(document.getElementById("chartKurser"),{
            type: "bar",
            data: {
                labels: kurserLabels,
                datasets: [{
                    label: "Totalt antal sökande",
                    data: kurserData
                }]
            }
        });

        // Skapa diagram cirkel för program
        new Chart(document.getElementById("chartProgram"),{
            type: "pie",
            data: {
                labels: programLabels,
                datasets: [{
                    label: "Totalt antal sökande",
                    data: programData,
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.7)",
                        "rgba(54, 162, 235, 0.7)",
                        "rgba(255, 206, 86, 0.7)",
                        "rgba(75, 192, 192, 0.7)",
                        "rgba(153, 102, 255, 0.7)"

                    ],
                    borderWidth: 1
                }]
            }
        })

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
