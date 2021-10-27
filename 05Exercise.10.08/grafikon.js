

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const form = document.querySelector("form");
const AnimationButton = document.querySelector("button");
const BlueRange = form.blue;
const PurpleRange = form.purple;
canvas.width = 70;
canvas.height = 120;

ctx.translate(0,120) //bal felső sarok 0,0-t letolom bal alsó sarokba





BlueRange.addEventListener("input",e=>{
   // console.log(BlueRange.value)
    const blue = parseInt(BlueRange.value);
    const purple = parseInt(PurpleRange.value);
    PurpleRange.value = 100 -blue;
    grafikon(blue,purple);
})

PurpleRange.addEventListener("input",e=>{
    // console.log(BlueRange.value)
    const purple = parseInt(PurpleRange.value);
    const blue = parseInt(BlueRange.value);
    BlueRange.value = 100 - purple;
    grafikon(blue,purple);
})

/**
 *
 * @param blue{Number} 0-100 Number
 * @param purple{Number} 0-100 Number
 */
function grafikon(blue,purple){
    ctx.clearRect(0,0,canvas.width,-canvas.height);

    ctx.fillStyle = "blue";
    ctx.fillRect(10,0,20,-blue);

    ctx.fillStyle = "purple";
    ctx.fillRect(40,0,20,-purple);

}

AnimationButton.addEventListener("click", e=>{
    BlueRange.disabled = true;
    PurpleRange.disabled = true;
    animal();

})

const randomNumberBetween = (bottom, top) => Math.floor(Math.random() * (top - bottom + 1) + bottom);

function animal() {
    const change = randomNumberBetween(-1,1);
    const blue = parseInt(BlueRange.value) + change;
    const purple = 100-blue;

    BlueRange.value = blue;
    PurpleRange.value = purple;

    grafikon(blue,purple);
    requestAnimationFrame(animal);
}