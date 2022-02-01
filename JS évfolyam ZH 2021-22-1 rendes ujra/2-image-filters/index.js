const filters = [
  { label: 'Blur', filter: 'blur(#px)', min: 0, max: 10, value: 3 },
  { label: 'Brightness', filter: 'brightness(#%)', min: 0, max: 500, value: 80},
  { label: 'Contrast', filter: 'contrast(#%)', min: 0, max: 500, value: 200 },
  { label: 'Grayscale', filter: 'grayscale(#%)', min: 0, max: 100, value: 50 },
  { label: 'Hue rotate', filter: 'hue-rotate(#deg)', min: 0, max: 360, value: 90 },
  { label: 'Invert', filter: 'invert(#%)', min: 0, max: 100, value: 80 },
  { label: 'Opacity', filter: 'opacity(#%)', min: 0, max: 100, value: 50 },
  { label: 'Saturate', filter: 'saturate(#%)', min: 0, max: 500, value: 200 },
  { label: 'Sepia', filter: 'sepia(#%)', min: 0, max: 100, value: 50 },
];

const theFiltersDiv = document.querySelector('#the-filters')
const theImage = document.querySelector('#the-image')
const allinput = theFiltersDiv.querySelectorAll('input');
/*

a. (2 pont) Ha egy szűrő jelölőmezője aktív, akkor olvassuk ki a jelölőmező értékeként megadott szűrőszöveget, és ,
abban a # karaktert cseréljük ki a jelölőmező utáni csúszka értékére. Az így megkapott szűrőt alkalmazzuk a kép stílusán!

Technikai segítség: mind a jelölőmező ki-bekapcsolása, mind a csúszkák mozgatása input eseményt generál.
Így a feladat megoldható a jelölőmezőket tartalmazó div-en figyelt eseménykezelővel, amelyben megnézed, mely jelölőmezők vannak bepipálva, kiolvasod a hozzájuk tartozó csúszkák értékét, és az így előállt képszűrő szöveget alkalmazod a kép stílusára.
 */





// Hívás:

//delegal(theFiltersDiv, "checkbox", "input", valamitCsinal)


function changeImage() {
  let labels = theFiltersDiv.querySelectorAll('label');
  for (let i = 0; i < labels.length; i++) {
    let checkB = labels[i].querySelector('input[type=checkbox]');
    let range = labels[i].querySelector('input[type=range]');

    console.log(checkB.value)
  }
}

for (let ip of allinput) {
  ip.addEventListener('input',changeImage);
}




