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
const MAX_CURVE_NUMBER = 15;
const MAX_T_NUMBER = 6;
const MAX_STRAIGHT_NUMBER = 13;

let curve_counter = 0;
let t_counter = 0;
let straight_counter = 0;

const table_size = 7;


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

        let rotation_degree;
        if (this.shape_type === SHAPES.CURVE) {
            if (this.isOPEN_LEFT == true && this.isOPEN_UP == true && this.isOPEN_RIGHT == true && this.isOPEN_DOWN == true) {
                console.log("error" + SHAPES.CURVE);
                return rotation_degree = 'rotate(0deg)';
            }
            //DEAULT 0 forgatás
            if (this.isOPEN_LEFT == false && this.isOPEN_UP == false && this.isOPEN_RIGHT == true && this.isOPEN_DOWN == false) {
                return rotation_degree = 'rotate(0deg)';
            }
            //BALALSÓ 270
            if (this.isOPEN_LEFT == false && this.isOPEN_UP == true && this.isOPEN_RIGHT == true && this.isOPEN_DOWN == false) {
                return rotation_degree = 'rotate(270deg)';
            }
            //JOBB FELSŐ 90
            if (this.isOPEN_LEFT == true && this.isOPEN_UP == false && this.isOPEN_RIGHT == false && this.isOPEN_DOWN == true) {
                return rotation_degree = 'rotate(90deg)';
            }
            //JOBB ALSÓ 180
            if (this.isOPEN_LEFT == true && this.isOPEN_UP == true && this.isOPEN_RIGHT == false && this.isOPEN_DOWN == false) {
                return rotation_degree = 'rotate(180deg)';
            }
        }

        if (this.shape_type === SHAPES.TSHAPE) {

            if (this.isOPEN_LEFT == true && this.isOPEN_UP == true && this.isOPEN_RIGHT == true && this.isOPEN_DOWN == true) {
                console.log("error" + SHAPES.CURVE);
                return rotation_degree = 'rotate(0deg)';
            }
            if (this.isOPEN_LEFT == true && this.isOPEN_UP == false && this.isOPEN_RIGHT == true && this.isOPEN_DOWN == true) {
                return rotation_degree = 'rotate(0deg)';
            }
            if (this.isOPEN_LEFT == true && this.isOPEN_UP == true && this.isOPEN_RIGHT == true && this.isOPEN_DOWN == false) {
                return rotation_degree = 'rotate(180deg)';
            }
            if (this.isOPEN_LEFT == false && this.isOPEN_UP == true && this.isOPEN_RIGHT == true && this.isOPEN_DOWN == true) {
                return rotation_degree = 'rotate(270deg)';
            }
            if (this.isOPEN_LEFT == true && this.isOPEN_UP == true && this.isOPEN_RIGHT == false && this.isOPEN_DOWN == true) {
                return rotation_degree = 'rotate(90deg)';
            }

        }

        if (this.shape_type === SHAPES.STRAIGHT) {

            if (this.isOPEN_LEFT == true && this.isOPEN_UP == true && this.isOPEN_RIGHT == true && this.isOPEN_DOWN == true) {
                console.log("error" + SHAPES.STRAIGHT);
                return rotation_degree = 'rotate(0deg)';
            }
            if (this.isOPEN_LEFT == true && this.isOPEN_UP == true && this.isOPEN_RIGHT == true && this.isOPEN_DOWN == false) {
                console.log("error" + SHAPES.STRAIGHT);
                return rotation_degree = 'rotate(0deg)';
            }


            if (this.isOPEN_LEFT == true && this.isOPEN_UP == false && this.isOPEN_RIGHT == true && this.isOPEN_DOWN == false) {
                return rotation_degree = 'rotate(0deg)';
            }

            if (this.isOPEN_LEFT == false && this.isOPEN_UP == true && this.isOPEN_RIGHT == false && this.isOPEN_DOWN == true) {
                return rotation_degree = 'rotate(90deg)';
            }


        }


        return rotation_degree
    }
}


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
                    let ROOM73 = new RoomShape(SHAPES.TSHAPE, false, false, true, true, true, true, false);
                    img.src = ROOM73.getImage();
                    img.style.transform = ROOM73.getRotation_Degree();

                    cell.appendChild(img);
                }
                if (row_value === 7 && column_value === 5) {
                    let ROOM75 = new RoomShape(SHAPES.TSHAPE, false, false, true, true, true, true, false);
                    img.src = ROOM75.getImage();
                    img.style.transform = ROOM75.getRotation_Degree();

                    cell.appendChild(img);
                }

                //BAL 2 Középső
                if (row_value === 3 && column_value === 1) {
                    let ROOM31 = new RoomShape(SHAPES.TSHAPE, false, false, true, false, true, true, true);
                    img.src = ROOM31.getImage();
                    img.style.transform = ROOM31.getRotation_Degree();

                    cell.appendChild(img);
                }
                if (row_value === 5 && column_value === 1) {
                    let ROOM51 = new RoomShape(SHAPES.TSHAPE, false, false, true, false, true, true, true);
                    img.src = ROOM51.getImage();
                    img.style.transform = ROOM51.getRotation_Degree();

                    cell.appendChild(img);
                }


                //JOBB 2 középső
                if (row_value === 3 && column_value === 7) {
                    let ROOM37 = new RoomShape(SHAPES.TSHAPE, false, false, true, true, true, false, true);
                    img.src = ROOM37.getImage();

                    cell.appendChild(img);
                }
                if (row_value === 5 && column_value === 7) {
                    let ROOM57 = new RoomShape(SHAPES.TSHAPE, false, false, true, true, true, false, true);
                    img.src = ROOM57.getImage();
                    img.style.transform = ROOM57.getRotation_Degree();

                    cell.appendChild(img);
                }

                //KÖZEPE
                //BAL FELSŐ
                if (row_value === 3 && column_value === 3) {
                    let ROOM33 = new RoomShape(SHAPES.TSHAPE, false, false, true, false, true, true, true);
                    img.src = ROOM33.getImage();
                    img.style.transform = ROOM33.getRotation_Degree();

                    cell.appendChild(img);
                }
                //KÖZEPE
                //JOBB FELSŐ
                if (row_value === 3 && column_value === 5) {
                    let ROOM35 = new RoomShape(SHAPES.TSHAPE, false, false, true, true, false, true, true);
                    img.src = ROOM35.getImage();
                    img.style.transform = ROOM35.getRotation_Degree();

                    cell.appendChild(img);
                }

                //KÖZEPE
                //BAL ALSÓ
                if (row_value === 5 && column_value === 3) {
                    let ROOM53 = new RoomShape(SHAPES.TSHAPE, false, false, true, true, true, true, false);
                    img.src = ROOM53.getImage();
                    img.style.transform = ROOM53.getRotation_Degree();

                    cell.appendChild(img);
                }

                //KÖZEPE
                //JOBB ALSÓ
                if (row_value === 5 && column_value === 5) {
                    let ROOM55 = new RoomShape(SHAPES.TSHAPE, false, false, true, true, true, false, true);
                    img.src = ROOM55.getImage();
                    img.style.transform = ROOM55.getRotation_Degree();

                    cell.appendChild(img);
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
                        curve_counter++;
                        addcounter=1;
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
                        let ROOM = new RoomShape(SHAPES.CURVE, false, false, false, true, false, true, true);
                        img.src = ROOM.getImage();
                        img.style.transform = ROOM.getRotation_Degree();
                        cell.appendChild(img);
                        t_counter++;
                        addcounter=1;

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
                            straight_counter++;
                            addcounter=1;

                        } else {
                            //staight  álló
                            let ROOM = new RoomShape(SHAPES.STRAIGHT, false, false, false, false, true, false, true);
                            img.src = ROOM.getImage();
                            img.style.transform = ROOM.getRotation_Degree();
                            cell.appendChild(img);
                            straight_counter++;
                            addcounter=1;

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

                }while (addcounter!==1);

               // console.log("curve: " + curve_counter + "/" + MAX_CURVE_NUMBER + "\t t-cnt: " + t_counter + "/" + MAX_T_NUMBER + "\t straight: " + straight_counter + "/" + MAX_STRAIGHT_NUMBER)

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
}
function generate_treasure() {
    //végigmegyek a táblán és 3 darab kincs nem sarkokba
    //Játéktér: A rácsra fel van helyezve legalább 3 kincs véletlen helyre (kivéve a sarkokat) (0,5 pont)
}
function spawn_player() {
    ///Játéktér: A rácsra fel van helyezve legalább 1 játékos figurája (0,5 pont)
}

//////////CONSTANTS:

const text = readTextFile("description.txt");
const startButton = document.querySelector("#start");
const descriptionButton = document.querySelector("#description");
const gametablediv = document.querySelector(".gametable");


function startGame() {
    //table.style.display = "block";
    gametablediv.innerHTML = "";

    curve_counter = 0;
    t_counter = 0;
    straight_counter = 0;

    generate_table_without_player_and_treasure();
    generate_treasure();
    spawn_player();

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