const d = new Date();

const time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const date = months[d.getMonth()] + " " + d.getDate() + " " + d.getFullYear();

const timeHandler = document.querySelector(".timeHandler").innerHTML = time;
const dateHandler = document.querySelector(".dateHandler").innerHTML = date;

let todoArray = [];


const buttonPushInput = () => {
    let todoHandler = document.querySelector(".section3Input").value;
    todoArray.push(todoHandler);
    console.log(todoArray);
    let newP = document.createElement('p').innerHTML = todoArray[0];
    // for(let i; i=0; i++) {
    //     (todoArray.length === i) ? document.createElement('p').innerHTML = todoArray[i] : document.createElement('p').innerHTML = "Coś nie gra";
    // }
    
    
}

