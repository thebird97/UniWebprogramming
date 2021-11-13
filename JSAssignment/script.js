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


/*
Képek
01 kanyar 2db nyílás
02 T 3 db nyílás
03 egyenes 2db nyílás

 */
/*
13 db egyenes
15 db kanyar
6 db hármas elágazás

 */
const STRAIGHT_NUMBER = 13;
const CURVE_NUMBER = 15;
const T_NUMBER = 6;



const SHAPES = {
    CURVE: "01.png",
    TSHAPE: "02.png",
    STRAIGHT: "03.png",

    //With player:
    CURVEP: "01P.png",
    TSHAPEP: "02P.png",
    STRAIGHTP: "02P.png",

    //WITH treasure
    CURVET: "01T.png",
    TSHAPET: "02T.png",
    STRAIGHTT: "02T.png",
}

/**
 * RoomShape
 * isOPen LEFT, UP, RIGHT, DOWN
 *
 */

class RoomShape {
    shape_type;
    isPLAYER_IN;
    isTREASURE_IN

    isOPEN_LEFT
    isOPEN_UP
    isOPEN_RIGHT
    isOPEN_DOWN

    constructor(shape_type, isPLAYER_IN, isTREASURE_IN, isConstant, isOPEN_LEFT, isOPEN_UP, isOPEN_RIGHT, isOPEN_DOWN) {
        this.shape_type = shape_type; //type SHAPES.CURVE
        this.isPLAYER_IN = isPLAYER_IN; // van-e rajta játékos
        this.isTREASURE_IN = isTREASURE_IN; // van-e rajta kincs
        this.isConstant = isConstant; // páratlan szoba-e


        this.isOPEN_LEFT = isOPEN_LEFT;
        this.isOPEN_RIGHT = isOPEN_RIGHT;
        this.isOPEN_UP = isOPEN_UP;
        this.isOPEN_DOWN = isOPEN_DOWN;

    }

    getImage() {
        //NOTHING IN PLACE
        //Lecserélem
        if (this.isPLAYER_IN === false && this.isTREASURE_IN == false) {
            //KIncses vagy játékos karika lecserélése simára
            if (this.shape_type === SHAPES.CURVEP || this.shape_type === SHAPES.CURVET) {
                this.shape_type = SHAPES.CURVE;
            }

            //T-s karika simára
            if (this.shape_type === SHAPES.TSHAPEP || this.shape_type === SHAPES.TSHAPET) {
                this.shape_type = SHAPES.TSHAPE;
            }

            // STRAIGHTT  simára
            if (this.shape_type === SHAPES.STRAIGHTP || this.shape_type === SHAPES.STRAIGHTT) {
                this.shape_type = SHAPES.STRAIGHT;
            }

        }


        //PLAYER IN PLACE
        //PLAYER RÁRAKÁS
        if (this.isPLAYER_IN === true) {
            if (this.shape_type === SHAPES.CURVE) {
                this.shape_type = SHAPES.CURVEP;
            }
            if (this.shape_type === SHAPES.TSHAPE) {
                this.shape_type = SHAPES.TSHAPEP;
            }
            if (this.shape_type === SHAPES.STRAIGHT) {
                this.shape_type = SHAPES.STRAIGHTP;
            }

        }

        //KINCS RÁRAKÁS
        if (this.isTREASURE_IN === true) {
            if (this.shape_type === SHAPES.CURVE) {
                this.shape_type = SHAPES.CURVET;
            }
            if (this.shape_type === SHAPES.TSHAPE) {
                this.shape_type = SHAPES.TSHAPET;
            }
            if (this.shape_type === SHAPES.STRAIGHT) {
                this.shape_type = SHAPES.STRAIGHTT;
            }

        }


        return this.shape_type;
    }

    getRotation_Degree() {

        let rotation_degree ;
            if(this.shape_type === SHAPES.CURVE){
                if(this.isOPEN_LEFT == true &&  this.isOPEN_UP == true && this.isOPEN_RIGHT == true && this.isOPEN_DOWN ==true){console.log("error"); return rotation_degree = 'rotate(0deg)';}
                //DEAULT 0 forgatás
                if(this.isOPEN_LEFT == false &&  this.isOPEN_UP == false && this.isOPEN_RIGHT == true && this.isOPEN_DOWN ==false){return rotation_degree = 'rotate(0deg)';}
                //BALALSÓ 270
                if(this.isOPEN_LEFT == false &&  this.isOPEN_UP == true && this.isOPEN_RIGHT == true && this.isOPEN_DOWN ==false){return rotation_degree = 'rotate(270deg)';}
                //JOBB FELSŐ 90
                if(this.isOPEN_LEFT == true &&  this.isOPEN_UP == false && this.isOPEN_RIGHT == false && this.isOPEN_DOWN ==true){return rotation_degree = 'rotate(90deg)';}
                //JOBB ALSÓ 180
                if(this.isOPEN_LEFT == true &&  this.isOPEN_UP == true && this.isOPEN_RIGHT == false && this.isOPEN_DOWN ==false){return rotation_degree = 'rotate(180deg)';}
            }

        if(this.shape_type === SHAPES.TSHAPE){
            if(this.isOPEN_LEFT == true &&  this.isOPEN_UP == true && this.isOPEN_RIGHT == true && this.isOPEN_DOWN ==true){console.log("error"); return rotation_degree = 'rotate(0deg)';}
            if(this.isOPEN_LEFT == true &&  this.isOPEN_UP == false && this.isOPEN_RIGHT == true && this.isOPEN_DOWN ==true){return rotation_degree = 'rotate(0deg)';}
        }



            return rotation_degree
    }
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
                ///CONSTANT ELEMENT GENERATE:

