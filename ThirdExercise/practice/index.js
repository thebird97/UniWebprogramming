const szamokinput = document.querySelector("#szamok")
const megoldbutton = document.querySelector("#megold");
const eredmeny = document.querySelector("#eredmeny");

szamokinput.addEventListener("change", calculeteRings);
megoldbutton.addEventListener("click", calculeteRings);

function calculeteRings() {
    let counter = 0;
    let input_ertek = szamokinput.value;

    let digits = input_ertek.toString().split('');
    let realDigits = digits.map(Number)
    console.log(realDigits);

    for (const realDigit of realDigits) {
        console.log("real " + realDigit);
        if (realDigit == 0 || realDigit == 6 || realDigit == 9) {
            counter++;
        }
        if (realDigit == 8) {
            counter += 2;
        }
    }

    eredmeny.innerHTML = ""
    eredmeny.innerHTML = szamokinput.value + " -> " + counter;
}

//2. feladat
const oktatok = [
    {
        nev: "Márton Gergő",
        rendesCsoportok: 1,
        angolCsoportok: 1
    },
    {
        nev: "Győztes Tamás",
        rendesCsoportok: 0,
        angolCsoportok: 2
    },
    {
        nev: "Rendes Sándor",
        rendesCsoportok: 5,
        angolCsoportok: 0
    },
    {
        nev: "Visno Vikthor",
        rendesCsoportok: 3,
        angolCsoportok: 0
    },
    {
        nev: "Horgász Erik",
        rendesCsoportok: 2,
        angolCsoportok: 1
    }
]


let myTableDiv = document.querySelector("#feladat2");
let table = document.createElement('TABLE');
table.border = '1';

let tableBody = document.createElement('TBODY');
table.appendChild(tableBody);

let tr = document.createElement('TR');
tableBody.appendChild(tr);

let td = document.createElement('TD');
td.width = '75';
td.appendChild(document.createTextNode('Ovóbácsi neve:' ));
tr.appendChild(td);

let td2 = document.createElement('TD');
td2.width = '75';
td2.appendChild(document.createTextNode('Ovóbácsi heti fizetése:' ));
tr.appendChild(td2);

oktatok.forEach(o => {
    if (o.nev.includes('t')) {
        let tr = document.createElement('TR');
        tableBody.appendChild(tr);

        let td = document.createElement('TD');
        td.width = '75';
        td.appendChild(document.createTextNode(o.nev ));
        tr.appendChild(td);

        let td2 = document.createElement('TD');
        td2.width = '75';
        let payment = o.rendesCsoportok;
        let alap = o.rendesCsoportok*2235;
        let bonusOrak = o.angolCsoportok*(o.rendesCsoportok/2)*1490
        let fullfizu = alap+bonusOrak;
        td2.appendChild(document.createTextNode( fullfizu));
        tr.appendChild(td2);

    }
})

myTableDiv.appendChild(table);

