//1.
//Egy gomb megnyomására írd ki a dokumentum valamelyik általad választott részére, hogy "Helló világ!"!
const first = document.querySelector("#first");
//Create a button.
const button = document.createElement("button");
button.innerHTML = "Write Hello World";
button.id = "helloButton";
first.appendChild(button);

let reply_click = function()
{
    console.log("clicked");
    first.innerHTML += "<h2>Hello World</h2>";
}
document.getElementById('helloButton').onclick = reply_click;


//2.
//Kérj be egy számot, és annyiszor írd ki egymás alá egyre növekvő betűméretekkel a "Hello világ!" szöveget! (szöveges beviteli mező, gomb
const second = document.querySelector("#second");
//Create input
const input = document.createElement("input");
input.id = "number_input";
input.placeholder = "0-9";
second.appendChild(input);

const button_input = document.createElement("button");
button_input.innerHTML = "Send number";
button_input.id = "number_button";
second.appendChild(button_input);

let reply_click_number = function () {
    second.innerHTML += document.getElementById('number_input').value;
    for (let i = 0; i < ; i++) {
        
    }
}

document.getElementById("number_button").onclick = reply_click_number;



