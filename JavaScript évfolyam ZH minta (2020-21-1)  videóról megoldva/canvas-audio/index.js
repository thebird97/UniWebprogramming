function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//b. (1 pont) Készíts egy random(a, b) függvényt, ami [a, b] zárt intervallumban állít elő egész számokat! Írj ki egy véletlen számot -10 és 10 között a konzolra!
console.log(getRandomInt(-10, 10));


//c. (1,5 pont) Tölts fel egy 20 elemű tömböt véletlen számokkal -5 és 5 között (határokat beleértve)! A feltöltött tömböt írd ki a konzolra!
let tomb = [];

for (let i = 0; i < 20; i++) {
    tomb.push(getRandomInt(-5, 5));
}
console.log("//c. (1,5 pont) Tölts fel egy 20 elemű tömböt véletlen számokkal -5 és 5 között (határokat beleértve)! A feltöltött tömböt írd ki a konzolra!")
for (const myarrayKey of tomb) {
    console.log(myarrayKey);
}

/*
d. (1,5 pont) Rajzold ki a tömb elemeit a vászonra a következőképpen.
Húzz egy törtvonalat a vászon bal szélének közepétől a jobb szélének közepéig úgy, hogy a bal középső után menjen egy szakasz 10px-szel jobbra
és a tömb 1. elemének megfelelően a vászon függőleges közepétől fel vagy le. A következő szakasz innen 10px-re jobbra és a tömb
2. elemének megfelelően a vászon függőleges közepétől fel vagy le, és így tovább. Pl. ha a tömbben ilyen adatok vannak: [-4, 1, -5, 5, ..., -3], akkor a pontok koordinátái:


 */


const ctx = document.querySelector("canvas").getContext("2d");

function render(){
    ctx.clearRect(0,0,210,210);
    ctx.beginPath();
    let x = 0;
    let y = 105;


    for (const value of tomb) {
        ctx.moveTo(x, y);

        x += 10;
        y = 105 + value;
        ctx.lineTo(x,y);

    }
    ctx.lineTo(x, y);
    ctx.lineTo(210, 105);
    ctx.strokeStyle = "grey";
    ctx.lineWidth = 3;
    ctx.closePath();
    ctx.stroke();


}




function onChange(){
    console.log('change');
    tomb = tomb.map(el=>el+getRandomInt(-1,1));
    render();
}


document.querySelector("#btn-change").addEventListener('click',onChange);
render();

function update(dt){

    tomb = tomb.map(el=>el+getRandomInt(-1,1)*dt);

}




let lastFrameTime = performance.now();
function next(){

    let dt = (performance.now() - lastFrameTime)/100;
    update(dt);
    render();
    lastFrameTime = performance.now();
    requestAnimationFrame(next);
}
document.querySelector("#btn-animation").addEventListener('click',()=> {
    lastFrameTime = performance.now();
    next();
});

