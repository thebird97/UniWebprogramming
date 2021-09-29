/* For 1 button
const button = document.querySelector("button");
//button.parentElement.fistElementChild

button.addEventListener("click", increaseVote);


function increaseVote() {
    const votes = this.parentElement.firstElementChild;
    let current = parseInt(votes.innerText);
    current += 1;
    votes.innerText= current;
}

*/

const buttons = document.querySelectorAll("button");
//button.parentElement.fistElementChild
buttons.forEach(b=> b.addEventListener("click",increaseVote));

function increaseVote() {
    const votes = this.parentElement.firstElementChild;
    let current = parseInt(votes.innerText);
    current += 1;
    votes.innerText= current;
}