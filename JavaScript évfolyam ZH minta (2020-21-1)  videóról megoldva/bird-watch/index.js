const placesInput = document.querySelector('#places')
const speciesInput = document.querySelector('#species')
const button = document.querySelector('#btn-generate')
const tableContainer = document.querySelector('#table-container')
const task1 = document.querySelector('#task-1')
const task2 = document.querySelector('#task-2')
const task3 = document.querySelector('#task-3')
const task4 = document.querySelector('#task-4')
const task5 = document.querySelector('#task-5')

let matrix = []

button.addEventListener('click', onGenerate)

function onGenerate(e) {
    const n = placesInput.valueAsNumber
    const m = speciesInput.valueAsNumber

    matrix = generateMatrix(n, m)
    console.log(matrix);
    generateTable(n, m, matrix);


}

function generateMatrix(n, m) {
    const matrix = []
    for (let i = 0; i < n; i++) {
        const row = []
        for (let j = 0; j < m; j++) {
            row.push(0)
        }
        matrix.push(row)
    }
    return matrix
}

function generateTable(n, m, matrix) {
    const tbl = document.createElement("table");
    for (let i = 0; i < n; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < m; j++) {
            const cell = document.createElement("td");
            cell.innerHTML = 0;
            cell.dataset.sor = i;
            cell.dataset.oszlop = j;


            row.appendChild(cell);
        }
        tbl.appendChild(row);


        tableContainer.appendChild(tbl);

    }

}


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
function onClick(e, t) {
    console.log(`sor: ${t.dataset.sor}, oszlop: ${t.dataset.oszlop}`)
    matrix[t.dataset.sor][t.dataset.oszlop]++;
    t.innerHTML = matrix[t.dataset.sor][t.dataset.oszlop];
    task1_f();
    task2_f();
    task3_f();
}

delegal(tableContainer, "td", "click", onClick);


function task1_f() {
    /*
     for (let oszlop = 0; oszlop < matrix.length + 1; oszlop++) {
         if (matrix[0][oszlop] !== 0) {

         } else {

         }
     }
     */


    if (matrix[0].some(el => el !== 0)) {
        task1.innerHTML = "Yes";
    } else {
        task1.innerHTML = "No";
    }

}




function task2_f() {
    /*
    g. (1 pont) A task-2 azonosítójú elembe írd ki, hogy hány helységben láttak valamelyik madárfajból 10-nél többet (hány sorban van olyan cella, aminek az értéke nagyobb, mint 10)!
     */
    let row_cnt = 0;
    for (let i = 0; i < matrix.length; i++) {
        let mix = matrix[i];
        for (let j = 0; j < mix.length; j++) {
            if(matrix[i][j]>5){
                row_cnt++;
                break;
            }
        }
    }
    task2.innerHTML = row_cnt;

    //orai megoldas:
  //  matrix.reduce((s,x)=>s+numOf10(x),0)


}
/*
function numOf10(row) {
  return   row.filter(el => el === 10).length
}*/

function task3_f() {

    /*
    . (1 pont) A task-3 azonosítójú elembe írd ki egy olyan helység sorszámát, ahol a madár se jár (egyik madárfajból se észleltek egyet sem)!
    Ha nem létezik ilyen helység, akkor ugyanide írd ki, hogy "No"!

     */
///find index egy sorszámot ad vissza
   const place = matrix.findIndex(sor=>!(sor.some(el => el !== 0)));
   if(place>-1){
       task3.innerHTML = parseInt(place) + 1;
   }else{
       task3.innerHTML = "No";
   }

}