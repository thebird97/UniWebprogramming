const textarea = document.querySelector('#text')
const task1 = document.querySelector('#task1')
const task2 = document.querySelector('#task2')
const task3 = document.querySelector('#task3')
const task4 = document.querySelector('#task4')
const task5 = document.querySelector('#task5')



task1.innerHTML = textarea.value.length;




//a. (1 pont) A task1 azonosítójú elembe írd ki a beírt karakterek számát!
textarea.addEventListener("input", event => {
    let  target = event.currentTarget;

    let currentLength = target.value.length;
    task1.innerHTML = currentLength;




    ///b. (1 pont) A task2 azonosítójú elembe írd ki a mondatok számát! Gyakorlatilag számold meg, hogy hány .!? karakter van a szövegben!
    let  text = target.value;
    const re = /[.!?]/;
    const numOfSentences = text.split(re);
    let nsentences = numOfSentences.length - 1

    task2.innerHTML = nsentences;


  //  c. (1 pont) A task3 azonosítójú elembe írd ki a szavak számát! Szónak tekintjük azokat a karaktersorozatokat, amelyeket szóközök választanak el egymástól! (Ha tömbbé bontod a szöveget, akkor ügyelj arra, nehogy üres elemek legyenek a tömbben!)

    const re2 = ' ';
    const numofWords = text.split(re2);
    let nWordsInner = numofWords.length - 1

    task3.innerHTML = nWordsInner;

    //d. (2 pont) A task4 azonosítójú elembe írd ki, hogy mindegyik szó tartalmaz-e magánhangzót ('aáeéiíoóöőuúüűAÁEÉIÍOÓÖŐUÚÜŰ')!

    let myArray = text.split(" ");
   let counterarray= [];
    const countVowels = str => Array.from(str).filter(letter => 'aáeéiíoóöőuúüűAÁEÉIÍOÓÖŐUÚÜŰ'.includes(letter)).length;
  for(vale of myArray){

      counterarray.push(countVowels(vale))

  }

    for (let i = 0; i < counterarray.length; i++) {
       //console.log(counterarray[i]);
        if(counterarray[i] === 0){
            task4.innerHTML = "false";
            break;
        }else{
            task4.innerHTML = "true";
        }
    }
    //e. (2 pont) A task5 azonosítójú elembe írd ki a leghosszabb szót (több esetén is egyet)! (Előfordulhat, hogy a leghosszabb szó vesszővel vagy más speciális karakterrel végződik, az ilyen esetekkel nem szükséges külön foglalkozni.)
    let longest = myArray.reduce(
        function (a, b) {
            return a.length > b.length ? a : b;
        }
    );
    task5.innerHTML = longest;
});



