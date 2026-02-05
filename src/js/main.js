addEventListener("DOMContentLoaded", () => { 

    const toggleBtn = document.querySelector("#theme-switch");

    toggleBtn.addEventListener("click", ()=>{
        document.body.classList.toggle("dark");
    })

    const mobileBtn = document.querySelector("#hamburger");
    const mobileNavEl = document.querySelector(".mobile-nav");
    const closeBtn = document.querySelector("#close-btn");

    mobileBtn.addEventListener("click", ()=>{
        mobileNavEl.classList.toggle("open");
    })

    closeBtn.addEventListener("click", ()=>{
        mobileNavEl.classList.remove("open");
    })
})