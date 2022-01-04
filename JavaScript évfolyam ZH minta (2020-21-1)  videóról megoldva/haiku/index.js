const editor = document.querySelector("#haiku-editor");
const numberOfChars = document.querySelector("#number-of-characters");
const numberOfRows = document.querySelector("#number-of-rows");
const wowPerRow = document.querySelector("#vowels-per-row");
const addButton = document.querySelector("#btn-copy-haiku");
const addTothis = document.querySelector("#haikus");
const mgh = "aáeéiíoóöőuúüű";


function mgh_e(char) {
    return mgh.indexOf(char) !== -1;
}

function writeToConsole() {
    console.log(editor.value);
    numberOfChars.innerHTML = editor.value.length;
    let lines = editor.value.split("\n");
    numberOfRows.innerHTML = lines.length;

    /*
    [ ] d. (1 pont) orai megold
     const sorok = editor.value.match(/\n/g) || []
       sorok.length;


     */
    /*
    e. (1 pont) A szerkesztőben gépelve írd ki a konzolra az első sorban lévő magánhangzók számát! Segítségképpen a magyar nyelv magánhangzói: aáeéiíoóöőuúüű.
     */

    console.log("első sor mgh " + Array.from(editor.value.split("\n")[0]).reduce((s, x) => mgh_e(x) ? s + 1 : s, 0));

    const wow1 = Array.from(editor.value.split("\n")[0]).reduce((s, x) => (mgh_e(x) ? s + 1 : s), 0);
    const wow2 = Array.from(editor.value.split("\n")[1]).reduce((s, x) => (mgh_e(x) ? s + 1 : s), 0);
    const wow3 = Array.from(editor.value.split("\n")[2]).reduce((s, x) => (mgh_e(x) ? s + 1 : s), 0);


    wowPerRow.children[0].innerHTML = wow1;
    wowPerRow.children[1].innerHTML = wow2;
    wowPerRow.children[2].innerHTML = wow3;

    //Ha 3 sor van, és soronként 5-7-5 szótagszám, akkor add a szöveges beviteli mezőt
    if (lines.length === 3 && wow1 === 5 && wow2 === 7 && wow3 === 5) {
        //haiku
        editor.parentElement.classList.add("haiku");
    }


    //h. (1 pont) Ha jól alkalmaztad a stílusosztályt, akkor haiku sorában megjelent egy gomb. Erre kattintva a szerkesztő tartalmát add hozzá a haikus azonosítójú elemhez <pre> elemek között (ld. az oldalon lévő példákat)!

}

editor.addEventListener("input", writeToConsole);

function addToList() {
    const uj = document.createElement("pre");
    uj.innerHTML = editor.value;
    addTothis.appendChild(uj);
}

addButton.addEventListener("click", addToList);
