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

// A függvény, ami fut:
function valamitCsinal(esemeny, celpont) {
    if (celpont.classList.contains("done")) {
        if (!celpont.nextElementSibling || !celpont.nextElementSibling.classList.contains("done")) {
            celpont.classList.remove("done");
        }
    } else {
        celpont.classList.add("done");
        ///d. (1,5 pont) Ha egy lépésre kattintottunk, akkor az előtte lévő el nem végzett lépések is legyenek ellátva done stílusosztállyal! Segítség: használható például a previousElementSibling (Linkek egy külső oldalra) metódus a testvéreken való lépkedésre.
        markPrev(celpont);
        /*
        e. (1 pont) Ha egy végzettnek jelölt listaelemre kattintunk, akkor vegyük le a done stílusosztályt, de csak akkor, ha utána még egyik lépés sincs elvégezve a teendőn belül! Segítség: használható például a nextElementSibling (Linkek egy külső oldalra) metódus a testvéreken való lépkedésre.

         */


    }
    //. (1 pont) Ha egy teendőn belül az összes lépés elvégzett, akkor a teendő is kapja meg a done stílusosztályt.
    const todoParent = celpont.parentElement.parentElement;
    if (allDone(todoParent)) {
        todoParent.classList.add("done");
    }
}


function allDone(todoParent) {
    return (todoParent.querySelectorAll("li").length === todoParent.querySelectorAll("li.done").length);

}


function markPrev(t) {
    let elozo = t.previousElementSibling;
    if (elozo && !elozo.classList.contains("done")) {
        elozo.classList.add("done");
        markPrev(elozo);
    }
}

function noNextDone(t) {
    const kovetkezo = t.nextElementSibling;
    if (!kovetkezo) {
        return false;
    }
    return (kovetkezo.classList.contains("done") && noNextDone(kovetkezo));


}

// Hívás:
const todos = document.querySelector("ol");
delegal(todos, "li ul li", "click", valamitCsinal);