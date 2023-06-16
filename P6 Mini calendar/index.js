const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();

// const monthNames = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December"
// ]

// const dayNames = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thrusday",
//     "Friday",
//     "Saturday"
// ]

// monthNameEl.innerText = monthNames[date.getMonth()];
// dayNameEl.innerText = dayNames[date.getDay()];
dayNumEl.innerText = date.getDate();
yearEl.innerText = date.getFullYear();


monthNameEl.innerText = date.toLocaleString("en", {
    month:"long"
})

dayNameEl.innerText = date.toLocaleString("en", {
    weekday:"long"
})

