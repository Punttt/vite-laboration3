addEventListener("DOMContentLoaded", () => { 

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