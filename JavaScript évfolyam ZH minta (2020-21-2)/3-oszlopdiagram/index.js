//a. (1 pont) Az oldalon található három csúszka mozgatásakor folyamatosan (az egérgomb elengedése nélkül) frissüljenek a mellettük megjelenített értékek (input esemény)!

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const redInput = document.querySelector("input#red");
const redSpan = document.querySelector("span#red");

const greenInput = document.querySelector("input#green");
const greenSpan = document.querySelector("span#green");

const blueInput = document.querySelector("input#blue");
const blueSpan = document.querySelector("span#blue");

const width = 100;

redInput.addEventListener("input",e=>{

    const redValue = parseInt(redInput.value);
    redSpan.innerHTML = redValue;



    ctx.clearRect(0,0,canvas.width+redValue,canvas.height+redValue);
    ctx.fillStyle = "red";
    ctx.fillRect( 0, canvas.height-redValue, width, redValue);

})


greenInput.addEventListener("input",e=>{

    const greenValue = parseInt(greenInput.value);
    greenSpan.innerHTML = greenValue;


    ctx.clearRect(width,0,canvas.width+greenValue,canvas.height+greenValue);
    ctx.fillStyle = "green";
    ctx.fillRect( width, canvas.height-greenValue, width, greenValue);
})

blueInput.addEventListener("input",e=>{

    const blueValue = parseInt(blueInput.value);
    blueSpan.innerHTML = blueValue;

    ctx.clearRect(width*2,0,canvas.width+blueValue,canvas.height+blueValue);
    ctx.fillStyle = "blue";
    ctx.fillRect( width*2, canvas.height-blueValue, width, blueValue);
})










