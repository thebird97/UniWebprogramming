const textarea = document.querySelector('#text-image-urls')
const button = document.querySelector('#button-to-select')
const select = document.querySelector('#select-image-urls')
const border = document.querySelector('#border')
const div = document.querySelector('#images')
const bigImage = document.querySelector('#big')


function copyto() {
    let mytext = textarea.value;
    let myarr = mytext.split('\n');
    console.log(myarr);


    // a. (2 pont) A button-to-select gombra kattintva másold át a szöveges beviteli mező sorait a listába!
    for (let i = 0; i < myarr.length; i++) {
        let li = document.createElement("option");
        li.appendChild(document.createTextNode(myarr[i]));
        select.appendChild(li);
    }


//b. (2 pont) A listaelemben egy kép URL-t kiválasztva, az megjelenik az images azonosítójú div-en belül képként.


}

button.addEventListener('click', copyto)

function getImage() {

    //c. (1 pont) A listaelemben több kép URL-t választva (Ctrl billentyű segítségével) mindegyik kiválasztott kép megjelenik az images azonosítójú div-en belül.
    document.body.onclick = function (e) {
        if (e.ctrlKey) {
            /* let imgarray = [];
             imgarray.push(select.value);
            // console.log("imgarrta" +  imgarray);


             for (let i = 0; i < imgarray.length; i++) {
                 console.log("aarrayfutle" + imgarray[i])
                 let img = document.createElement("img");
                 img.src = imgarray[i];
                 div.appendChild(img);


             }
         */
            const options = Array.from(select.selectedOptions)
            div.innerHTML = ''
            options.forEach(option => div.innerHTML += `<img src="${option.text}">`)
        } else {
            //b. (2 pont) A listaelemben egy kép URL-t kiválasztva, az megjelenik az images azonosítójú div-en belül képként.
            div.innerHTML = "";
            let img = document.createElement("img");
            img.src = select.value;
            div.appendChild(img);
        }
    }


}

select.addEventListener('click', getImage);


//d. (1 pont) Egy kis kép fölé víve az egeret az adott kép megjelenik nagy képként a big azonosítójú képben.
function rajtaVan(e) {
    if(e.target.matches('img')){
        bigImage.src = e.target.src;
    }
}

div.addEventListener('mouseover',rajtaVan);

//e. (2 pont) A border azonosítójú range slidert mozgatva a big azonosítójú kép keretének vastagsága a kiválasztott értéknek megfelelően változik.

function updateBorder() {
    bigImage.style.borderWidth = parseInt(border.value) + 'px';
}

border.addEventListener('input',updateBorder);