const d = new Date();



const workingClock = () => {
    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    let time = h + ":" + m + ":" + s;
    let timeHandler = document.querySelector(".timeHandler").innerHTML = time;
}

let interval = setInterval(workingClock, 1000);

const killInterval = () => {
    clearInterval(interval)
}

const checkTime = (i) => {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
    }

// Working Clock

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const date = months[d.getMonth()] + " " + d.getDate() + " " + d.getFullYear();


const dateHandler = document.querySelector(".dateHandler").innerHTML = date;

let todoArray = [];


const buttonPushInput = () => {
    let todoHandler = document.querySelector(".section3Input").value;
    todoArray.push(todoHandler);
    console.log(todoArray);
    let newP = document.createElement('p');

    let oldP = document.querySelector(".taskParagraph");

    let parentP = oldP.parentNode



    parentP.insertBefore(newP, oldP);
    newP.innerHTML = todoArray;

}


