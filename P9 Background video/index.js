const btnEl = document.querySelector(".btn");
const videoEl = document.querySelector(".background-video");
const fa = document.querySelector(".fa-solid");
const preloaderEl = document.querySelector(".preloader");

btnEl.addEventListener("click", () => {
    if(btnEl.classList.contains("pause")){
        btnEl.classList.remove("pause");
        videoEl.play();
        fa.classList.add("fa-pause");
        fa.classList.remove("fa-play");
    }
    else{
        btnEl.classList.add("pause");
        videoEl.pause();
        fa.classList.add("fa-play");
        fa.classList.remove("fa-pause");
    }
});

window.addEventListener("load", ()=>{
    preloaderEl.style.zIndex = "-2";
})