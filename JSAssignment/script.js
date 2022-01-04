/*function readTextFile(file) {
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

*/
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
const MAX_CURVE_NUMBER = 15;
const MAX_T_NUMBER = 6;
const MAX_STRAIGHT_NUMBER = 13;

let curve_counter = 0;
let t_counter = 0;
let straight_counter = 0;

const table_size = 7;
let treasureCOLLECTEDCOUNTER = 0


const SHAPES = {
    CURVE: "01.png",
    TSHAPE: "02.png",
    STRAIGHT: "03.png",

    //With player:
    CURVEP: "01P.png",
    TSHAPEP: "02P.png",
    STRAIGHTP: "03P.png",

    //WITH treasure
    CURVET: "01T.png",
    TSHAPET: "02T.png",
    STRAIGHTT: "03T.png",
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
        //type SHAPES.CURVE
        // van-e rajta játékos
        // van-e rajta kincs
        // páratlan szoba-e


        this._shape_type = shape_type;
        this._isPLAYER_IN = isPLAYER_IN;
        this._isTREASURE_IN = isTREASURE_IN;
        this._isConstant = isConstant;
        this._isOPEN_LEFT = isOPEN_LEFT;
        this._isOPEN_UP = isOPEN_UP;
        this._isOPEN_RIGHT = isOPEN_RIGHT;
        this._isOPEN_DOWN = isOPEN_DOWN;

    }

    get_shape_type() {
        return this._shape_type;
    }

    set_shape_type(value) {
        this._shape_type = value;
    }

    get_isPLAYER_IN() {
        return this._isPLAYER_IN;
    }

    set_isPLAYER_IN(value) {
        this._isPLAYER_IN = value;
    }

    get_isTREASURE_IN() {
        return this._isTREASURE_IN;
    }

    set_isTREASURE_IN(value) {
        this._isTREASURE_IN = value;
    }

    get_isConstant() {
        return this._isConstant;
    }

    set_isConstant(value) {
        this._isConstant = value;
    }

    get_isOPEN_LEFT() {
        return this._isOPEN_LEFT;
    }

    set_isOPEN_LEFT(value) {
        this._isOPEN_LEFT = value;
    }

    get_isOPEN_UP() {
        return this._isOPEN_UP;
    }

    set_isOPEN_UP(value) {
        this._isOPEN_UP = value;
    }

    get_isOPEN_RIGHT() {
        return this._isOPEN_RIGHT;
    }

    set_isOPEN_RIGHT(value) {
        this._isOPEN_RIGHT = value;
    }

    get_isOPEN_DOWN() {
        return this._isOPEN_DOWN;
    }

    set_isOPEN_DOWN(value) {
        this._isOPEN_DOWN = value;
    }

    getImage() {
        //NOTHING IN PLACE
        //Lecserélem
        if (this._isPLAYER_IN === false && this._isTREASURE_IN == false) {
            //KIncses vagy játékos karika lecserélése simára
            if (this._shape_type === SHAPES.CURVEP || this._shape_type === SHAPES.CURVET) {
                this._shape_type = SHAPES.CURVE;
            }

            //T-s karika simára
            if (this._shape_type === SHAPES.TSHAPEP || this._shape_type === SHAPES.TSHAPET) {
                this._shape_type = SHAPES.TSHAPE;
            }

            // STRAIGHTT  simára
            if (this._shape_type === SHAPES.STRAIGHTP || this._shape_type === SHAPES.STRAIGHTT) {
                this._shape_type = SHAPES.STRAIGHT;
            }

        }


        //PLAYER IN PLACE
        //PLAYER RÁRAKÁS
        if (this._isPLAYER_IN === true) {
            if (this._shape_type === SHAPES.CURVE) {
                this._shape_type = SHAPES.CURVEP;
            }
            if (this._shape_type === SHAPES.TSHAPE) {
                this._shape_type = SHAPES.TSHAPEP;
            }
            if (this._shape_type === SHAPES.STRAIGHT) {
                this._shape_type = SHAPES.STRAIGHTP;
            }

        }

        //KINCS RÁRAKÁS
        if (this._isTREASURE_IN === true) {
            if (this._shape_type === SHAPES.CURVE) {
                this._shape_type = SHAPES.CURVET;
            }
            if (this._shape_type === SHAPES.TSHAPE) {
                this._shape_type = SHAPES.TSHAPET;
            }
            if (this._shape_type === SHAPES.STRAIGHT) {
                this._shape_type = SHAPES.STRAIGHTT;
            }

        }


        return this._shape_type;
    }

    getRotation_Degree() {

        let rotation_degree = 'rotate(0deg)';
        if (this._shape_type === SHAPES.CURVE || this._shape_type === SHAPES.CURVEP || this._shape_type === SHAPES.CURVET) {
            if (this._isOPEN_LEFT === true && this._isOPEN_UP === true && this._isOPEN_RIGHT === true && this._isOPEN_DOWN === true) {
                console.log("error" + SHAPES.CURVE);
                return rotation_degree = 'rotate(0deg)';
            }
            //DEAULT 0 forgatás
            if (this._isOPEN_LEFT === false && this._isOPEN_UP === false && this._isOPEN_RIGHT === true && this._isOPEN_DOWN === false) {
                return rotation_degree = 'rotate(0deg)';
            }
            //BALALSÓ 270
            if (this._isOPEN_LEFT === false && this._isOPEN_UP === true && this._isOPEN_RIGHT === true && this._isOPEN_DOWN === false) {
                return rotation_degree = 'rotate(270deg)';
            }
            //JOBB FELSŐ 90
            if (this._isOPEN_LEFT === true && this._isOPEN_UP === false && this._isOPEN_RIGHT === false && this._isOPEN_DOWN === true) {
                return rotation_degree = 'rotate(90deg)';
            }
            //JOBB ALSÓ 180
            if (this._isOPEN_LEFT === true && this._isOPEN_UP === true && this._isOPEN_RIGHT === false && this._isOPEN_DOWN === false) {
                return rotation_degree = 'rotate(180deg)';
            }
        }

        if (this._shape_type === SHAPES.TSHAPE || this._shape_type === SHAPES.TSHAPEP || this._shape_type === SHAPES.TSHAPET) {

            if (this._isOPEN_LEFT === true && this._isOPEN_UP === true && this._isOPEN_RIGHT === true && this._isOPEN_DOWN === true) {
                console.log("error" + SHAPES.CURVE);
                return rotation_degree = 'rotate(0deg)';
            }
            if (this._isOPEN_LEFT === true && this._isOPEN_UP === false && this._isOPEN_RIGHT === true && this._isOPEN_DOWN === true) {
                return rotation_degree = 'rotate(0deg)';
            }
            if (this._isOPEN_LEFT === true && this._isOPEN_UP === true && this._isOPEN_RIGHT === true && this._isOPEN_DOWN === false) {
                return rotation_degree = 'rotate(180deg)';
            }
            if (this._isOPEN_LEFT === false && this._isOPEN_UP === true && this._isOPEN_RIGHT === true && this._isOPEN_DOWN === true) {
                return rotation_degree = 'rotate(270deg)';
            }
            if (this._isOPEN_LEFT === true && this._isOPEN_UP === true && this._isOPEN_RIGHT === false && this._isOPEN_DOWN === true) {
                return rotation_degree = 'rotate(90deg)';
            }

        }

        if (this._shape_type === SHAPES.STRAIGHT || this._shape_type === SHAPES.STRAIGHTP || this._shape_type === SHAPES.STRAIGHTT) {

            if (this._isOPEN_LEFT === true && this._isOPEN_UP === true && this._isOPEN_RIGHT === true && this._isOPEN_DOWN === true) {
                console.log("error" + SHAPES.STRAIGHT);
                return rotation_degree = 'rotate(0deg)';
            }
            if (this.isOPEN_LEFT === true && this.isOPEN_UP === true && this._isOPEN_RIGHT === true && this._isOPEN_DOWN === false) {
                console.log("error" + SHAPES.STRAIGHT);
                return rotation_degree = 'rotate(0deg)';
            }


            if (this._isOPEN_LEFT === true && this._isOPEN_UP === false && this._isOPEN_RIGHT === true && this._isOPEN_DOWN === false) {
                return rotation_degree = 'rotate(0deg)';
            }

            if (this._isOPEN_LEFT === false && this._isOPEN_UP === true && this._isOPEN_RIGHT === false && this._isOPEN_DOWN === true) {
                return rotation_degree = 'rotate(90deg)';
            }


        }


        return rotation_degree
    }
}


let matrix = [];

for (let i = 1; i < table_size + 1; i++) {
    matrix[i] = [];
    for (let j = 1; j < table_size + 1; j++) {
        matrix[i][j] = undefined;
    }
}

/*
for (let i = 0; i < table_size+1; i++) {
    console.log("\n");
    for(let j=0; j<table_size+1; j++) {
        console.log("[" + i + "][" + j + "] ");
    }
}
*/

let KIMARADTSZOBA = new RoomShape(undefined, false, false, false, undefined, undefined, undefined, undefined);