                //A szélső négy fix kép

                //BALFELSO
                if (row_value === 1 && column_value === 1) {
                    let ROOM11 = new RoomShape(SHAPES.CURVE, false, false, true, false, false, true, true);
                    img.src = ROOM11.getImage();
                    img.style.transform = ROOM11.getRotation_Degree();
                    cell.appendChild(img);
                }

                //BAL ALSÓ
                if (row_value === 7 && column_value === 1) {
                    let ROOM71 = new RoomShape(SHAPES.CURVE, false, false, true, false, true, true, false);
                    img.src = ROOM71.getImage();
                    img.style.transform = ROOM71.getRotation_Degree();
                    cell.appendChild(img);
                }

                //JOBB FELSŐ
                if (row_value === 1 && column_value === 7) {
                    let ROOM17 = new RoomShape(SHAPES.CURVE, false, false, true, true, false, false, true);
                    img.src = ROOM17.getImage();
                    img.style.transform = ROOM17.getRotation_Degree();
                    cell.appendChild(img);
                }

                //JOBB ALSÓ
                if (row_value === 7 && column_value === 7) {
                    let ROOM77 = new RoomShape(SHAPES.CURVE, false, false, true, true, true, false, false);
                    img.src = ROOM77.getImage();
                    img.style.transform = ROOM77.getRotation_Degree();
                    cell.appendChild(img);

                }
                //Felső 2 középő:

                if (row_value === 1 && column_value === 3) {
                    let ROOM13 = new RoomShape(SHAPES.TSHAPE, false, false, true, true, false, true, true);
                    img.src = ROOM13.getImage();
                    img.style.transform = ROOM13.getRotation_Degree();
                    cell.appendChild(img);
                }

                if (row_value === 1 && column_value === 5) {
                    let ROOM15 = new RoomShape(SHAPES.TSHAPE, false, false, true, true, false, true, true);
                    img.src = ROOM15.getImage();
                    img.style.transform = ROOM15.getRotation_Degree();
                    cell.appendChild(img);
                }



                //Alsó 2 középső
                if (row_value === 7 && column_value === 3) {
                    img.src = "02.png";
                    img.style.transform = 'rotate(180deg)';
                    cell.appendChild(img);
                }
                if (row_value === 7 && column_value === 5) {
                    img.src = "02.png";
                    img.style.transform = 'rotate(180deg)';
                    cell.appendChild(img);
                }

                //BAL 2 Középső
                if (row_value === 3 && column_value === 1) {
                    img.src = "02.png";
                    img.style.transform = 'rotate(270deg)';
                    cell.appendChild(img);
                }
                if (row_value === 5 && column_value === 1) {
                    img.src = "02.png";
                    img.style.transform = 'rotate(270deg)';
                    cell.appendChild(img);
                }

                //JOBB 2 középső
                if (row_value === 3 && column_value === 7) {
                    img.src = "02.png";
                    img.style.transform = 'rotate(90deg)';
                    cell.appendChild(img);
                }
                if (row_value === 5 && column_value === 7) {
                    img.src = "02.png";
                    img.style.transform = 'rotate(90deg)';
                    cell.appendChild(img);
                }

                //KÖZEPE
                //BAL FELSŐ
                if (row_value === 3 && column_value === 3) {
                    img.src = "02.png";
                    img.style.transform = 'rotate(270deg)';
                    cell.appendChild(img);
                }
                //KÖZEPE
                //JOBB FELSŐ
                if (row_value === 3 && column_value === 5) {
                    img.src = "02.png";
                    //NO rotation
                    cell.appendChild(img);
                }

                //KÖZEPE
                //BAL ALSÓ
                if (row_value === 5 && column_value === 3) {
                    img.src = "02.png";
                    img.style.transform = 'rotate(180deg)';
                    cell.appendChild(img);
                }

                //KÖZEPE
                //JOBB ALSÓ
                if (row_value === 5 && column_value === 5) {
                    img.src = "02.png";
                    img.style.transform = 'rotate(90deg)';
                    cell.appendChild(img);
                }


            } else {
               // img.src = "03.png";
               // cell.appendChild(img);

                //cellText = document.createTextNode("row: " + row_value + ", column: " + column_value);
                //cellText = document.createTextNode(row_value + ", " + column_value);
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