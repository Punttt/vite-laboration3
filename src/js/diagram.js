import Chart from "chart.js/auto";


/**
 * Initierar eventlyssnare när DOM är färdigladdat
 * 
 */
document.addEventListener("DOMContentLoaded", async()=>{
    loadData();
})

/**
 * Hämtar antagningsstatistik från extern JSON data,
 * filtrerar och skapar diagram för program och kurser med hjälp av Charts.js
 * 
 * @async
 * @returns {Promise<void>} - Returnerar inget värde, men uppdaterar DOM med diagram.
 */
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

        // Skapa stapeldiagram för kurser
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

        // Skapa cirkeldiagram för program
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
 * Filtrerar antagningsdata baserat på typen (t.ex Kurs eller Program)
 * sorterar i fallande ordning efter antal sökande
 * returnerar de översta posterna 0 < X
 * 
 * @param {Array<Objekt>} antagning - hela listan med all antagningsdata
 * @param {string} type - Type som filtreras t.ex Kurs eller Program
 * @param {number} count - Antal värden eller rader som ska returneras
 * @returns {Array<Objekt>} En lista med de mest sökta program/kurser
 */
function getTopByType(antagning, type, count){
    return antagning 
        .filter(item => item.type && item.type.toLowerCase() == type.toLowerCase())
        .sort((a, b) => Number(b.applicantsTotal) - Number(a.applicantsTotal))
        .slice(0, count);
}