function generate_table_without_player_and_treasure() {


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
                    matrix[row_value][column_value] = ROOM11;

                }

                //BAL ALSÓ
                if (row_value === 7 && column_value === 1) {
                    let ROOM71 = new RoomShape(SHAPES.CURVE, false, false, true, false, true, true, false);
                    img.src = ROOM71.getImage();
                    img.style.transform = ROOM71.getRotation_Degree();
                    cell.appendChild(img);
                    matrix[row_value][column_value] = ROOM71;
                }

                //JOBB FELSŐ
                if (row_value === 1 && column_value === 7) {
                    let ROOM17 = new RoomShape(SHAPES.CURVE, false, false, true, true, false, false, true);
                    img.src = ROOM17.getImage();
                    img.style.transform = ROOM17.getRotation_Degree();
                    cell.appendChild(img);
                    matrix[row_value][column_value] = ROOM17;
                }

                //JOBB ALSÓ
                if (row_value === 7 && column_value === 7) {
                    let ROOM77 = new RoomShape(SHAPES.CURVE, false, false, true, true, true, false, false);
                    img.src = ROOM77.getImage();
                    img.style.transform = ROOM77.getRotation_Degree();
                    cell.appendChild(img);
                    matrix[row_value][column_value] = ROOM77;

                }
                //Felső 2 középő:

                if (row_value === 1 && column_value === 3) {
                    let ROOM13 = new RoomShape(SHAPES.TSHAPE, false, false, true, true, false, true, true);
                    img.src = ROOM13.getImage();
                    img.style.transform = ROOM13.getRotation_Degree();
                    cell.appendChild(img);
                    matrix[row_value][column_value] = ROOM13;
                }

                if (row_value === 1 && column_value === 5) {
                    let ROOM15 = new RoomShape(SHAPES.TSHAPE, false, false, true, true, false, true, true);
                    img.src = ROOM15.getImage();
                    img.style.transform = ROOM15.getRotation_Degree();
                    cell.appendChild(img);
                    matrix[row_value][column_value] = ROOM15;
                }


                //Alsó 2 középső
                if (row_value === 7 && column_value === 3) {
                    let ROOM73 = new RoomShape(SHAPES.TSHAPE, false, false, true, true, true, true, false);
                    img.src = ROOM73.getImage();
                    img.style.transform = ROOM73.getRotation_Degree();
                    cell.appendChild(img);
                    matrix[row_value][column_value] = ROOM73;
                }
                if (row_value === 7 && column_value === 5) {
                    let ROOM75 = new RoomShape(SHAPES.TSHAPE, false, false, true, true, true, true, false);
                    img.src = ROOM75.getImage();
                    img.style.transform = ROOM75.getRotation_Degree();
                    cell.appendChild(img);
                    matrix[row_value][column_value] = ROOM75;
                }

                //BAL 2 Középső
                if (row_value === 3 && column_value === 1) {
                    let ROOM31 = new RoomShape(SHAPES.TSHAPE, false, false, true, false, true, true, true);
                    img.src = ROOM31.getImage();
                    img.style.transform = ROOM31.getRotation_Degree();
                    cell.appendChild(img);
                    matrix[row_value][column_value] = ROOM31;
                }
                if (row_value === 5 && column_value === 1) {
                    let ROOM51 = new RoomShape(SHAPES.TSHAPE, false, false, true, false, true, true, true);
                    img.src = ROOM51.getImage();
                    img.style.transform = ROOM51.getRotation_Degree();
                    cell.appendChild(img);
                    matrix[row_value][column_value] = ROOM51;
                }


                //JOBB 2 középső
                if (row_value === 3 && column_value === 7) {
                    let ROOM37 = new RoomShape(SHAPES.TSHAPE, false, false, true, true, true, false, true);
                    img.src = ROOM37.getImage();
                    cell.appendChild(img);
                    matrix[row_value][column_value] = ROOM37;
                }
                if (row_value === 5 && column_value === 7) {
                    let ROOM57 = new RoomShape(SHAPES.TSHAPE, false, false, true, true, true, false, true);
                    img.src = ROOM57.getImage();
                    img.style.transform = ROOM57.getRotation_Degree();
                    cell.appendChild(img);
                    matrix[row_value][column_value] = ROOM57;
                }

                //KÖZEPE
                //BAL FELSŐ
                if (row_value === 3 && column_value === 3) {
                    let ROOM33 = new RoomShape(SHAPES.TSHAPE, false, false, true, false, true, true, true);
                    img.src = ROOM33.getImage();
                    img.style.transform = ROOM33.getRotation_Degree();
                    cell.appendChild(img);
                    matrix[row_value][column_value] = ROOM33;
                }
                //KÖZEPE
                //JOBB FELSŐ
                if (row_value === 3 && column_value === 5) {
                    let ROOM35 = new RoomShape(SHAPES.TSHAPE, false, false, true, true, false, true, true);
                    img.src = ROOM35.getImage();
                    img.style.transform = ROOM35.getRotation_Degree();
                    cell.appendChild(img);
                    matrix[row_value][column_value] = ROOM35;
                }

                //KÖZEPE
                //BAL ALSÓ
                if (row_value === 5 && column_value === 3) {
                    let ROOM53 = new RoomShape(SHAPES.TSHAPE, false, false, true, true, true, true, false);
                    img.src = ROOM53.getImage();
                    img.style.transform = ROOM53.getRotation_Degree();
                    cell.appendChild(img);
                    matrix[row_value][column_value] = ROOM53;
                }

                //KÖZEPE
                //JOBB ALSÓ
                if (row_value === 5 && column_value === 5) {
                    let ROOM55 = new RoomShape(SHAPES.TSHAPE, false, false, true, true, true, false, true);

                    img.src = ROOM55.getImage();
                    img.style.transform = ROOM55.getRotation_Degree();
                    cell.appendChild(img);
                    matrix[row_value][column_value] = ROOM55;

                }


            } else {

                /////////////////////////////////////////////////////////////////
                /////Mozgatható alakzatok generálása
                let ALL_NUMBER = MAX_CURVE_NUMBER + MAX_STRAIGHT_NUMBER + MAX_T_NUMBER;
                let counternumber = 0;
                //GENERATE randomly elements
                //RANDOM GENERÁLÁS Változatása: CURVE:1 | TSHAPE:2 | Straight:3
                let random = Math.floor(Math.random() * 3) + 1;
                let addcounter = 0;


                do {
                    //curve 1
                    if (random === 1 && curve_counter < MAX_CURVE_NUMBER) {
                        //curve
                        let ROOM = new RoomShape(SHAPES.CURVE, false, false, false, false, false, true, true);
                        img.src = ROOM.getImage();
                        img.style.transform = ROOM.getRotation_Degree();
                        cell.appendChild(img);
                        matrix[row_value][column_value] = ROOM;
                        curve_counter++;
                        addcounter = 1;
                    } else if (random === 1 && curve_counter === MAX_CURVE_NUMBER) {  //CURVE ELFOGYOTT
                        //van t és egyenes
                        if (t_counter < MAX_T_NUMBER && straight_counter < MAX_STRAIGHT_NUMBER) {
                            let random = Math.floor(Math.random() * 3) + 2;
                        }
                        //nincs t csak egyenes
                        if (t_counter === MAX_T_NUMBER && straight_counter < MAX_STRAIGHT_NUMBER) {
                            random = 3;
                        }
                        // nincs egyenes csak T
                        if (t_counter < MAX_T_NUMBER && straight_counter === MAX_STRAIGHT_NUMBER) {
                            random = 2;
                        }
                    }


                    //t2
                    if (random === 2 && t_counter < MAX_T_NUMBER) {
                        //t
                        let ROOM = new RoomShape(SHAPES.TSHAPE, false, false, false, true, false, true, true);
                        img.src = ROOM.getImage();
                        img.style.transform = ROOM.getRotation_Degree();
                        cell.appendChild(img);
                        matrix[row_value][column_value] = ROOM;
                        t_counter++;
                        addcounter = 1;

                    } else if (random === 2 && t_counter === MAX_T_NUMBER) {
                        //van curve és egyenes
                        if (curve_counter < MAX_CURVE_NUMBER && straight_counter < MAX_STRAIGHT_NUMBER) {
                            random = 3; //1 vagy 3
                        }
                        //csak kanyar van
                        if (curve_counter < MAX_CURVE_NUMBER && straight_counter === MAX_STRAIGHT_NUMBER) {
                            random = 1;
                        }
                        //CSAK egyenes van
                        if (curve_counter === MAX_CURVE_NUMBER && straight_counter < MAX_STRAIGHT_NUMBER) {
                            random = 3;
                        }
                    }


                    //EGYENES3
                    if (random === 3 && straight_counter < MAX_STRAIGHT_NUMBER) {
                        //RANDOM irányú egyenes generálás
                        let random_staight = Math.floor(Math.random() * 2) + 1;
                        if (random_staight === 1) {

                            //staight default azaz fekvő:
                            let ROOM = new RoomShape(SHAPES.STRAIGHT, false, false, false, true, false, true, false);
                            img.src = ROOM.getImage();
                            img.style.transform = ROOM.getRotation_Degree();
                            cell.appendChild(img);
                            matrix[row_value][column_value] = ROOM;
                            straight_counter++;
                            addcounter = 1;

                        } else {
                            //staight  álló
                            let ROOM = new RoomShape(SHAPES.STRAIGHT, false, false, false, false, true, false, true);
                            img.src = ROOM.getImage();
                            img.style.transform = ROOM.getRotation_Degree();
                            matrix[row_value][column_value] = ROOM;
                            cell.appendChild(img);
                            straight_counter++;
                            addcounter = 1;

                        }


                    } else if (random === 3 && straight_counter === MAX_STRAIGHT_NUMBER) {
                        //EGYENES ELFOGYOTT
                        //curve és t is van
                        if (curve_counter < MAX_CURVE_NUMBER && t_counter < MAX_T_NUMBER) {
                            random = Math.floor(Math.random() * 2) + 1;
                        }
                        //CSAK curve van
                        if (curve_counter < MAX_CURVE_NUMBER && t_counter === MAX_T_NUMBER) {
                            random = 1;
                        }
                        //csak T van
                        if (curve_counter === MAX_CURVE_NUMBER && t_counter < MAX_T_NUMBER) {
                            random = 2
                        }
                    }

                } while (addcounter !== 1);

                // console.log("curve: " + curve_counter + "/" + MAX_CURVE_NUMBER + "\t t-cnt: " + t_counter + "/" + MAX_T_NUMBER + "\t straight: " + straight_counter + "/" + MAX_STRAIGHT_NUMBER)
                if (curve_counter < MAX_CURVE_NUMBER) {
                    KIMARADTSZOBA = new RoomShape(SHAPES.CURVE, false, false, false, false, false, true, true);
                }
                if (t_counter < MAX_T_NUMBER) {
                    KIMARADTSZOBA = new RoomShape(SHAPES.TSHAPE, false, false, false, true, false, true, true);
                }
                if (straight_counter < MAX_STRAIGHT_NUMBER) {
                    KIMARADTSZOBA = new RoomShape(SHAPES.STRAIGHT, false, false, false, true, false, false, true);
                }

                //console.log(ALL_NUMBER==counternumber)


            }
            cell.setAttribute('id', 'ROOM' + row_value + column_value);

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
    tbl.setAttribute("border", "1");
    tbl.setAttribute('id', 'gtable');
}

