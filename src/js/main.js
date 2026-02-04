addEventListener("DOMContentLoaded", () => { 

    const toggleBtn = document.querySelector("#theme-switch");

    toggleBtn.addEventListener("click", ()=>{
        document.body.classList.toggle("dark");
    })
})