//document.getElementById Lehet használni de nem jobb

const table_selector = document.querySelector("table");
console.log(table_selector);


const last_id = document.querySelector("#last");
const prims = document.querySelector(".prim");
const allPrime = document.querySelectorAll(".prim");
console.log(allPrime); //Node list
allPrime.forEach(e => e.style.color = "orange");

console.log(table_selector.children);

const full_list = document.querySelector("ol");

//Iteration
for (const fullListElement of full_list.children) {
    console.log(fullListElement);
}
//seconsd element
console.log(full_list.children[2])

//children number
console.log(full_list.children.length);


console.log("ITERATION of table");
for (const rows of table_selector.rows) {
    console.log(rows);
    for (const cell of rows.cells) {
        console.log(cell)
        //cell.style.color = "red";
        cell.dataset.number = cell.innerText;
    }
}

console.log("EXACT element");
table_selector.rows[2].cells[2].innerHTML = "<h3>Let's see</h3>";
table_selector.rows[2].cells[2].style.color = "red";

console.log(document.querySelector("ol li").dataset);
for (const fullListKey in document.querySelector("ol li").dataset) {
    console.log(fullListKey);
}


const sand_div = document.querySelector("#sandpit");
sand_div.innerHTML += "<h1>Hello</h1>";
for (let i = 2; i < 5; i++) {
    sand_div.innerHTML += `<h${i}> ${i}. level</h${i}>`;
}

//other way
//Order is necessary!
const button = document.createElement("button");
button.innerHTML = "Push me!";
button.style.color = "red";
sand_div.appendChild(button);

//Make a table

const newTable = document.createElement("table");
for (let i = 0; i < 3; i++) {
    const newLine = document.createElement("tr");
    for (let j = 0; j < 2; j++) {
        const newCell = document.createElement("td");
        newCell.innerText = `${i + 1}. row and, ${j + 1}. column`
        newLine.appendChild(newCell);
    }
    newTable.appendChild(newLine);
}

sand_div.appendChild(newTable);

//Exercise
//https://bucsi.web.elte.hu/#!/webprog/gyak2
/*
FELADAT
Az ELTÓ honvédelme szeretné látni a fegyverek típusát és állapotát ránézésből,
és szeretné hogyha ezek a háttérben is tartalmazva lennének. Készíts egy JS programot
ami az Assault Rifle typusú fegyvereket dőlt betűvel, az Assault carbine típusú fegyvereket félkövéren
a Sniper rifle típusú fegyvereket pedig dőlt betűvel félkövéren jeleníti meg. A fegyvereket egy rendezetlen
 lista tartalmazza (unordered list). Ha a fegyver durability-je 70% alatt van akkor a betűszín legyen piros,
  ha felette akkor legyen zöld. A honlapon csak a fegyver neve jelenjen meg, viszont egy egy dataset tartalmazza
   a másik két attribútumot.
 */

const weapons = [
    {
        weapon: 'Mosin',
        type: 'Sniper rifle',
        durability: 92
    },
    {
        weapon: 'Vepr KM/VPO-136',
        type: 'Assault Rifle',
        durability: 69
    },
    {
        weapon: 'AKM',
        type: 'Assault Rifle',
        durability: 98
    },
    {
        weapon: 'M4A1',
        type: 'Assault Rifle',
        durability: 100
    },
    {
        weapon: 'SKS',
        type: 'Assault carbine',
        durability: 55
    },
    {
        weapon: 'Kel-Tec RFB',
        type: 'Assault carbine',
        durability: 100
    },
    {
        weapon: 'SV-98',
        type: 'Sniper rifle',
        durability: 87
    }
]

const query_selector_div = document.querySelector("#exercise");
const list = document.createElement("ul");
weapons.forEach(w => {
    const item = document.createElement("li")
    item.innerText = w.weapon;
    item.innerText += "\t\t[" + w.type;
    item.innerText += "\t" + w.durability + "]";
    if (w.type === "Assault Rifle") {
        item.style.fontStyle = "italic"
        console.log("italic")
    } if (w.type === "Assault carbine") {
        item.style.fontWeight = "bold"
        console.log("bold")
    }  if(w.type === "Sniper rifle"){
        item.style.fontStyle = "italic"
        item.style.fontWeight = "bold"
    }
    if(w.durability < 70){
       item.style.color = "red";
    }else{
       item.style.color = "green";
    }


        list.appendChild(item);
})
query_selector_div.appendChild(list);



