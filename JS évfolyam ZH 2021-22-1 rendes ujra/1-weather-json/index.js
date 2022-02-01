const textarea = document.querySelector('#the-textarea');
const button = document.querySelector('#the-button');
const task1 = document.querySelector('#task1')
const task2 = document.querySelector('#task2')
const task3 = document.querySelector('#task3')
const task4 = document.querySelector('#task4')
const task5 = document.querySelector('#task5')


function readText() {
    /*
a. (1 pont) A JSON egyelőre egy többsoros szöveges beviteli mezőben van szövegként megadva.
Egy gombra kattintva olvasd ki a beviteli mező tartalmát, és a szöveges JSON-t alakítsd át JavaScript objektummá,
és írd ki a konzolra! Megjegyzés: A további feladatok az így beolvasott JavaScript objektummal fognak dolgozni.
Ha nem tudod átalakítani, akkor egyszerűen másold ki a szöveges beviteli mezőből, és add egy változónak értékül. Ebben az esetben pont nem jár érte.

 */
    let textaretext = textarea.value;
    let jsobject = JSON.parse(textaretext);
    console.log(jsobject)

    /*
    b. (2 pont) A task1 azonosítójú elembe írd ki annak a napnak az azonosítóját, amikor a déli szél felhőket hoz!
     A daily tömbbel kell dolgozni, dt az azonosító, déli szélnek a wind_deg 180-45 és 180+45 fok közé eső értékei számítanak,
      az időjárást pedig a weather tömb első elemének main tulajdonsága tartalmazza (Clouds).


     */
    let dayid= 0;
    console.log("\nb rész");
   /* console.log(jsobject.daily[1].dt);
    console.log(jsobject.daily.length);
    console.log(jsobject.daily[1].weather[0].main);
*/
    for (let i = 0; i < jsobject.daily.length; i++) {
        if (jsobject.daily[i].wind_deg < 180 && jsobject.daily[i].wind_deg > 45) {
            if(jsobject.daily[i].weather[0].main == 'Clouds'){
               // console.log("ezzeaz " + jsobject.daily[i].dt);
                dayid = jsobject.daily[i].dt;
                break;
            }
        }
    }
    task1.innerHTML = dayid;


    //c. (1 pont) A task2 azonosítójú elembe írd ki a legkisebb napi maximumot! A daily tömbbel kell dolgozni, a napi maximum a temp max tulajdonsága.
    let min = Infinity;
    for (let i = 0; i < jsobject.daily.length; i++) {
       if(jsobject.daily[i].temp.max < min){
           min = jsobject.daily[i].temp.max;
       }
    }
    task2.innerHTML = min;



    /*
    d. (1 pont) A task3 azonosítójú elembe írd ki, hogy vajon a légnyomás minden nap 1010 fölött van-e!
    A daily tömbbel kell dolgozni, a légnyomást a pressure tulajdonság tartalmazza.
     */
    let above1010 = false;
    for (let i = 0; i < jsobject.daily.length; i++) {
        if(jsobject.daily[i].pressure<=1010){
            above1010 = false;
            break;
        }else{
            above1010 = true;
        }
    }
    task3.innerHTML = above1010;


    /*
    e. (2 pont) A task4 azonosítójú elembe írd ki az átlagosan érzett napi hőmérsékletet!
     A daily tömbbel kell dolgozni, a napi érzett hőmérséklet a feels_like rekord day tulajdonsága.

     */
    let avgdailyhom = 0;
    let summa = 0;
    for (let i = 0; i < jsobject.daily.length; i++) {
           summa +=  jsobject.daily[i].feels_like.day;
    }
    avgdailyhom = summa / jsobject.daily.length;
    task4.innerHTML = avgdailyhom;

    /*
    f. (1 pont) A task5 azonosítójú elembe írd ki a szeles órák számát!
     Az hourly tömbbel kell dolgozni, szeles órának pedig az számít, amikor a wind_speed nagyobb, mint 3.

     */

    let windyhours = 0;
    for (let i = 0; i < jsobject.hourly.length; i++) {
        if (jsobject.hourly[i].wind_speed > 3) {
            windyhours++;
        }
    }
    task5.innerHTML = windyhours;


}

button.addEventListener('click', readText);