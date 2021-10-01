//1. exercise
console.log("Hello world!");
let n = 5
for (let i = 0; i < n; i++) {
    console.log("Hello world!");
}

//2. exercise
/**
 *
 * @param {number}fahrenheit
 * @returns {number}
 */

function fahrenheit_to_Celsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}

console.log(fahrenheit_to_Celsius(55));

//3.exercise
/**
 *
 * @param {number}number
 * @param {number}percent
 */
function calculatePercent(number, percent) {
    return (number * (percent / 100));
}

console.log(calculatePercent(10, 90))

//4.exercise
/**
 *
 * @param {number}a
 * @param {number}b
 * @param {number}c
 */
function is_triangle(a, b, c) {
    if (a + b > c && a + c > b && b + c > a && a > 0 && b > 0 && c > 0) {
        return true;
    }
    return false;
}

console.log(is_triangle(3, 4, 5))
console.log(is_triangle(-3, -4, -5))

/**
 *
 * @param {number}a
 * @param {number}b
 */

//5. exercise
function is_divisor(a, b) {
    if (a % b == 0) {
        return true;
    }
    return false;
}


console.log(is_divisor(5, 5));
console.log(is_divisor(4, 2));
console.log(is_divisor(4, 3));

//6. exercise
/**
 *
 * @param {number}x
 * @param {number}y
 */

function which_quater(x, y) {
    if (x < 0 && y < 0) {
        console.log("Bottom left");
    }
    if (x < 0 && y > 0) {
        console.log("Upper left");
    }
    if (x > 0 && y < 0) {
        console.log("Bottom right");
    }
    if (x > 0 && y > 0) {
        console.log("Upper right");
    }
    if (x == 0 && y == 0) {
        console.log("origo");
    }

}

console.log(which_quater(0, 0));
console.log(which_quater(-1, -1));
console.log(which_quater(-1, 1));
console.log(which_quater(1, 1));


//7. exercise
/**
 *
 * @param {number}a
 * @param {number}b
 */
function LNKO(a, b) {
    let temp;
    if (a < b) {
        temp = a;
        a = b;
        b = temp;
        /*
        Other way to swap variables
        a = a + b;
        b = a -b;
        a = a -b;
         */
    }
    let maradek = a % b;
    while (maradek > 0) {
        a = b;
        b = maradek;
        maradek = a % b;
    }
    return b;

}

console.log(LNKO(4, 8));


//8. exercise
function LLKT(a, b) {
    let x = a;
    let y = b;
    while(x!=y){
        if(x<y){x+=a;}
        else if(x>y){y+=b;}
    }
    return x;
}

console.log(LLKT(3,6));

//9. factorial
console.log("factorial")
/**
 *
 * @param {number}number
 */
function factorial_iterative(n) {
    var value = 1;
    for (var i = 2; i <= n; ++i) {
        value *= i;
    }
    return value;
}

console.log(factorial_iterative(-3));
console.log(factorial_iterative(0));
console.log(factorial_iterative(1));
console.log(factorial_iterative(2));
console.log(factorial_iterative(3));
console.log(factorial_iterative(4));
console.log(factorial_iterative(5));


function factorial_recursive(n){
    if(n=>0){
        if(n==0){return 1;}
        return n*factorial_recursive(n-1);
    }
}


console.log(factorial_recursive(0));
console.log(factorial_recursive(1));
console.log(factorial_recursive(2));
console.log(factorial_recursive(3));
console.log(factorial_recursive(4));
console.log(factorial_recursive(5));


//10.
function mod(a,b) {
    return a%b;
}

//11.

let arr = [1,2,3,4,5,-9,6,7,-8,-9,10]

//Search for first negative element place and value

const firstNegative = arr.find(number => number < 0);
console.log("The first negative number is " + firstNegative + " in " + arr.indexOf(firstNegative) + ". place");


let array2 = [1,2,3,4,5,6,7,8,9,10]
//12.
const count_even_numbers = (prevReturn, currentReturn) => {
    if (currentReturn % 2 === 0) {
        return prevReturn + 1
    } else {
        return prevReturn
    }
}

console.log("Even numbers " + array2.reduce(count_even_numbers,0));

//13.


const  solution = array2.map(x=>x>5);
console.log(solution);

//14.
let names = ["Tom", "Chis", "Dom", "Nathalie", "Nobody","Natasha","Nakka","Dorina","aldom","Dorro"];
const sub_names = names.filter(element => element.includes("Do"));

console.log(sub_names);

//21.
console.log("21.......")
let sheet = {
    errors: ["error1", "error2", "error3"]
}

for (let i = 0; i < sheet.errors.length; i++) {
    console.log(sheet.errors[i]);
}



let error_array = ["e1","e2","e3"]
console.log("OLD WAY");
for (let i = 0; i < error_array.length; i++) {
    console.log(error_array[i]);
}

console.log("forof way");
for (const string of error_array) {
    console.log(string)
}
console.log("forin way2");
for (const errorArrayKey in error_array) {
    console.log(errorArrayKey + " " + error_array[errorArrayKey])
}

console.log("forEach ");error_array.forEach(element => console.log(element));

console.log("Data structures");



