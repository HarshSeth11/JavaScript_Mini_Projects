const questionsEl = document.querySelectorAll(".question");


questionsEl.forEach((question)=>{
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click", ()=>{
        question.classList.toggle("show-text");
    })
})