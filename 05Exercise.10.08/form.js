console.log("a")
const form = document.querySelector("form");
const sliderElement = document.querySelector("input[type=range]")


form.addEventListener("submit",ev =>{
    ev.preventDefault();
    console.log(parseInt(form.csuszka.value));
    let number = parseFloat(form.szamMezo.value)
    console.log(isNaN(szam) ?"A beírt érték nem értelmezhető számként." : "");
    console.log(parseFloat(form.szamMezo.value));
    console.log(form.szoveg.value);

} )
