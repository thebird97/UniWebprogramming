function delegal(szulo, gyerek, mikor, mit) {
    function esemenyKezelo(ev) {
        const esemenyCelja = ev.target
        const esemenyKezeloje = this
        const legkozelebbiKeresettElem = esemenyCelja.closest(gyerek)

        if (esemenyKezeloje.contains(legkozelebbiKeresettElem)) {
            mit(ev, legkozelebbiKeresettElem)
        }
    }

    szulo.addEventListener(mikor, esemenyKezelo)
}

const candidates = [
    "Big Apple",
    "Small Hands",
    "Johnny Depp",
    "Not Ya",
    "Iggy Azalea"
]

const candidates_list = document.querySelector("ul");

candidates.forEach(j => {
    const li = document.createElement("li");
    li.innerText = j;
    li.classList.add("candidate")
    candidates_list.appendChild(li);
})


delegal(candidates_list,".candidate","click",handleClick);

function handleClick(event,target) {
    target.classList.toggle("in_parlaiment")
}

#Exercise
#https://bucsi.web.elte.hu/#!/webprog/almafa1#feladat-3