function generate_treasure() {
    //végigmegyek a táblán és 3 darab kincs nem sarkokba
    //Játéktér: A rácsra fel van helyezve legalább 3 kincs véletlen helyre (kivéve a sarkokat) (0,5 pont)
    /*   const cells = document.querySelectorAll('td');
        cells.forEach(function (cell) {
        //    console.log(cell.getAttributeNames());
        })
     */
    //3 kincs felhelyzése
    /*
    for (let i = 0; i <= 3; i++) {
        let treasureX = Math.floor(Math.random() * 6) + 2;
        let treasureY = Math.floor(Math.random() * 6) + 2;
        matrix[treasureX][treasureY].set_isTREASURE_IN(true);
        let selectors = "#ROOM" + treasureX + treasureY + "> img";
        let cellquery = document.querySelector(selectors);
        console.log(cellquery);
        cellquery.setAttribute('src', matrix[treasureX][treasureY].getImage());
    }
     */

//treasurepice db  kincs felhelyzése

    for (let i = 1; i <= parseInt(treasurePiece.value); i++) {
        let treasureX = Math.floor(Math.random() * 6) + 2;
        let treasureY = Math.floor(Math.random() * 6) + 2;

        matrix[treasureX][treasureY].set_isTREASURE_IN(true);
        let selectors = "#ROOM" + treasureX + treasureY + "> img";

        let cellquery = document.querySelector(selectors);
        cellquery.setAttribute('src', matrix[treasureX][treasureY].getImage());


    }


}

function spawn_player() {
///Játéktér: A rácsra fel van helyezve legalább 1 játékos figurája (0,5 pont)
//Játéktér: a figurák a sarkokban megjelennek (0,5 pont)


    for (let i = 0; i < parseInt(playerPiece.value); i++) {
        let playerX = Math.floor(Math.random() * 7) + 1;
        let playerY = Math.floor(Math.random() * 7) + 1;
        while (matrix[playerX][playerY].get_isTREASURE_IN() === true) {
            let playerX = Math.floor(Math.random() * 7) + 1;
            let playerY = Math.floor(Math.random() * 7) + 1;

        }


        matrix[playerX][playerY].set_isPLAYER_IN(true);
        let selectors = "#ROOM" + playerX + playerY + "> img";

        let cellquery = document.querySelector(selectors);
        cellquery.setAttribute('src', matrix[playerX][playerY].getImage());
        //console.log("fontos: " + matrix[playerX][playerY].getImage() + " " + matrix[playerX][playerY].getRotation_Degree());
        cellquery.setAttribute('style', 'transform:' + matrix[playerX][playerY].getRotation_Degree());
    }

}

//////////CONSTANTS:

//const text = readTextFile("description.txt");
const startButton = document.querySelector("#start");
const descriptionButton = document.querySelector("#description");
const gametablediv = document.querySelector(".gametable");
let treasurePiece = document.querySelector("#treasurechest");
const playerPiece = document.querySelector("#playernumber");
const stepInfoDiv = document.querySelector("#stepinfo");
const treasuereDiv = document.querySelector("#treauserecount");
const shapeleftDiv = document.querySelector("#shapetopaste");
const roomDiv = document.querySelector("#roominfo");

const leftButton = document.querySelector("#left");
const upButton = document.querySelector("#up");
const rightButton = document.querySelector("#right");
const downButton = document.querySelector("#down");

const saveButton = document.querySelector("#save");
const issavedButton = document.querySelector("#is_saved");


function startGame() {
//table.style.display = "block";
    is_save();
    gametablediv.innerHTML = "";

    curve_counter = 0;
    t_counter = 0;
    straight_counter = 0;

    for (let i = 1; i < table_size + 1; i++) {
        matrix[i] = [];
        for (let j = 1; j < table_size + 1; j++) {
            matrix[i][j] = undefined;
        }
    }
    treasureCOLLECTEDCOUNTER = 0;
    generate_table_without_player_and_treasure();
    generate_treasure(treasurePiece);
    spawn_player();


    //Kimaradt elem berakása:
    shapetopaste.innerHTML = "";
    let img = document.createElement("img");
    img.src = KIMARADTSZOBA.get_shape_type();
    shapetopaste.appendChild(img);


    gameon();


}


