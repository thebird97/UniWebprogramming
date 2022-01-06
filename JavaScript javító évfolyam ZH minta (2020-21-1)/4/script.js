/*
a. (2 pont) Az index.html-ben megtalálható gombra kattintva jelenjen meg egy rejtett
Extend gomb, illetve jöjjön létre egy (N+1)x(N+1) méretű táblázat, ahol N az oldalon megadható táblaméretet jelenti!

 */

const startButton = document.querySelector("#start");
const numberInput = document.querySelector("input");
const table = document.querySelector("table")
const extend = document.querySelector("#extend")
const cont = document.querySelector("#controls")


let n = parseInt(numberInput.value);

function startFunction() {
    cont.style.display = "none"
    extend.style.display = "inline"


    const newTable = document.createElement("table");
    for (let i = 0; i <= n; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j <= n; j++) {
            //b. (1 pont) A táblázat bal felső cellája legyen üres! Az első sorban a második oszloptól kezdve jelenítsd meg az A, B, C, ... betűket! Tipp: használd ehhez a String.fromCharCode(65) műveletet!

            const td = document.createElement("td");
            if (i == 0 && j > 0) td.innerText = String.fromCharCode(65 + j - 1)
            //c. (1 pont) Az első oszlopban a második sortól kezdődően jelenítsd meg az 1, 2, 3, ... számokat!
            else if (j == 0 && i > 0) td.innerText = i;
            else if (j != 0 && i != 0) {
                //d. (1 pont) A táblázat többi cellája legyen üres, és alkalmazd rájuk a .border stílusosztályt!
                td.classList.add("border")
                td.style.backgroundColor = "white"
            }


            tr.appendChild(td);
        }
        newTable.appendChild(tr);
    }

    table.appendChild(newTable);

}

startButton.addEventListener('click', startFunction);

//e. (1 pont) A .border stílusosztályú cellákra kattintva változzon meg az adott cella háttérszíne fehérről feketére vagy feketéről fehérre!


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

    if (celpont.classList.contains('border')) {
        if (celpont.style.backgroundColor == 'white') {
            celpont.style.backgroundColor = 'black';
        } else {
            celpont.style.backgroundColor = 'white';
        }
    }
}

// Hívás:

delegal(table, "td", "click", valamitCsinal);


///f. (1 pont) Az Extend table gombra kattintva bővüljön ki a meglévő táblázat egy oszloppal,
// /amelynek fejlécét (a betűt) helyesen jelenítsd meg! (Szükség esetén akár teljesen újragenerálhatod a táblázatot, de a beállított mezők színe maradjon meg!)


function extendF() {
    table.querySelectorAll("tr").forEach(function (tr, i) {
        let black = Array.from(tr.querySelectorAll("td")).filter(td => td.style.backgroundColor == "black").length
        let td = document.createElement("td")
        if (i == 0) {
            td.innerText = String.fromCharCode(65 + n)
        } else {
            //g. (1 pont) A hozzáadott mezők háttérszínét úgy állítsd be feketére vagy fehérre, hogy minden sorban páros számú fekete mező legyen!
            td.style.backgroundColor = black % 2 == 0 ? "white" : "black"
            td.classList.add("border")
        }
        tr.appendChild(td)
    })
    n++
}

extend.addEventListener('click', extendF)