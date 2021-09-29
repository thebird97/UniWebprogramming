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
    li.classList.add("Candidate:")
    li.classList.add("in_parlaiment");
    candidates_list.appendChild(li);
})


