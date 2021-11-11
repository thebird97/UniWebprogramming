const editor = document.querySelector("#haiku-editor");
const numberofchars = document.querySelector("#number-of-characters");
const numberofrows = document.querySelector("#number-of-rows");
const mgh = "aáeéiíoóöőuúüű";
const vowPerRow = document.querySelector("#vowels-per-row");
const haikus = document.querySelector("#haikus")


editor.addEventListener("input", first);

function mgh_e(char){
    return mgh.indexOf(char) !== -1;
}

function first(){
    console.log(editor.value);
    numberofchars.innerHTML = editor.value.length;
    const rows = editor.value.match(/\n/g) || [];
    numberofrows.innerHTML = rows.length;
console.log(
    "Első sor mgh "+
    Array.from(editor.value.split("\n")[0]).reduce((s,x)=>(mgh_e(x)? s+1 : s),0)
)

    const vowelfst = Array.from(editor.value.split("\n")[0]).reduce((s,x)=>(mgh_e(x)? s+1 : s),0);
    const vovelsnd = Array.from(editor.value.split("\n")[1]).reduce((s,x)=>(mgh_e(x)? s+1 : s),0);
    const vowelthrd =  Array.from(editor.value.split("\n")[2]).reduce((s,x)=>(mgh_e(x)? s+1 : s),0);
    vowPerRow.children[0].innerHTML =   vowelfst;
    vowPerRow.children[1].innerHTML =   vovelsnd;
    vowPerRow.children[2].innerHTML =  vowelthrd;

    if(vowelfst===3 && vovelsnd ===2 && vowelthrd ===3){
        editor.parentElement.classList.add("haiku");

    }



}

document.querySelector("#btn-copy-haiku").addEventListener("click",()=> {
        const uj = document.createElement("pre");
        uj.innerHTML = editor.value;
        haikus.appendChild(uj);
    }
);
