/* Webprogramozás csoportZH - 2021. október 01.

Madár Bálint
MRPBLG

Ezt a megoldást a fent írt hallgató küldte be és készítette
a Webprogramozás kurzus JavaScript csoport ZH-jához.

Kijelentem, hogy ez a megoldás a saját munkám. Nem másoltam vagy
használtam harmadik féltől származó megoldásokat. Nem továbbítottam
megoldást hallgatótársaimnak, és nem is tettem közzé. Az Eötvös Loránd
Tudományegyetem Hallgatói Követelményrendszere (ELTE szervezeti és
működési szabályzata, II. Kötet, 74/C. §) kimondja, hogy mindaddig,
amíg egy hallgató egy másik hallgató munkáját - vagy legalábbis annak
jelentős részét - saját munkájaként mutatja be, az fegyelmi vétségnek számít.
A fegyelmi vétség legsúlyosabb következménye a hallgató elbocsátása az egyetemről.
*/


const ovodasok = [
    {
        nev: "Szőrmók Tomika",
        kor: 6
    },
    {
        nev: "Kalapácsos Viktorka",
        kor: 6
    },
    {
        nev: "Burgonya Kristófka",
        kor: 5
    },
    {
        nev: "Kis Bendike",
        kor: 5
    },
    {
        nev: "Szőrmók Áronka",
        kor: 5
    },
    {
        nev: "Cindom Marcika",
        kor: 7
    },
    {
        nev: "Comicsans Bogdánka",
        kor: 4
    }
]

for (const oElement of ovodasok) {
    console.log(oElement.nev + " " + oElement.kor + " éves, és a Webprogramozócska csoportba jár.");
}


console.log("Határozd meg, ki a legfiatalabb óvodás!\t");
//const legfiatalabb = Math.min.apply(Math, ovodasok.map(function(o) { return o.kor; })) ///rosz megoldás
const legfiatalabb = ovodasok.reduce(function (prev, curr) {
    return prev.kor < curr.kor ? prev : curr;
});
console.log(legfiatalabb.nev);

console.log("Van 6 évnél idősebbóvodás a csoportban?")

const van_e_hatnalidosebb = ovodasok.some(o => o.kor > 6)
console.log(van_e_hatnalidosebb);

console.log("Mi az óvodások átlagéletkora?");
let sum = 0;
for (const o of ovodasok) {
    sum += o.kor;
}
console.log(Math.floor(sum / ovodasok.length));

console.log("Mi az óvodások átlagéletkora? 1-soros");
const average = ovodasok.reduce((total, next) => total + next.kor, 0) / ovodasok.length;
console.log(Math.floor(average));

console.log("2. DOM generálás - 3 pont");

const a_het = document.querySelector("#a");
const b_het = document.querySelector("#b");

fist_part = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
ovodasok.forEach(o => {
    const item = document.createElement("li")
    if (fist_part.includes(o.nev.charAt(0))) {
        item.innerText = o.nev;
        a_het.classList.add('a');
        a_het.appendChild(item);
    } else {
        const item2 = document.createElement("li");
        item2.innerText = o.nev;
        b_het.classList.add('b');
        b_het.appendChild(item2);
    }

})


//Hardmadik feladat
let mostani = 1;
const tbody = document.querySelector('table');
tbody.addEventListener('click', function (e) {
    const cell = e.target.closest('td');
    if (!cell) {
        return;
    }
    const row = cell.parentElement;
    let ertek = cell.innerHTML;
    console.log(ertek);

  if(mostani === 1 && parseInt(ertek) === 1){
      console.log("1 most");
      mostani++;
  }
  else if(mostani === parseInt(ertek)){
      console.log("OK");
      mostani++;
  }
  else if(mostani!=parseInt(ertek)){
      console.log("error go back to 1");
      mostani = 1;
  }

    if (parseInt(ertek) === 10 && mostani === 11) {
        console.log(mostani);
        console.log("Teljesítetted az ugróiskolát!");
        console.log("GO back to 1!!!");
        mostani = 1;
    }
});