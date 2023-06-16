const testimonials = [
    {
        name: "Giacinta Z",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        text: "If you want real marketing that works and effective implementation - apple's got you covered. Apple was worth a fortune to my company. Needless to say we are extremely satisfied with the results. I was amazed at the quality of apple.",
    },
    {
        name: "Karla R",
        photoUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        text: "Apple saved my business. Dude, your stuff is the bomb! You guys rock! I am so pleased with this product.",
    },
    {
        name: "Emory F",
        photoUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        text: "I love your system. Definitely worth the investment. I am completely blown away. Absolutely wonderful!",
    },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const userNameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial(){
    // const {name, photoUrl, text} = testimonials[idx];
    imgEl.src = testimonials[idx].photoUrl;
    userNameEl.innerText = testimonials[idx].name;
    textEl.innerText = testimonials[idx].text;

    idx++;

    if(idx === testimonials.length){
        idx=0;
    }

    setTimeout(() => {
        updateTestimonial();
    },5000);
}