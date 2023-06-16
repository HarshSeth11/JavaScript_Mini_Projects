const containerEl = document.querySelector(".container");
const counterEl = document.querySelector(".counter");
const barEl = document.querySelector(".loading-bar-front");
const txtEl = document.querySelector(".txt");

let idx = 0;

updateNum();

function updateNum(){
    counterEl.innerHTML = idx + "%";
    barEl.style.width = idx + "%";
    idx++;
    if(idx < 102){
        setTimeout(updateNum,50);
    }
    else{
        containerEl.style.display = "none";
        txtEl.innerHTML = "Kive";
    }
}
