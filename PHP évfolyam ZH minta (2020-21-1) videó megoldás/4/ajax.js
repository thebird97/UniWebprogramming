console.log('fut');
const incomeButton = document.querySelector("#income");
const spendButton = document.querySelector('#spend');
const  table = document.querySelector('table');
const goldinput = document.querySelector('#gold');
const silverinput = document.querySelector('#silver');


async function handleUpdate(multi) {
    console.log('valt');
    let change = multi * goldinput.valueAsNumber *12 + silverinput.valueAsNumber;
    let resp = await fetch('ajax.php?change'+change);
    let data = await resp.json();
    if(data['succes']){
        let tr = document.createElement('tr');
        table.appendChild(tr);
        let td1 = document.createElement('td');
        td1.innerText = data['time'];
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerText = data['balance'];
        tr.appendChild(td2);
    }


}

incomeButton.addEventListener('click',() => handleUpdate(1));
spendButton.addEventListener('click',() =>handleUpdate(-1));

