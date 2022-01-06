const canvas  = document.querySelector("canvas")
const ctx     = canvas.getContext("2d")
const plusButton = document.querySelector("#plus")
const minusButton = document.querySelector("#minus")
const nextButton = document.querySelector("#next");
const simulateButton = document.querySelector("#sim");





//a. (1 pont) Állíts elő egy 7 hosszú tömböt 50 és 350 közötti véletlenszámokkal, ami az új fertőzöttek számát tartalmazza az előző hét napban! A tömbben tárolt értékeket írasd ki a konzolra is!

const arry_length = 7
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numberofInfected = [];
for (let i = 0; i < arry_length; i++) {
    numberofInfected.push(getRandomInt(50,350));
}

console.log(numberofInfected);

numberofInfected[7] = numberofInfected[6];




//e. (1 pont) A + és - feliratú gombokra kattintva az aktuális napi fertőzöttek száma növekedjen vagy csökkenjen 10 fővel, és a változás jelenjen meg azonnal a grafikonon!
function plusClick() {
    numberofInfected[7] +=10;
    draw()
}
plusButton.addEventListener('click',plusClick)


function minusClick() {
    numberofInfected[7] -=10;
    draw()
}
minusButton.addEventListener('click',minusClick)



///f. (1 pont) A Next feliratú gombra kattintva a következő napra léptetjük a bevitelt, tehát a grafikon egy nappal balra tolódik.
function rotateLeft(arr){
    let first = arr.shift();
    arr.push(first);
    return arr;
}

function nextClick() {
    rotateLeft(numberofInfected);
    draw()
}


nextButton.addEventListener('click',nextClick)


//g. (1 pont) A Simulate feliratú gombra kattintva bizonyos időközönként (pl. fél másodpercenként) automatikusan kerüljön a grafikonra egy új nap,
// ahol a fertőzöttek száma az előző napi érték fele! Ezzel a járvány exponenciális lecsengését szimuláljuk.



function simulateClick() {
    setInterval(function(){
        numberofInfected.shift()
        numberofInfected[7] = 0.5 * numberofInfected[6]
        draw()
    }, 500)



}

simulateButton.addEventListener('click',simulateClick)


function draw(){
    ctx.drawImage(bg, 0, 0)



    /*
b. (2 pont) Jelenítsd meg a tömbben tárolt adatokat grafikusan a mintán látható módon!
A rajz akkor fog a háttérre illeszkedni, ha az első szakasz kezdőpontjának x-koordinátája 100, a másodiké 200, stb.
 Az y-koordinátát a tömbben tárolt értékek határozzák meg, de ügyelj a koordinátarendszer állására és a háttérképen feltüntetett feliratokra!

*/
    for (let i = 0; i < 7; i++){
        ctx.beginPath()
        ctx.moveTo(100 * i + 100, canvas.height - numberofInfected[i])
        ctx.lineTo(100 * (i+1) + 100, canvas.height - numberofInfected[i+1])
        ctx.strokeStyle = i < 6 ? "blue" : "red"
        ctx.lineWidth = 3
        ctx.stroke()
    }





}

let bg        = new Image()
bg.src        = "bg.png"
bg.onload     = draw













