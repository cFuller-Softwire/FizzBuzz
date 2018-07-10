const readline = require('readline-sync');

function main() {
    printWelcome();
    console.log("Please enter a maximum number:");
    let max = inputInt();

    //const rules = [];

    for (let x = 1; x <= max; x++) {
       /* for (let rule of rules) {
            // if rule is enabled {
            result = rule(x, resultArr);
            // }
        }*/

        let result = [];

        if (x % 3 === 0) {
            result.push("Fizz");
        }
        if (x % 13 === 0) {
            result.push("Fezz");
        }
        if (x % 5 === 0) {
            result.push("Buzz");
        }
        if (x % 7 === 0) {
            result.push("Bang");
        }
        if (x % 11 === 0) {
            result = [];
            result.push("Bong");
        }

        if (x % 17 === 0) {
            result = result.reverse();
        }
        displayResult(x, result);
    }
}


function displayResult(x, resultArr) {
    if (resultArr.length === 0) {
        console.log(x);
    } else {
        let finalString = resultArr.join("");
        console.log(finalString);
    }
}

function inputInt() {
    while (true) {
        const input = parseInt(readline.prompt());
        if (isNaN(input)) {
            console.log("Please enter a valid input (MUST BE NUMBER).")
        } else {
            return input
        }
    }
}

function printWelcome() {
    console.log('Welcome to FizzBuzz');
    console.log('-------------------');
}

main();