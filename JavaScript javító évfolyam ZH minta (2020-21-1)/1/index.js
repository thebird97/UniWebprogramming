const txtNumbers = document.querySelector('#numbers')
const task1 = document.querySelector('#task1')
const task2 = document.querySelector('#task2')
const task3 = document.querySelector('#task3')
const task4 = document.querySelector('#task4')
const task5 = document.querySelector('#task5')


function handleWrite() {
    /*
    a. (1 pont) A numbers azonosítójú szöveges beviteli mezőbe lehet beírni a számsorozatot, a számokat vessző választja el. Gépelés közben (input esemény) olvasd be a szöveges beviteli mező értékét, és vessző szerint bontsd fel tömbbé. Az így kapott tömböt írd ki a konzolra!
     */
    let tomb = [];
    let elements = txtNumbers.value;
    tomb = elements.split(",");
    console.log(tomb);
    //i. (0,5 pont) A bemeneten megadott két egymást követő vessző miatt létrejövő üres elemeket szűrjük ki a tömbből a feldolgozás előtt (pl. 1,,3)!
    let tombnincsures =  tomb.filter(e =>  e);

    /*
    b. (1 pont) A tömb minden eleme egyelőre szövegként megadott szám. Alakítsd át a tömb elemeit számmá, és írd ki a konzolra! Az így kapott számtömbön oldd meg az alábbi 5 feladatot (c.-g.). Ha az átalakítást nem tudtad elvégezni, akkor használhatsz fixen beégetett tömböt is a megoldáshoz.

     */
    console.log("atalakitas");
    let tombint = tombnincsures.map(function (x) {
        return parseInt(x, 10);
    });
    //vagy
    // tomb.map(x=>parseInt(x)); ?:??????


    console.log(tombint);


///Harommal oszthato darab


    const count = (prevReturn, currentReturn) => {
        if (currentReturn % 3 === 0) {
            return prevReturn + 1
        } else {
            return prevReturn
        }
    }
    const harrommaloszthato = tombint.reduce(count, 0);
    task1.innerHTML = harrommaloszthato;


    //d. (1 pont) A task2 azonosítójú elembe írj ki egy negatív számot a tömbből; vagy ha nincs ilyen, akkor azt, hogy "Nincs negatív szám"!


    const which_element = tombint.find(number => number < 0);
    if (which_element) {
        task2.innerHTML = which_element;
    } else {
        task2.innerHTML = "Nincs negatív szám";
    }

//    e. (1 pont) A task3 azonosítójú elembe írd ki, hogy mindegyik szám páratlan-e! Ha igen, akkor a "Mindegyik páratlan", ha nem, akkor a "Van páros szám is" szöveg jelenjen meg!

    const all_nubers_odd = tombint.every(number => number % 2 !== 0);
    if (all_nubers_odd) {
        task3.innerHTML = "Mindegyik páratlan";
    } else {
        task3.innerHTML = "Van páros szám is";
    }

    //f. (1 pont) A task4 azonosítójú elembe írd ki a tömbben lévő legnagyobb számot!
    let max = tombint.reduce(function (a, b) {
        return Math.max(a, b);
    }, 0);
    task4.innerHTML = max;


    //g. (1 pont) A task5 azonosítójú elembe írd ki a tömbben lévő egyedi számokat, tehát a többször szereplő számokat pontosan egyszer (pl. [1,2,2,3,1] => [1,2,3])!
    let filteredArray = tombint.filter(function (item, pos) {
        return tombint.indexOf(item) == pos;
    });
    task5.innerHTML = filteredArray;


    //h. (0,5 pont) Ha a szöveges beviteli mezőbe hibás érték kerül, akkor adjuk az error stílusosztályt a
    // //szöveges beviteli mezőnek! Tipp: a tömbbé alakított szöveg minden elemére nézzétek az isNaN függvényt!
    // Helyes: 1,2,3, 1, 2, 3, 1,,3, 1,,3,,
    // Hibás: alma, 1,a,3, 1,a,3a
    console.log("keys");
    for (keys of tombint) {
        if (isNaN(keys)){
            txtNumbers.classList.add("error");
        }else{
            txtNumbers.classList.remove("error");
        }
    }



}

txtNumbers.addEventListener('input', handleWrite)
