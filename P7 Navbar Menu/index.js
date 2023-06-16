const barsEl = document.querySelector(".fa-bars");
const menuEl = document.querySelector(".menu");

barsEl.addEventListener("click", () => {
    // if(menuEl.classList.contains("show-menu")){
    //     menuEl.classList.remove("show-menu");
    // }
    // else{
    //     menuEl.classList.add("show-menu");
    // }
    menuEl.classList.toggle("show-menu");
})
