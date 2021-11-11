function readTextFile(file) {
    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    let allText;
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                allText = rawFile.responseText;

            }
        }
    }
    rawFile.send(null);

    return allText;
}

function generate_table() {

    const table_size = 7;


    body = gametablediv;
    // creates a <table> element and a <tbody> element
    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");

    // creating all cells
    for (let i = 0; i < table_size; i++) {
        // creates a table row
        let row = document.createElement("tr");
        for (let j = 0; j < table_size; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            let cell = document.createElement("td");
            let row_value = (i + 1);
            let column_value = (j + 1);
            let cellText;
            let img = document.createElement('img');
            if (row_value % 2 !== 0 && column_value % 2 !== 0) {
                //cellText = document.createTextNode("fix");
                if(row_value===1 && column_value ===1){
                    img.src = "\\pics\\01.png";
                    cell.appendChild(img);
                }
            } else {
                //cellText = document.createTextNode("row: " + row_value + ", column: " + column_value);
                cellText = document.createTextNode(row_value + ", " + column_value);
            }
            //cell.appendChild(img);
            //cell.appendChild(cellText);
            row.appendChild(cell);
        }

        // add the row to the end of the table body
        tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");
}
//////////CONSTANTS:

const text = readTextFile("description.txt");
const startButton = document.querySelector("#start");
const descriptionButton = document.querySelector("#description");
const gametablediv = document.querySelector(".gametable");


const OPEN_PART = ["LEFT","UP", "RIGHT", "DOWN"];
const CLOSED_PART = ["LEFT","UP", "RIGHT", "DOWN"];




function startGame() {
    //table.style.display = "block";
    gametablediv.innerHTML = "";
    generate_table();

}

function showDescription() {
    const descriptionDiv = document.querySelector(".description_div");
    if (descriptionDiv.style.display === "none") {
        descriptionDiv.style.display = "block";
        descriptionButton.value = "A játék leírása (HIDE)";

    } else {
        descriptionDiv.innerHTML = "";
        descriptionDiv.innerHTML += "<p>";
        descriptionDiv.innerHTML += text;
        descriptionDiv.innerHTML += "</p>";
        descriptionButton.value = "A játék leírása (SHOW)";
        descriptionDiv.style.display = "none";


    }


}


startButton.addEventListener('click', startGame);
descriptionButton.addEventListener('click', showDescription);