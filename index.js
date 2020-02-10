const d = new Date();

const time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const date = months[d.getMonth()] + " " + d.getDate() + " " + d.getFullYear();

const timeHandler = document.querySelector(".timeHandler").innerHTML = time;
const dateHandler = document.querySelector(".dateHandler").innerHTML = date;

