const closeEl = document.querySelector(".fa-xmark");
const barsEl = document.querySelector(".fa-bars");
const sidebarEl = document.querySelector(".sidebar");

barsEl.addEventListener("click", () => {
    sidebarEl.classList.toggle("show-sidebar");
})

closeEl.addEventListener("click", () => {
    sidebarEl.classList.remove("show-sidebar");
})

