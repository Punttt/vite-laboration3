document.addEventListener("DOMContentLoaded", async()=>{
    loadData();
})

async function loadData() {
    const url = "https://mallarmiun.github.io/Frontend-baserad-webbutveckling/Moment%205%20-%20Dynamiska%20webbplatser/statistik_sokande_ht25.json";

    try {
        const response = await fetch(url);
        const program = await response.json();

        console.table(program);

    } catch(error){
        console.error("fel:", error);
    }
}