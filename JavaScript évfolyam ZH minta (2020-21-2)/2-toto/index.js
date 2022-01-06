//a. (1 pont) Az index.html fájlban található táblázat celláira kattintáskor,
// ha a cella option stílusosztályú, kapjon emellé selected stílusosztályt is! (A nem option osztályú cellákkal nem történik semmi.)


const table = document.querySelector('table');
const guess = document.querySelector('#guess');
const results = document.querySelector('#results');
const correct = document.querySelector('#correct');



/**
 *
 * @param {Node} szulo egy HTML elem querySelectorral kiválasztva (pl. `document.querySelector("ul")`)
 * @param {keyof HTMLElementTagNameMap} gyerek egy CSS szelektor, ami leírja azon elemeket, melyeken szeretnénk futtatni a fgv-t (pl. `"a"`)
 * @param {string} mikor egy esemény, stringként (pl. `"click"`)
 * @param {(ev: Event, target: Node) => null} mit A függvény, amit futtatunk
 */
function delegal(szulo, gyerek, mikor, mit) {
    function esemenyKezelo(ev) {
        const esemenyCelja = ev.target
        const esemenyKezeloje = this
        const legkozelebbiKeresettElem = esemenyCelja.closest(gyerek)

        if (esemenyKezeloje.contains(legkozelebbiKeresettElem)) {
            mit(ev, legkozelebbiKeresettElem)
        }
    }

    szulo.addEventListener(mikor, esemenyKezelo)
}


function valamitCsinal(esemeny, celpont) {
    //a. (1 pont) Az index.html fájlban található táblázat celláira kattintáskor, ha a cella option stílusosztályú, kapjon emellé selected stílusosztályt is! (A nem option osztályú cellákkal nem történik semmi.)
    if (celpont.classList.contains('option')) {
        celpont.classList.add('selected');
    }


    //b. (2 pont) Soronként legfeljebb egy selected cella legyen, amelyikre legutóbb kattintottak!
    let classListArry = [];
    for (const rows of table.rows) {
        //  console.log(rows.classList);
        for (const cell of rows.cells) {


            if (celpont.closest('tr').rowIndex === rows.rowIndex) {
                //     console.log(cell.classList)
                classListArry.push(cell.classList.value);

            }


        }
    }
    // console.log(classListArry)
    for (const rows of table.rows) {
        //  console.log(rows.classList);
        for (const cell of rows.cells) {

            /*
                        if (celpont.closest('tr').rowIndex === rows.rowIndex) {
                            if (celpont.classList.contains('option') && classListArry.contains('option selected')) {
                                celpont.classList.add('selected');
                            }

                        }*/


        }
    }

    //d. (2 pont) A guess azonosítójú elembe írd ki a játékos tippjeit fentről lefelé haladva egyetlen betűsorozatként, ahogyan a mellékelt mintán is
    // látható! Ha valamelyik sorban még nincs tipp jelezve, akkor _ jellel helyettesítsd!
    let INFO = [];
    let innercounter = 0;
    let outercounter = 0;
    for (const rows of table.rows) {
        //console.log(rows);
        innercounter = 0;
        outercounter = 0;
        for (const cell of rows.cells) {
            if (cell.classList.contains('option')) {
                outercounter++;
                if (cell.classList.contains('selected')) {
                    INFO.push(cell.innerText);
                    innercounter++;
                } else {

                    if (innercounter === 0 && outercounter === 3) {
                        INFO.push("_");
                        innercounter = 0;
                    }

                }


            }


        }
    }

    console.log(INFO);
    guess.innerHTML = INFO.join('');

    //e. (2 pont) A results azonosítójú mező tartalmazza a helyes eredményeket.
    // Írd ki a correct azonosítójú elembe, hogy hány meccsre tippelt helyesen a játékos! Ha nem tippelt még minden meccsre, akkor ne íródjon ki semmi!

    let resultValue = results.value.split('');
    let beirtvalue = INFO.join('');
    let helyescnt = 0;
    console.log(resultValue + "ááááááááááááá" + INFO)
    for (let i = 0; i < resultValue.length; i++) {
        if(resultValue[i]==beirtvalue[i]){
            helyescnt++;
        }
    }
    if(helyescnt>0){correct.innerHTML = helyescnt;}


}

// Hívás:

delegal(table, "td", "click", valamitCsinal)