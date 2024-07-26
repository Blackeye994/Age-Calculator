let mode = document.getElementById("theme");
let container = document.querySelector(".container");
let input_value_1 = document.getElementById("day");
let input_value_2 = document.getElementById("month");
let input_value_3 = document.getElementById("year");
let c_day = document.getElementById("c_day");
let c_month = document.getElementById("c_month");
let c_year = document.getElementById("c_year");

let days = null;
let months = null;
let years = null;
let total_days = null;
let total_month = null;
let total_year = null;

let today = new Date();
console.log(today);
let current_day = today.getDay();
let current_month = today.getMonth();
let current_year = today.getFullYear();

mode.addEventListener("click", () => {
    container.classList.toggle("theme_mode");
});

input_value_1.addEventListener("change", () => {
    days = input_value_1.value;
    if (current_day >= days) {
        total_days = current_day - days;
    } else {
        total_days = days - current_day;
    }
    c_day.innerText = total_days;
});

input_value_2.addEventListener("change", () => {
    months = input_value_2.value;
    if (current_month >= months) {
        total_month = current_month - months;
    } else {
        total_month = months - current_month;
    }
    c_month.innerText = total_month;
});

input_value_3.addEventListener("change", () => {
    years = input_value_3.value;
    if (current_year >= years) {
        total_year = current_year - years;
    } else {
        total_year = years - current_year;
    }
    c_year.innerText = total_year;
});