function showDescription() {

    let text = "<p>Nekeresdországban Nevenincs királynak egyik szeme sír, a másik nevet. <br>\n" +
        "Nevet, mert tündérszép lányának kérője akadt, és sír, mert a kiváló kérőből nem egy, hanem több is van. <br>\n" +
        "Hát most hogyan döntse el, melyiknek adja lánya kezét és fele királyságát? Gondolja kikéri udvari tanácsosa, Furfang véleményét. <br>\n" +
        " Az udvari tanácsos nevéhez illő ötlettel áll elő: állítsák próba elé a kérőket, s aki a legrátermettebbnek bizonyul, az nyerje el a szépséges királylány kezét. <br>\n" +
        "  Van a várnak egy elvarázsolt katakombája, ahol a szobák helye folyamatosan változtatható. Ebben rejtenek el kincseket, s az a kérő nyeri el a királylány kezét, aki a leghamarabb szedi össze\n" +
        "  a rábízott kincseket.\n" +
        "  </p>\n" +
        "<br>\n" +
        "<h3>A játék leírása</h3>\n" +
        "<br>\n" +
        "<p>\n" +
        "A katakomba szobáit egy 7x7-es négyzetrács cellái jelképezik. <br>\n" +
        "Minden szoba esetén adott, hogy mely falain van ajtó. Ha két szomszédos szoba érintkező falán egy-egy ajtó van, akkor át lehet menni egyik szobából a másikba. <br>\n" +
        " A négyzetrács páros sorait és oszlopait el lehet tolni, a többi szoba végig rögzített a játék során. <br>\n" +
        " Az eltolásokkal az ajtókon keresztül utak nyílnak a szobák között, így lehet eljutni a kincsekhez. <br>\n" +
        " Mindegyik kérő arra törekszik, hogy a katakomba szobáinak ötletes eltolásával eljusson a kincsekhez. <br>\n" +
        "  Aki elsőként találja meg mindahányat és kiindulópontjára sikeresen visszaérkezik az a nyertes.\n" +
        " </p>\n" +
        " <br>\n" +
        " <p>\n" +
        "A játék elején a szobákat véletlen sorrendben és véletlen irányban kirakjuk a játéktábla szabad mezőire. <br>\n" +
        "A szobák közül az egyik mindenképpen fölösleges marad. <br>\n" +
        " A játék folyamán majd mindig az éppen kimaradó szobát használjuk a többi szoba elcsúsztatására <br>.\n" +
        " A játékban legfeljebb 24 kincset kell megtalálni. Ezeket véletlen sorrendben felrakjuk a táblára úgy, <br>\n" +
        " hogy egy mezőn csak egy kincs lehet, és a sarokba nem rakhatunk, majd az ezeket jelző kártyákat összekeverjük, <br>\n" +
        " és egyenlő számban szétosztjuk a játékosok között, felfedve mindig a legfelső kártyát. A játékosokat jelző figurákat a tábla külön sarkaiba helyezzük.\n" +
        "  </p>\n" +
        "   <br>\n" +
        "\n" +
        "    <p>\n" +
        "    A játék során minden játékosnak a kincsei közül azt kell megszereznie, amit az aktuálisan legfelső, mindenki által látható kincskártya mutat. <br>\n" +
        "     Arra a mezőre kell eljutni. Ahhoz, hogy a célt elérje, a játékosnak először a katakombát kell átalakítania a kimaradt szoba becsúsztatásával, és <br>\n" +
        "    lépnie mindig csak ez után szabad a figurájával.\n" +
        "    </p>\n" +
        "\n" +
        "       <br>\n" +
        "      <p>\n" +
        "      A katakomba átalakítása a következőképpen történik: <br>\n" +
        "       A játékos a kimaradt szobát (tetszőlegesen elforgatva) valamelyik oldalról becsúsztathatja <br>\n" +
        "       a játéktábla területére egy szabadon mozgó sor vagy oszlop szélén, aminek következtében az átellenes oldalon kiesik egy másik szoba. <br>\n" +
        "        A tábla szélén nyilak jelzik azokat a helyeket, ahol a szobát be lehet csúsztatni. <br>\n" +
        "        A szoba bárhol betolható, kivétel ott, ahol az imént kilökődött. Nem szabad tehát az előző játékos lépését rögtön „visszacsinálni\". <br>\n" +
        "         Ha a szobák eltolása során a szobával együtt egy figura is kitolódnék – akár másé, akár a miénk -, akkor ezt a figurát az ellenkező oldalról imént becsúsztatott szobába kell helyezni. <br>\n" +
        "      </p>\n" +
        "\n" +
        "         <br>\n" +
        "        <p>\n" +
        "        A szobák eltolását követi a játékos lépése a figurával. A katakomba minden olyan pontjáig el lehet jutni, amelyet a kiindulóponttal folyamatos járatvonal köt össze. <br>\n" +
        "         Az ilyen járatokban tehát olyan messzire mehetünk el, amilyen messzire csak akarunk, vagyis nem számít, hogy hány szobán lépkedünk végig. Nem kötelező lépni. <br>\n" +
        "          Figuránkat akár ott is hagyhatjuk, ahol éppen van. Egy mezőn több figura is állhat: a figurák nem ütik ki egymást.  <br>\n" +
        "          Ha valaki nem tud rögtön céljáig eljutni, akkor figurájával addig a pontig célszerű elmennie, ahol feltehetőleg jó helyzetben várhatja következő lépést.  <br>\n" +
        "          Ha valaki elérte a felfedett kincskártya által megjelölt célt, akkor felfedi a következőt, és most ehhez a célhoz igyekszik eljutni, stb. <br>\n" +
        "        </p>\n" +
        "\n" +
        "\n" +
        "           <br>\n" +
        "          <p>\n" +
        "          A játék akkor ér véget, ha egy játékos az összes kincskártyájához tartozó kincset megszerezte, és visszavezette a figuráját arra mezőre, ahonnan elindult. <br>\n" +
        "          Az a győztes, aki valamennyi kincsét megtalálta és figuráját elsőként juttatta vissza a kiindulópontra.\n" +
        "          </p>";

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

function wherePlayerX_coordinate() {
    for (let i = 1; i < table_size + 1; i++) {
        for (let j = 1; j < table_size + 1; j++) {
            if (matrix[i][j].get_isPLAYER_IN() === true) {
                return i;
            }
        }
    }

}

function wherePlayerY_coordinate() {
    for (let i = 1; i < table_size + 1; i++) {
        for (let j = 1; j < table_size + 1; j++) {
            if (matrix[i][j].get_isPLAYER_IN() === true) {
                return j;
            }
        }
    }
}

function left_click() {
    if (treasureCOLLECTEDCOUNTER == parseInt(treasurePiece.value)) {
        startGame();
        stepInfoDiv.innerHTML += "A játék vége!";

        return 0;
    }
    let playerX_coordinate = wherePlayerX_coordinate();
    let playerY_coordinate = wherePlayerY_coordinate();
    let playerY_coordinateLEFT = parseInt(parseInt(playerY_coordinate) - 1);

    if (playerY_coordinateLEFT < 1) {
        stepInfoDiv.innerHTML = "";
        stepInfoDiv.innerHTML += "A játékos nem tud balra lépni (pálya széle)";
        return 0;
    } else if (matrix[playerX_coordinate][playerY_coordinateLEFT].get_isOPEN_RIGHT() === false) {
        stepInfoDiv.innerHTML = "";
        stepInfoDiv.innerHTML += "A játékos nem tud balra lépni (a másik alakzat jobbról zárt)";
    } else if (matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_LEFT() === false) {
        stepInfoDiv.innerHTML = "";
        stepInfoDiv.innerHTML += "A játékos nem tud balra lépni a saját alakzata miatt.";
    }


    if (matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_LEFT() === true && matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_RIGHT() === true) {
        console.log("------------------------------------------")
        //matrix[playerX_coordinate][playerY_coordinate]
        console.log("BALKRA LÉPÉS VÁLTOZTATÁS A SIMA ALAKZAT infói:" + matrix[playerX_coordinate][playerY_coordinate].get_shape_type() + " " +
            matrix[playerX_coordinate][playerY_coordinate].get_isPLAYER_IN() + " " +
            matrix[playerX_coordinate][playerY_coordinate].get_isTREASURE_IN() + " " +
            matrix[playerX_coordinate][playerY_coordinate].get_isConstant() + " " +
            "LEFT:" + matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_LEFT() + " " +
            "up:" + matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_UP() + " " +
            "right:" + matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_RIGHT() + " " +
            "down:" + matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_DOWN() + " " +
            "img:" + matrix[playerX_coordinate][playerY_coordinate].getImage() + " " +
            "degree:" + matrix[playerX_coordinate][playerY_coordinate].getRotation_Degree() + " ")
        // constructor(shape_type, isPLAYER_IN, isTREASURE_IN, isConstant, isOPEN_LEFT, isOPEN_UP, isOPEN_RIGHT, isOPEN_DOWN)
        console.log("LÉPÉS:::::::::")


        console.log("BALKRA LÉPÉS VÁLTOZTATÁS A bal alakzat infói:" + matrix[playerX_coordinate][playerY_coordinateLEFT].get_shape_type() + " " +
            matrix[playerX_coordinate][playerY_coordinateLEFT].get_isPLAYER_IN() + " " +
            matrix[playerX_coordinate][playerY_coordinateLEFT].get_isTREASURE_IN() + " " +
            matrix[playerX_coordinate][playerY_coordinateLEFT].get_isConstant() + " " +
            "LEFT:" + matrix[playerX_coordinate][playerY_coordinateLEFT].get_isOPEN_LEFT() + " " +
            "up:" + matrix[playerX_coordinate][playerY_coordinateLEFT].get_isOPEN_UP() + " " +
            "right:" + matrix[playerX_coordinate][playerY_coordinateLEFT].get_isOPEN_RIGHT() + " " +
            "down:" + matrix[playerX_coordinate][playerY_coordinateLEFT].get_isOPEN_DOWN() + " " +
            "img:" + matrix[playerX_coordinate][playerY_coordinateLEFT].getImage() + " " +
            "degree:" + matrix[playerX_coordinate][playerY_coordinateLEFT].getRotation_Degree());
        // constructor(shape_type, isPLAYER_IN, isTREASURE_IN, isConstant, isOPEN_LEFT, isOPEN_UP, isOPEN_RIGHT, isOPEN_DOWN)
        console.log("LÉPÉS:::::::::")


        if (matrix[playerX_coordinate][playerY_coordinateLEFT].get_isTREASURE_IN() === true) {
            //remove player
            matrix[playerX_coordinate][playerY_coordinate].set_isPLAYER_IN(false);
            let player_selector = "#ROOM" + playerX_coordinate + playerY_coordinate + "> img";
            let cellquery_player_selector = document.querySelector(player_selector);
            console.log("a: " + player_selector + "\tb: " + cellquery_player_selector + "\nc: " + matrix[playerX_coordinate][playerY_coordinate].getImage());
            cellquery_player_selector.setAttribute('src', matrix[playerX_coordinate][playerY_coordinate].getImage());
            cellquery_player_selector.setAttribute('style', 'transform:' + matrix[playerX_coordinate][playerY_coordinate].getRotation_Degree());


            //KINCS BEGYŰJTÉSE ÉS SIMA PLAYER
            matrix[playerX_coordinate][playerY_coordinateLEFT].set_isPLAYER_IN(true);
            //kincs eltűntetése
            matrix[playerX_coordinate][playerY_coordinateLEFT].set_isTREASURE_IN(false);
            let selectors_left_step = "#ROOM" + playerX_coordinate + playerY_coordinateLEFT + "> img";
            let cellquery_selectors_left_step = document.querySelector(selectors_left_step);
            console.log("a: " + player_selector + "\tb: " + cellquery_player_selector + "\nc: " + matrix[playerX_coordinate][playerY_coordinateLEFT].getImage());
            cellquery_selectors_left_step.setAttribute('src', matrix[playerX_coordinate][playerY_coordinateLEFT].getImage());
            cellquery_selectors_left_step.setAttribute('style', 'transform:' + matrix[playerX_coordinate][playerY_coordinateLEFT].getRotation_Degree());


            treasureCOLLECTEDCOUNTER += 1;
            stepInfoDiv.innerHTML = "";
            stepInfoDiv.innerHTML += "A játékos balra lépett és kincset nyert!";
            treasuereDiv.innerHTML = "";
            treasuereDiv.innerHTML = "A begyújtőtt kincsek száma: " + treasureCOLLECTEDCOUNTER;


        } else {
            //remove player
            matrix[playerX_coordinate][playerY_coordinate].set_isPLAYER_IN(false);
            let player_selector = "#ROOM" + playerX_coordinate + playerY_coordinate + "> img";
            let cellquery_player_selector = document.querySelector(player_selector);
            console.log("a: " + player_selector + "\tb: " + cellquery_player_selector + "\nc: " + matrix[playerX_coordinate][playerY_coordinate].getImage());
            cellquery_player_selector.setAttribute('src', matrix[playerX_coordinate][playerY_coordinate].getImage());
            cellquery_player_selector.setAttribute('style', 'transform:' + matrix[playerX_coordinate][playerY_coordinate].getRotation_Degree());

            //sett player left
            matrix[playerX_coordinate][playerY_coordinateLEFT].set_isPLAYER_IN(true);
            let selectors_left_step = "#ROOM" + playerX_coordinate + playerY_coordinateLEFT + "> img";
            let cellquery_selectors_left_step = document.querySelector(selectors_left_step);

            cellquery_selectors_left_step.setAttribute('src', matrix[playerX_coordinate][playerY_coordinateLEFT].getImage());
            console.log(matrix[playerX_coordinate][playerY_coordinateLEFT].getRotation_Degree())
            if (matrix[playerX_coordinate][playerY_coordinateLEFT].getRotation_Degree() !== 'rotate(0deg)') {
                cellquery_selectors_left_step.setAttribute('style', 'transform:' + matrix[playerX_coordinate][playerY_coordinateLEFT].getRotation_Degree());
            }


            stepInfoDiv.innerHTML = "";
            stepInfoDiv.innerHTML += "A játékos balra lépett";
        }

        console.log("BALRA LÉPÉS UTÁNI INFÓ:")
        console.log("ALAP:")
        console.log("ALAP:" + matrix[playerX_coordinate][playerY_coordinate].get_shape_type() + " " +
            matrix[playerX_coordinate][playerY_coordinate].get_isPLAYER_IN() + " " +
            matrix[playerX_coordinate][playerY_coordinate].get_isTREASURE_IN() + " " +
            matrix[playerX_coordinate][playerY_coordinate].get_isConstant() + " " +
            +"left" + matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_LEFT() + " " +
            +"up" + matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_UP() + " " +
            +"right" + matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_RIGHT() + " " +
            +"down" + matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_DOWN() + " " +
            +"img" + matrix[playerX_coordinate][playerY_coordinate].getImage() + " " +
            +"degree" + matrix[playerX_coordinate][playerY_coordinate].getRotation_Degree() + " ")
        console.log("LÉPETT:")
        console.log("VÁLTOZTATOTT:" + matrix[playerX_coordinate][playerY_coordinateLEFT].get_shape_type() + " " +
            matrix[playerX_coordinate][playerY_coordinateLEFT].get_isPLAYER_IN() + " " +
            matrix[playerX_coordinate][playerY_coordinateLEFT].get_isTREASURE_IN() + " " +
            matrix[playerX_coordinate][playerY_coordinateLEFT].get_isConstant() + " " +
            +"left" + matrix[playerX_coordinate][playerY_coordinateLEFT].get_isOPEN_LEFT() + " " +
            +"up" + matrix[playerX_coordinate][playerY_coordinateLEFT].get_isOPEN_UP() + " " +
            +"right" + matrix[playerX_coordinate][playerY_coordinateLEFT].get_isOPEN_RIGHT() + " " +
            +"down" + matrix[playerX_coordinate][playerY_coordinateLEFT].get_isOPEN_DOWN() + " " +
            +"img" + matrix[playerX_coordinate][playerY_coordinateLEFT].getImage() + " " +
            +"degree" + matrix[playerX_coordinate][playerY_coordinateLEFT].getRotation_Degree() + " ")
        // constructor(shape_type, isPLAYER_IN, isTREASURE_IN, isConstant, isOPEN_LEFT, isOPEN_UP, isOPEN_RIGHT, isOPEN_DOWN)
        console.log("LÉPETT:")
        console.log("------------------------------------------")
    }


}

function up_click() {
    if (treasureCOLLECTEDCOUNTER == parseInt(treasurePiece.value)) {
        startGame();
        stepInfoDiv.innerHTML += "A játék vége!";

        return 0;
    }
    let playerX_coordinate = wherePlayerX_coordinate();
    let playerY_coordinate = wherePlayerY_coordinate();
    let playerX_coordinateUP = parseInt(parseInt(playerX_coordinate) - 1);

    if (playerX_coordinateUP < 1) {
        stepInfoDiv.innerHTML = "";
        stepInfoDiv.innerHTML += "A játékos nem tud fel lépni (pálya széle)";
        return 0;
    } else if (matrix[playerX_coordinateUP][playerY_coordinate].get_isOPEN_DOWN() === false) {
        stepInfoDiv.innerHTML = "";
        stepInfoDiv.innerHTML += "A játékos nem tud fel lépni (a másik alakzat lentőrl zárt)";
    }
    if (matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_UP() === false) {
        stepInfoDiv.innerHTML = "";
        stepInfoDiv.innerHTML += "A játékos nem tud fel lépni a saját alakzata miatt.";
    }


    if (matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_UP() === true && matrix[playerX_coordinateUP][playerY_coordinate].get_isOPEN_DOWN() === true) {
        console.log("------------------------------------------")
        console.log("ALAP ELEM FEL LÉPÉS VÁLTOZTATÁS ELŐTT:" + matrix[playerX_coordinate][playerY_coordinate].get_shape_type() + " " +
            matrix[playerX_coordinate][playerY_coordinate].get_isPLAYER_IN() + " " +
            matrix[playerX_coordinate][playerY_coordinate].get_isTREASURE_IN() + " " +
            matrix[playerX_coordinate][playerY_coordinate].get_isConstant() + " " +
            matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_LEFT() + " " +
            matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_UP() + " " +
            matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_RIGHT() + " " +
            matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_DOWN() + " " +
            matrix[playerX_coordinate][playerY_coordinate].getImage() + " " +
            matrix[playerX_coordinate][playerY_coordinate].getRotation_Degree() + " ");


        console.log("------------------------------------------")
        console.log("FENTI ELEM LÉPÉS VÁLTOZTATÁS ELŐTT:" + matrix[playerX_coordinateUP][playerY_coordinate].get_shape_type() + " " +
            matrix[playerX_coordinateUP][playerY_coordinate].get_isPLAYER_IN() + " " +
            matrix[playerX_coordinateUP][playerY_coordinate].get_isTREASURE_IN() + " " +
            matrix[playerX_coordinateUP][playerY_coordinate].get_isConstant() + " " +
            matrix[playerX_coordinateUP][playerY_coordinate].get_isOPEN_LEFT() + " " +
            matrix[playerX_coordinateUP][playerY_coordinate].get_isOPEN_UP() + " " +
            matrix[playerX_coordinateUP][playerY_coordinate].get_isOPEN_RIGHT() + " " +
            matrix[playerX_coordinateUP][playerY_coordinate].get_isOPEN_DOWN() + " " +
            matrix[playerX_coordinateUP][playerY_coordinate].getImage() + " " +
            matrix[playerX_coordinateUP][playerY_coordinate].getRotation_Degree() + " ");
        console.log("------------------------------------------")


        if (matrix[playerX_coordinateUP][playerY_coordinate].get_isTREASURE_IN() === true) {
            //remove player
            matrix[playerX_coordinate][playerY_coordinate].set_isPLAYER_IN(false);
            let player_selector = "#ROOM" + playerX_coordinate + playerY_coordinate + "> img";
            let cellquery_player_selector = document.querySelector(player_selector);
            cellquery_player_selector.setAttribute('src', matrix[playerX_coordinate][playerY_coordinate].getImage());

            //KINCS BEGYŰJTÉSE ÉS SIMA PLAYER
            //kincs eltűntetése
            matrix[playerX_coordinateUP][playerY_coordinate].set_isTREASURE_IN(false);
            matrix[playerX_coordinateUP][playerY_coordinate].set_isPLAYER_IN(true);
            let selectors_left_step = "#ROOM" + playerX_coordinateUP + playerY_coordinate + "> img";
            let cellquery_selectors_left_step = document.querySelector(selectors_left_step);
            cellquery_selectors_left_step.setAttribute('src', matrix[playerX_coordinateUP][playerY_coordinate].getImage());
            cellquery_selectors_left_step.setAttribute('style', 'transform:' + matrix[playerX_coordinateUP][playerY_coordinate].getRotation_Degree());


            treasureCOLLECTEDCOUNTER += 1;
            stepInfoDiv.innerHTML = "";
            stepInfoDiv.innerHTML += "A játékos fel lépett és kincset nyert!";
            treasuereDiv.innerHTML = "";
            treasuereDiv.innerHTML = "A begyújtőtt kincsek száma: " + treasureCOLLECTEDCOUNTER;


        } else {
            //remove player
            matrix[playerX_coordinate][playerY_coordinate].set_isPLAYER_IN(false);
            let player_selector = "#ROOM" + playerX_coordinate + playerY_coordinate + "> img";
            let cellquery_player_selector = document.querySelector(player_selector);
            console.log("a: " + player_selector + "\tb: " + cellquery_player_selector + "\nc: " + matrix[playerX_coordinate][playerY_coordinate].getImage());
            cellquery_player_selector.setAttribute('src', matrix[playerX_coordinate][playerY_coordinate].getImage());

            //sett player left
            matrix[playerX_coordinateUP][playerY_coordinate].set_isPLAYER_IN(true);
            let selectors_left_step = "#ROOM" + playerX_coordinateUP + playerY_coordinate + "> img";
            let cellquery_selectors_left_step = document.querySelector(selectors_left_step);

            cellquery_selectors_left_step.setAttribute('src', matrix[playerX_coordinateUP][playerY_coordinate].getImage());
            cellquery_selectors_left_step.setAttribute('style', 'transform:' + matrix[playerX_coordinateUP][playerY_coordinate].getRotation_Degree());

            stepInfoDiv.innerHTML = "";
            stepInfoDiv.innerHTML += "A játékos fel lépett";
        }
        console.log("------------------------------------------")
        console.log("ALAP ELEM FEL LÉPÉS VÁLTOZTATÁS UTÁN:" + matrix[playerX_coordinate][playerY_coordinate].get_shape_type() + " " +
            matrix[playerX_coordinate][playerY_coordinate].get_isPLAYER_IN() + " " +
            matrix[playerX_coordinate][playerY_coordinate].get_isTREASURE_IN() + " " +
            matrix[playerX_coordinate][playerY_coordinate].get_isConstant() + " " +
            matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_LEFT() + " " +
            matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_UP() + " " +
            matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_RIGHT() + " " +
            matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_DOWN() + " " +
            matrix[playerX_coordinate][playerY_coordinate].getImage() + " " +
            matrix[playerX_coordinate][playerY_coordinate].getRotation_Degree() + " ");


        console.log("------------------------------------------")
        console.log("FENTI ELEM LÉPÉS VÁLTOZTATÁS UTÁN:" + matrix[playerX_coordinateUP][playerY_coordinate].get_shape_type() + " " +
            matrix[playerX_coordinateUP][playerY_coordinate].get_isPLAYER_IN() + " " +
            matrix[playerX_coordinateUP][playerY_coordinate].get_isTREASURE_IN() + " " +
            matrix[playerX_coordinateUP][playerY_coordinate].get_isConstant() + " " +
            matrix[playerX_coordinateUP][playerY_coordinate].get_isOPEN_LEFT() + " " +
            matrix[playerX_coordinateUP][playerY_coordinate].get_isOPEN_UP() + " " +
            matrix[playerX_coordinateUP][playerY_coordinate].get_isOPEN_RIGHT() + " " +
            matrix[playerX_coordinateUP][playerY_coordinate].get_isOPEN_DOWN() + " " +
            matrix[playerX_coordinateUP][playerY_coordinate].getImage() + " " +
            matrix[playerX_coordinateUP][playerY_coordinate].getRotation_Degree() + " ");
        console.log("------------------------------------------")


    }


}

function right_click() {
    if (treasureCOLLECTEDCOUNTER == parseInt(treasurePiece.value)) {
        startGame();
        stepInfoDiv.innerHTML += "A játék vége!";

        return 0;
    }

    let playerX_coordinate = wherePlayerX_coordinate();
    let playerY_coordinate = wherePlayerY_coordinate();
    let playerY_coordinateRIGHT = parseInt(parseInt(playerY_coordinate) + 1);

    if (playerY_coordinateRIGHT > 7) {
        stepInfoDiv.innerHTML = "";
        stepInfoDiv.innerHTML += "A játékos nem tud jobbra lépni (pálya széle)";
        return 0;
    } else if (matrix[playerX_coordinate][playerY_coordinateRIGHT].get_isOPEN_LEFT() === false) {
        stepInfoDiv.innerHTML = "";
        stepInfoDiv.innerHTML += "A játékos nem tud jobbra lépni (a másik alakzat balról zárt)";
    }
    if (matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_RIGHT() === false) {
        stepInfoDiv.innerHTML = "";
        stepInfoDiv.innerHTML += "A játékos nem tud jobbra lépni a saját alakzata miatt.";
    }


    if (matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_RIGHT() === true && matrix[playerX_coordinate][playerY_coordinateRIGHT].get_isOPEN_LEFT() === true) {
        console.log("------------------------------------------")
        console.log("JOBBRA LÉPÁS VÁLTOZTATÁS ELŐTT:" + matrix[playerX_coordinate][playerY_coordinateRIGHT].get_shape_type() + " " +
            matrix[playerX_coordinate][playerY_coordinateRIGHT].get_isPLAYER_IN() + " " +
            matrix[playerX_coordinate][playerY_coordinateRIGHT].get_isTREASURE_IN() + " " +
            matrix[playerX_coordinate][playerY_coordinateRIGHT].get_isConstant() + " " +
            matrix[playerX_coordinate][playerY_coordinateRIGHT].get_isOPEN_LEFT() + " " +
            matrix[playerX_coordinate][playerY_coordinateRIGHT].get_isOPEN_UP() + " " +
            matrix[playerX_coordinate][playerY_coordinateRIGHT].get_isOPEN_RIGHT() + " " +
            matrix[playerX_coordinate][playerY_coordinateRIGHT].get_isOPEN_DOWN() + " " +
            matrix[playerX_coordinate][playerY_coordinateRIGHT].getImage() + " " +
            matrix[playerX_coordinate][playerY_coordinateRIGHT].getRotation_Degree() + " ")
        // constructor(shape_type, isPLAYER_IN, isTREASURE_IN, isConstant, isOPEN_LEFT, isOPEN_UP, isOPEN_RIGHT, isOPEN_DOWN)
        console.log("\"VÁLTOZTATÁS ELŐTT:")


        if (matrix[playerX_coordinate][playerY_coordinateRIGHT].get_isTREASURE_IN() === true) {
            //remove player
            matrix[playerX_coordinate][playerY_coordinate].set_isPLAYER_IN(false);
            let player_selector = "#ROOM" + playerX_coordinate + playerY_coordinate + "> img";
            let cellquery_player_selector = document.querySelector(player_selector);
            cellquery_player_selector.setAttribute('src', matrix[playerX_coordinate][playerY_coordinate].getImage());

            //KINCS BEGYŰJTÉSE ÉS SIMA PLAYER
            //kincs eltűntetése
            matrix[playerX_coordinate][playerY_coordinateRIGHT].set_isTREASURE_IN(false);
            matrix[playerX_coordinate][playerY_coordinateRIGHT].set_isPLAYER_IN(true);
            let selectors_left_step = "#ROOM" + playerX_coordinate + playerY_coordinateRIGHT + "> img";
            let cellquery_selectors_left_step = document.querySelector(selectors_left_step);
            cellquery_selectors_left_step.setAttribute('src', matrix[playerX_coordinate][playerY_coordinateRIGHT].getImage());
            cellquery_selectors_left_step.setAttribute('style', 'transform:' + matrix[playerX_coordinate][playerY_coordinateRIGHT].getRotation_Degree());


            treasureCOLLECTEDCOUNTER += 1;
            stepInfoDiv.innerHTML = "";
            stepInfoDiv.innerHTML += "A játékos jobbra lépett és kincset nyert!";
            treasuereDiv.innerHTML = "";
            treasuereDiv.innerHTML = "A begyújtőtt kincsek száma: " + treasureCOLLECTEDCOUNTER;


        } else {
            //remove player
            matrix[playerX_coordinate][playerY_coordinate].set_isPLAYER_IN(false);
            let player_selector = "#ROOM" + playerX_coordinate + playerY_coordinate + "> img";
            let cellquery_player_selector = document.querySelector(player_selector);
            console.log("a: " + player_selector + "\tb: " + cellquery_player_selector + "\nc: " + matrix[playerX_coordinate][playerY_coordinate].getImage());
            cellquery_player_selector.setAttribute('src', matrix[playerX_coordinate][playerY_coordinate].getImage());

            //sett player left
            matrix[playerX_coordinate][playerY_coordinateRIGHT].set_isPLAYER_IN(true);
            let selectors_left_step = "#ROOM" + playerX_coordinate + playerY_coordinateRIGHT + "> img";
            let cellquery_selectors_left_step = document.querySelector(selectors_left_step);
            console.log("a: " + player_selector + "\tb: " + cellquery_player_selector + "\nc: " + matrix[playerX_coordinate][playerY_coordinateRIGHT].getImage());
            cellquery_selectors_left_step.setAttribute('src', matrix[playerX_coordinate][playerY_coordinateRIGHT].getImage());
            cellquery_selectors_left_step.setAttribute('style', 'transform:' + matrix[playerX_coordinate][playerY_coordinateRIGHT].getRotation_Degree());

            stepInfoDiv.innerHTML = "";
            stepInfoDiv.innerHTML += "A játékos jobbra lépett";
        }

        console.log("JOBBRA LÉPÉS INFÓ:")
        console.log("ALAP:")
        console.log("ALAP:" + matrix[playerX_coordinate][playerY_coordinate].get_shape_type() + " " +
            matrix[playerX_coordinate][playerY_coordinate].get_isPLAYER_IN() + " " +
            matrix[playerX_coordinate][playerY_coordinate].get_isTREASURE_IN() + " " +
            matrix[playerX_coordinate][playerY_coordinate].get_isConstant() + " " +
            matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_LEFT() + " " +
            matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_UP() + " " +
            matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_RIGHT() + " " +
            matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_DOWN() + " " +
            matrix[playerX_coordinate][playerY_coordinate].getImage() + " " +
            matrix[playerX_coordinate][playerY_coordinate].getRotation_Degree() + " ")
        console.log("LÉPETT:")
        console.log("VÁLTOZTATOTT:" + matrix[playerX_coordinate][playerY_coordinateRIGHT].get_shape_type() + " " +
            matrix[playerX_coordinate][playerY_coordinateRIGHT].get_isPLAYER_IN() + " " +
            matrix[playerX_coordinate][playerY_coordinateRIGHT].get_isTREASURE_IN() + " " +
            matrix[playerX_coordinate][playerY_coordinateRIGHT].get_isConstant() + " " +
            matrix[playerX_coordinate][playerY_coordinateRIGHT].get_isOPEN_LEFT() + " " +
            matrix[playerX_coordinate][playerY_coordinateRIGHT].get_isOPEN_UP() + " " +
            matrix[playerX_coordinate][playerY_coordinateRIGHT].get_isOPEN_RIGHT() + " " +
            matrix[playerX_coordinate][playerY_coordinateRIGHT].get_isOPEN_DOWN() + " " +
            matrix[playerX_coordinate][playerY_coordinateRIGHT].getImage() + " " +
            matrix[playerX_coordinate][playerY_coordinateRIGHT].getRotation_Degree() + " ")
        // constructor(shape_type, isPLAYER_IN, isTREASURE_IN, isConstant, isOPEN_LEFT, isOPEN_UP, isOPEN_RIGHT, isOPEN_DOWN)
        console.log("LÉPETT:")
        console.log("------------------------------------------")


    }

}

function down_click() {


    if (treasureCOLLECTEDCOUNTER == parseInt(treasurePiece.value)) {
        stepInfoDiv.innerHTML += "A játék vége!";
        startGame();

        return 0;
    }
    let playerX_coordinate = wherePlayerX_coordinate();
    let playerY_coordinate = wherePlayerY_coordinate();
    let playerX_coordinateDOWN = parseInt(parseInt(playerX_coordinate) + 1);




    console.log(playerX_coordinate + " " + playerY_coordinate);
    console.log(playerX_coordinateDOWN + " " + playerX_coordinateDOWN);

    if (playerX_coordinateDOWN > 7) {
        stepInfoDiv.innerHTML = "";
        stepInfoDiv.innerHTML += "A játékos nem tud le lépni (pálya széle)";
        return 0;
    } else if (matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_DOWN() === false) {
        stepInfoDiv.innerHTML = "";
        stepInfoDiv.innerHTML += "A játékos nem tud le lépni a saját alakzata miatt. (lentről zárt az én alakzatom";
    } else if (matrix[playerX_coordinateDOWN][playerY_coordinate].get_isOPEN_UP() === false) {
        stepInfoDiv.innerHTML = "";
        stepInfoDiv.innerHTML += "A játékos nem tud le lépni (a másik alakzat fentről zárt)";
    }


    if (matrix[playerX_coordinateDOWN][playerY_coordinate].get_isOPEN_UP() === true && matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_DOWN() === true) {
        console.log(playerX_coordinate + " " + playerY_coordinate);
        console.log(playerX_coordinate + " " + playerX_coordinateDOWN);
        console.log("ALAP ELEM INFÓK:  Lelépés Xindex " + playerX_coordinate + "\ty: " + playerY_coordinate +
            "\nshapetype" + matrix[playerX_coordinate][playerY_coordinate].get_shape_type() + " " +
            "\nplayer: " + matrix[playerX_coordinate][playerY_coordinate].get_isPLAYER_IN() + " " +
            "\ntreauser: " + matrix[playerX_coordinate][playerY_coordinate].get_isTREASURE_IN() + " " +
            "\nconstans: " + matrix[playerX_coordinate][playerY_coordinate].get_isConstant() + " " +
            "\nbal: " + matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_LEFT() + " " +
            "\nfel: " + matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_UP() + " " +
            "\njobb: " + matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_RIGHT() + " " +
            "\nlenn: " + matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_DOWN() + " " +
            "\nkep: " + matrix[playerX_coordinate][playerY_coordinate].getImage() + " " +
            "\nfok: " + matrix[playerX_coordinate][playerY_coordinate].getRotation_Degree() + " ");
        console.log("----------------------------------------------");
        console.log("Másik elem infók  " + playerX_coordinateDOWN + "\ty: " + playerY_coordinate +
            "\nshapetype" + matrix[playerX_coordinateDOWN][playerY_coordinate].get_shape_type() + " " +
            "\nplayer: " + matrix[playerX_coordinateDOWN][playerY_coordinate].get_isPLAYER_IN() + " " +
            "\ntreauser: " + matrix[playerX_coordinateDOWN][playerY_coordinate].get_isTREASURE_IN() + " " +
            "\nconstans: " + matrix[playerX_coordinateDOWN][playerY_coordinate].get_isConstant() + " " +
            "\nbal: " + matrix[playerX_coordinateDOWN][playerY_coordinate].get_isOPEN_LEFT() + " " +
            "\nfel: " + matrix[playerX_coordinateDOWN][playerY_coordinate].get_isOPEN_UP() + " " +
            "\njobb: " + matrix[playerX_coordinateDOWN][playerY_coordinate].get_isOPEN_RIGHT() + " " +
            "\nlenn: " + matrix[playerX_coordinateDOWN][playerY_coordinate].get_isOPEN_DOWN() + " " +
            "\nkep: " + matrix[playerX_coordinateDOWN][playerY_coordinate].getImage() + " " +
            "\nfok: " + matrix[playerX_coordinateDOWN][playerY_coordinate].getRotation_Degree() + " ");


        if (matrix[playerX_coordinateDOWN][playerY_coordinate].get_isTREASURE_IN() === true) {
            //remove player
            matrix[playerX_coordinate][playerY_coordinate].set_isPLAYER_IN(false);
            let player_selector = "#ROOM" + playerX_coordinate + playerY_coordinate + "> img";
            let cellquery_player_selector = document.querySelector(player_selector);
            cellquery_player_selector.setAttribute('src', matrix[playerX_coordinate][playerY_coordinate].getImage());
            cellquery_player_selector.setAttribute('style', 'transform:' + matrix[playerX_coordinate][playerY_coordinate].getRotation_Degree());

            //KINCS BEGYŰJTÉSE ÉS SIMA PLAYER
            //kincs eltűntetése
            matrix[playerX_coordinateDOWN][playerY_coordinate].set_isTREASURE_IN(false);
            matrix[playerX_coordinateDOWN][playerY_coordinate].set_isPLAYER_IN(true);
            let selectors_left_step = "#ROOM" + playerX_coordinateDOWN + playerY_coordinate + "> img";
            let cellquery_selectors_left_step = document.querySelector(selectors_left_step);
            cellquery_selectors_left_step.setAttribute('src', matrix[playerX_coordinateDOWN][playerY_coordinate].getImage());
            cellquery_selectors_left_step.setAttribute('style', 'transform:' + matrix[playerX_coordinateDOWN][playerY_coordinate].getRotation_Degree());


            treasureCOLLECTEDCOUNTER += 1;
            stepInfoDiv.innerHTML = "";
            stepInfoDiv.innerHTML += "A játékos le lépett és kincset nyert!";
            treasuereDiv.innerHTML = "";
            treasuereDiv.innerHTML = "A begyújtőtt kincsek száma: " + treasureCOLLECTEDCOUNTER;


        } else {
            //remove player
            matrix[playerX_coordinate][playerY_coordinate].set_isPLAYER_IN(false);
            let player_selector = "#ROOM" + playerX_coordinate + playerY_coordinate + "> img";
            let cellquery_player_selector = document.querySelector(player_selector);
            //console.log("a: " + player_selector + "\tb: " + cellquery_player_selector + "\nc: " + matrix[playerX_coordinate][playerY_coordinate].getImage());
            cellquery_player_selector.setAttribute('src', matrix[playerX_coordinate][playerY_coordinate].getImage());
            cellquery_player_selector.setAttribute('style', 'transform:' + matrix[playerX_coordinate][playerY_coordinate].getRotation_Degree());

            //sett player down
            matrix[playerX_coordinateDOWN][playerY_coordinate].set_isPLAYER_IN(true);
            let selectors_left_step = "#ROOM" + playerX_coordinateDOWN + playerY_coordinate + "> img";
            let cellquery_selectors_left_step = document.querySelector(selectors_left_step);

            cellquery_selectors_left_step.setAttribute('src', matrix[playerX_coordinateDOWN][playerY_coordinate].getImage());
            cellquery_selectors_left_step.setAttribute('style', 'transform:' + matrix[playerX_coordinateDOWN][playerY_coordinate].getRotation_Degree());

            stepInfoDiv.innerHTML = "";
            stepInfoDiv.innerHTML += "A játékos le lépett";
        }


        console.log("ALAP ELEM INFÓK:  Lelépés UTÁN Xindex " + playerX_coordinate + "\ty: " + playerY_coordinate +
            "\nshapetype" + matrix[playerX_coordinate][playerY_coordinate].get_shape_type() + " " +
            "\nplayer: " + matrix[playerX_coordinate][playerY_coordinate].get_isPLAYER_IN() + " " +
            "\ntreauser: " + matrix[playerX_coordinate][playerY_coordinate].get_isTREASURE_IN() + " " +
            "\nconstans: " + matrix[playerX_coordinate][playerY_coordinate].get_isConstant() + " " +
            "\nbal: " + matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_LEFT() + " " +
            "\nfel: " + matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_UP() + " " +
            "\njobb: " + matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_RIGHT() + " " +
            "\nlenn: " + matrix[playerX_coordinate][playerY_coordinate].get_isOPEN_DOWN() + " " +
            "\nkep: " + matrix[playerX_coordinate][playerY_coordinate].getImage() + " " +
            "\nfok: " + matrix[playerX_coordinate][playerY_coordinate].getRotation_Degree() + " ");
        console.log("----------------------------------------------");
        console.log("Másik elem infók  elépés UTÁN " + playerX_coordinateDOWN + "\ty: " + playerY_coordinate +
            "\nshapetype" + matrix[playerX_coordinateDOWN][playerY_coordinate].get_shape_type() + " " +
            "\nplayer: " + matrix[playerX_coordinateDOWN][playerY_coordinate].get_isPLAYER_IN() + " " +
            "\ntreauser: " + matrix[playerX_coordinateDOWN][playerY_coordinate].get_isTREASURE_IN() + " " +
            "\nconstans: " + matrix[playerX_coordinateDOWN][playerY_coordinate].get_isConstant() + " " +
            "\nbal: " + matrix[playerX_coordinateDOWN][playerY_coordinate].get_isOPEN_LEFT() + " " +
            "\nfel: " + matrix[playerX_coordinateDOWN][playerY_coordinate].get_isOPEN_UP() + " " +
            "\njobb: " + matrix[playerX_coordinateDOWN][playerY_coordinate].get_isOPEN_RIGHT() + " " +
            "\nlenn: " + matrix[playerX_coordinateDOWN][playerY_coordinate].get_isOPEN_DOWN() + " " +
            "\nkep: " + matrix[playerX_coordinateDOWN][playerY_coordinate].getImage() + " " +
            "\nfok: " + matrix[playerX_coordinateDOWN][playerY_coordinate].getRotation_Degree() + " ");
        console.log("----------------------------------------------");
        console.log("----------------------------------------------");
        console.log("----------------------------------------------");

    }


}

///EVEENT LISTENERS

function swap(matrix, i, j) {
    let tmp = matrix[i][j];
    matrix[i][j] = matrix[i - 1][j];
    matrix[i - 1][j] = tmp;
}


startButton.addEventListener('click', startGame);
descriptionButton.addEventListener('click', showDescription);
leftButton.addEventListener('click', left_click);
upButton.addEventListener('click', up_click);
rightButton.addEventListener('click', right_click);
downButton.addEventListener('click', down_click);
saveButton.addEventListener('click', save);

function is_save() {

    let localstorage = window.localStorage;
    if (localstorage.getItem('matrix') == null) {

        issavedButton.innerText = 'Nincs mentett állapot!';
        return false;

    } else {
        issavedButton.innerText = 'Van mentett állapot! (Kattints ide a megtekintéshez)';
        const important = document.querySelector("#mywrite");
        important.innerHTML = localstorage.getItem('matrix');
        return true;
    }

}

function save() {

    let localstorage = window.localStorage;
    localStorage.removeItem('matrix');
    localstorage.setItem('matrix', JSON.stringify(matrix));
    is_save();


}


function gameon() {

    const tbody = document.querySelector("#gtable");

    tbody.addEventListener('click', function (e) {
            const cell = e.target.closest('td');
            if (!cell) {
                return;
            } // Quit, not clicked on a cell
            const row = cell.parentElement;
            //console.log(cell.innerHTML, row.rowIndex, cell.cellIndex, cell.id);
            let Xindex = row.rowIndex + 1;
            let Yindex = cell.cellIndex + 1;
            /*
                console.log("ALAP ELEM INFÓK: Xindex " + Xindex + "\ty: " + Yindex +
                    "\nshapetype" + matrix[Xindex][Yindex].get_shape_type() + " " +
                    "\nplayer: " + matrix[Xindex][Yindex].get_isPLAYER_IN() + " " +
                    "\ntreauser: " + matrix[Xindex][Yindex].get_isTREASURE_IN() + " " +
                    "\nconstans: " + matrix[Xindex][Yindex].get_isConstant() + " " +
                    "\nbal: " + matrix[Xindex][Yindex].get_isOPEN_LEFT() + " " +
                    "\nfel: " + matrix[Xindex][Yindex].get_isOPEN_UP() + " " +
                    "\njobb: " + matrix[Xindex][Yindex].get_isOPEN_RIGHT() + " " +
                    "\nlenn: " + matrix[Xindex][Yindex].get_isOPEN_DOWN() + " " +
                    "\nkep: " + matrix[Xindex][Yindex].getImage() + " " +
                    "\nfok: " + matrix[Xindex][Yindex].getRotation_Degree() + " ");
                console.log("----------------------------------------------");
                console.log("Kimaradtszoba ELEM INFÓK: Xindex " + Xindex + "\ty: " + Yindex +
                    "\nshapetype" + KIMARADTSZOBA.get_shape_type() + " " +
                    "\nplayer: " + KIMARADTSZOBA.get_isPLAYER_IN() + " " +
                    "\ntreauser: " + KIMARADTSZOBA.get_isTREASURE_IN() + " " +
                    "\nconstans: " + KIMARADTSZOBA.get_isConstant() + " " +
                    "\nbal: " + KIMARADTSZOBA.get_isOPEN_LEFT() + " " +
                    "\nfel: " + KIMARADTSZOBA.get_isOPEN_UP() + " " +
                    "\njobb: " + KIMARADTSZOBA.get_isOPEN_RIGHT() + " " +
                    "\nlenn: " + KIMARADTSZOBA.get_isOPEN_DOWN() + " " +
                    "\nkep: " + KIMARADTSZOBA.getImage() + " " +
                    "\nfok: " + KIMARADTSZOBA.getRotation_Degree() + " ");
                console.log("----------------------------------------------");
                */
            //KIMARADT ELEM BEILLESZTÉSE:


            //4 különbőző irány tolása:
            //BAL oldal tolása jobbra
            //HA bal sorokból 2 4 6 akkor:
            //Balraról jobbra eltolom
            //Kimaradtszoba az első és az utolsó lesz a kimaradtszoba


            if (Yindex === 1 && (Xindex === 2 || Xindex === 4 || Xindex === 6)) {

                let KIMARADTSZOBAtmp = matrix[Xindex][table_size];
                for (let i = table_size; i > 1; i--) {
                    matrix[Xindex][i] = matrix[Xindex][i - 1];
                }

                matrix[Xindex][1] = KIMARADTSZOBA;
                KIMARADTSZOBA = KIMARADTSZOBAtmp;
                //Ha player lenne a kimaradtszobába
                if (KIMARADTSZOBA.get_isPLAYER_IN(true)) {
                    matrix[Xindex][1].set_isPLAYER_IN(true);
                    KIMARADTSZOBA.set_isPLAYER_IN(false);
                }
                //ha kincs lenne benne maradjon a helyén
                if (KIMARADTSZOBA.get_isTREASURE_IN(true)) {
                    matrix[Xindex][table_size].set_isTREASURE_IN(true);
                    KIMARADTSZOBA.set_isTREASURE_IN(false);
                }
                for (let i = 1; i < table_size; i++) {
                    if (matrix[Xindex][i].get_isTREASURE_IN(true)) {
                        matrix[Xindex][i].set_isTREASURE_IN(false);
                        matrix[Xindex][i - 1].set_isTREASURE_IN(true);

                    }

                }


                for (let i = 1; i < table_size + 1; i++) {
                    // console.log(matrix[i][j].get_shape_type());
                    let selectors = "#ROOM" + Xindex + i + "> img";
                    let cellquery = document.querySelector(selectors);
                    cellquery.setAttribute('src', matrix[Xindex][i].getImage());
                    cellquery.setAttribute('style', 'transform:' + matrix[Xindex][i].getRotation_Degree());

                }

                roomDiv.innerHTML = "";
                roomDiv.innerHTML = "A szobák cserélve! (Balról jobbra csere)";
                shapeleftDiv.innerHTML = "";
                //shapeleftDiv.innerHTML.src = KIMARADTSZOBA.getImage();
                let img = document.createElement("img");
                img.setAttribute('src', KIMARADTSZOBA.getImage());
                img.setAttribute('style', 'transform:' + KIMARADTSZOBA.getRotation_Degree());
                shapeleftDiv.appendChild(img);

            } else {
                roomDiv.innerHTML = "A páratlan sor nem cserélhető!";
            }

            //Jobbról balra csere
            if (Yindex === 7 && (Xindex === 2 || Xindex === 4 || Xindex === 6)) {

                let KIMARADTSZOBAtmp = matrix[Xindex][1];
                for (let i = 1; i < table_size + 1; i++) {
                    matrix[Xindex][i] = matrix[Xindex][i + 1];
                }

                matrix[Xindex][table_size] = KIMARADTSZOBA;
                KIMARADTSZOBA = KIMARADTSZOBAtmp;
                //Ha player lenne a kimaradtszobába
                if (KIMARADTSZOBA.get_isPLAYER_IN(true)) {
                    matrix[Xindex][table_size].set_isPLAYER_IN(true);
                    KIMARADTSZOBA.set_isPLAYER_IN(false);
                }
                //ha kincs lenne benne maradjon a helyén
                if (KIMARADTSZOBA.get_isTREASURE_IN(true)) {
                    matrix[Xindex][1].set_isTREASURE_IN(true);
                    KIMARADTSZOBA.set_isTREASURE_IN(false);
                }
                for (let i = table_size; i > 1; i--) {
                    if (matrix[Xindex][i].get_isTREASURE_IN(true)) {
                        matrix[Xindex][i].set_isTREASURE_IN(false);
                        matrix[Xindex][i + 1].set_isTREASURE_IN(true);

                    }

                }

                for (let i = 1; i < table_size + 1; i++) {
                    // console.log(matrix[i][j].get_shape_type());
                    let selectors = "#ROOM" + Xindex + i + "> img";
                    let cellquery = document.querySelector(selectors);
                    cellquery.setAttribute('src', matrix[Xindex][i].getImage());
                    cellquery.setAttribute('style', matrix[Xindex][i].getRotation_Degree());

                }


                roomDiv.innerHTML = "";
                roomDiv.innerHTML = "A szobák cserélve! (jobbról balra csere)";
                shapeleftDiv.innerHTML = "";
                //shapeleftDiv.innerHTML.src = KIMARADTSZOBA.getImage();
                let img = document.createElement("img");
                img.setAttribute('src', KIMARADTSZOBA.getImage());
                img.setAttribute('style', 'transform:' + KIMARADTSZOBA.getRotation_Degree());
                shapeleftDiv.appendChild(img);
            } else {
                roomDiv.innerHTML = "A páratlan sor nem cserélhető!";
            }

            //Up to down fentről le
            if (Xindex === 1 && Yindex === 2 || Xindex === 1 && Yindex === 4 || Xindex === 1 && Yindex === 6) {
                let KIMARADTSZOBAtmp = matrix[table_size][Yindex]; //lenti szoba
                let treasureX = 0;
                let treasureY = 0;
                for (let i = table_size; i > 1; i--) {
                    matrix[i][Yindex] = matrix[i - 1][Yindex];
                }
                //  matrix[treasureX][treasureY].set_isTREASURE_IN(true);
                matrix[1][Yindex] = KIMARADTSZOBA;
                KIMARADTSZOBA = KIMARADTSZOBAtmp;
                //Ha player lenne a kimaradtszobába
                if (KIMARADTSZOBA.get_isPLAYER_IN(true)) {
                    matrix[1][Yindex].set_isPLAYER_IN(true);
                    KIMARADTSZOBA.set_isPLAYER_IN(false);
                }


                //ha kincs lenne
                if (KIMARADTSZOBA.get_isTREASURE_IN(true)) {
                    matrix[table_size][Yindex].set_isTREASURE_IN(true);
                    KIMARADTSZOBA.set_isTREASURE_IN(false);
                }
                for (let i = 1; i < table_size; i++) {
                    if (matrix[i][Yindex].get_isTREASURE_IN(true)) {
                        matrix[i][Yindex].set_isTREASURE_IN(false);
                        matrix[i - 1][Yindex].set_isTREASURE_IN(true);

                    }

                }


                for (let i = 1; i < table_size + 1; i++) {

                    let selectors = "#ROOM" + i + Yindex + "> img";
                    let cellquery = document.querySelector(selectors);
                    cellquery.setAttribute('src', matrix[i][Yindex].getImage());
                    cellquery.setAttribute('style', 'transform:' + matrix[i][Yindex].getRotation_Degree());

                }

                roomDiv.innerHTML = "";
                roomDiv.innerHTML = "A fentről le csere megtörtént";
                shapeleftDiv.innerHTML = "";
                //shapeleftDiv.innerHTML.src = KIMARADTSZOBA.getImage();
                let img = document.createElement("img");
                img.setAttribute('src', KIMARADTSZOBA.getImage());
                img.setAttribute('style', 'transform:' + KIMARADTSZOBA.getRotation_Degree());
                shapeleftDiv.appendChild(img);


            } else if (Xindex === 1 && Yindex === 1 || Xindex === 1 && Yindex === 3 || Xindex === 1 && Yindex === 5 || Xindex === 1 && Yindex === 7) {
                roomDiv.innerHTML = "Páratlan oszlop nem cserélhető(Fentről le)"
            }


            //Lentről fel
            if (Xindex === 7 && (Yindex === 2 || Yindex === 4 || Yindex === 6)) {
                let KIMARADTSZOBAtmp = matrix[1][Yindex]; //első elem
                for (let i = 1; i < table_size; i++) {
                    matrix[i][Yindex] = matrix[i + 1][Yindex];
                }

                matrix[table_size - 1][Yindex] = KIMARADTSZOBA;

                matrix[Xindex][1] = KIMARADTSZOBA;
                KIMARADTSZOBA = KIMARADTSZOBAtmp;
                //Ha player lenne a kimaradtszobába
                if (KIMARADTSZOBA.get_isPLAYER_IN(true)) {
                    matrix[table_size][Yindex].set_isPLAYER_IN(true);
                    KIMARADTSZOBA.set_isPLAYER_IN(false);
                }
                //ha kincs lenne maradjon egy helyben
                if (KIMARADTSZOBA.get_isTREASURE_IN(true)) {
                    matrix[1][Yindex].set_isTREASURE_IN(true);
                    KIMARADTSZOBA.set_isTREASURE_IN(false);
                }
                for (let i = table_size; i > 1; i--) {
                    if (matrix[i][Yindex].get_isTREASURE_IN(true)) {
                        matrix[i][Yindex].set_isTREASURE_IN(false);
                        matrix[i + 1][Yindex].set_isTREASURE_IN(true);

                    }

                }


                for (let i = 1; i < table_size + 1; i++) {

                    let selectors = "#ROOM" + i + Yindex + "> img";
                    let cellquery = document.querySelector(selectors);
                    cellquery.setAttribute('src', matrix[i][Yindex].getImage());
                    cellquery.setAttribute('style', 'transform:' + matrix[i][Yindex].getRotation_Degree());

                }

                roomDiv.innerHTML = "";
                roomDiv.innerHTML = "Lenről fel csere megtörtént";
                shapeleftDiv.innerHTML = "";
                //shapeleftDiv.innerHTML.src = KIMARADTSZOBA.getImage();
                let img = document.createElement("img");
                img.setAttribute('src', KIMARADTSZOBA.getImage());
                img.setAttribute('style', 'transform:' + KIMARADTSZOBA.getRotation_Degree());
                shapeleftDiv.appendChild(img);


            } else if (Xindex === 7 && (Yindex === 1 || Yindex === 3 || Yindex === 5 || Yindex === 7)) {
                roomDiv.innerHTML = "Páratlan oszlop nem cserélhető(Lentről fel)"
            }

        }
    );
}