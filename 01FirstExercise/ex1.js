let text = "text"
let number = 123
let fraction = 123.4
let boolean = true

console.log("Here is a string", number);
console.log("Boolean", boolean);
console.log("AltGr + 7  instead of");
console.log(`Variable types and values ${typeof text} ${text} \n the number ${typeof fraction} \n boolean ${typeof boolean}`);

/*
Comment here
 */

//Arrays

let array = ["a", 123, false, ['i'], ['ii'], ['iii']];
let array2 = [text, number, fraction, boolean];

console.log(array);
console.log(array2);

console.log("js prototype language");

console.log("Array iteration");
console.log("Old school method");

for (let i = 0; i < array.length; i++) {
    console.log(`The array ${i}.th element is ${array[i]}`);
}

console.log("Array length:", array.length);
//Null and undefined
//console.log(array[100]);
console.log("lazy error handle");

console.log("Other array iteration methods for-of")
for (const arrayElement of array) {
    //console.log("arrayElement ", arrayElement);
    console.log(`Element of array ${arrayElement}`);
}

console.log("arrayKey iteration");
for (const arrayKey in array) {
    console.log("arrayKey", arrayKey);
}

console.log("USE const");
const Variable22 = 22
console.log(Variable22)

/**
 * Write the element
 * @param {String}element
 */
function whiteout(element) {
    console.log(element)
}


console.log("Array forEach")
array.forEach(whiteout, array);


console.log("Other way to write");
//const whiteout1 = (element) => console.log(element);
//console.log(whiteout1());

console.log("Add");
const add = (a, b) => a + b;
const multiple = (param1, param2) => {
    return param1 + param2;
}
console.log("Antonym functions");

console.log(add(1, 2));
console.log(multiple(1, 2));
console.log(multiple('a', 'b'));

console.log("Objects");

let obj = {
    "Tom": {
        age: "24",
        work: "teacher",
        current: true
    },
    "Vic": {
        age: "24",
        work: "msc",
        current: false
    },
    "Aaron": {
        age: "22",
        work: "bsc",
        current: false
    }
}


//const teacher = {[name,age,work],{name: "xyz",age: "24",work: "teacher"}};

for (const objKey in obj) {
    console.log(objKey);
}


for (const objKey in obj) {
    console.log(obj[objKey]);
}

console.log("Other array functions");


console.log("ELDÖNTÉS PROGRAMOZÁSI TÉTEL");
const array_numbers = [2, 4, 5, 6, 8, 10, 12, 14]
const contain_even_numbers = array_numbers.some(number => number % 2 === 0)
console.log("Does the array contain even array_numbers?", contain_even_numbers)


const array_numbers2 = [3, 9, 29]
const contain_even_numbers2 = array_numbers2.some(number => number % 2 === 0)

console.log("Does the array contain even array_numbers2?", contain_even_numbers2)


console.log("Minden elem: array.every")
console.log("Legalább 1 elem: array.some")

console.log("In this array does all element disable by 2?");
const array_numbers3 = [1, 2, 3, 4, 5];
const all_numbers_even = array_numbers3.every(number => number % 2 === 0);
console.log("In " + array_numbers3 + " does all element disable by 2? " + all_numbers_even);

const array_numbers4 = [2, 4, 8];
const all_numbers_even2 = array_numbers4.every(number => number % 2 === 0);
console.log("In " + array_numbers4 + "  does all element disable by 2? " + all_numbers_even2);

console.log("Find nth element");
console.log("Find index element KERESÉS");
const array_numbers5 = [1, 2, 3, 4, 5];
const which_element = array_numbers5.find(number => number % 2 === 0);
console.log("Value number divisible by 2 in " + array_numbers4 + " the " + which_element + " the element place " + array_numbers5.indexOf(which_element));

console.log("Search in string array");
const string_array = ["apple", "dog", "banana", "cat", "boolean"];
console.log("Search for cat:");
const element_in_string = string_array.find(str => str === "cat");
console.log("In " + string_array + " array there is a string that equal with cat=" + element_in_string + " in " + string_array.indexOf(element_in_string) + ". th place.")


console.log("SUMMARY");

const summa = (prevReturn, currentReturn) => prevReturn + currentReturn;
const sum = array_numbers.reduce(summa);
console.log(sum);


console.log("Count even numbers");
//const array_numbers5 = [1,2,3,4,5];
const count = (prevReturn, currentReturn) => {
    if (currentReturn % 2 === 0) {
        return prevReturn + 1
    } else {
        return prevReturn
    }
}
const even_Piece = array_numbers5.reduce(count,0);
console.log("Even numbers in " + array_numbers5 +" : " + even_Piece);

