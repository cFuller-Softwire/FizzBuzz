function main() {
    for (let x = 1; x < 301; x++) {
        let multiString = "";
        if (isThree(x)) {
            multiString = multiString.concat("Fizz");
        }
        if (isFive(x)) {
            multiString = multiString.concat("Buzz");
        }
        if (isSeven(x)) {
            multiString = multiString.concat("Bang");
        }
        if (isEleven(x)) {
            multiString = "Bong";
        }
        if (isThirteen(x)) {
            let n = multiString.indexOf("B");
            if (n === -1) {
                multiString = multiString.concat("Fezz");
            } else {
                multiString = multiString.slice(0, n) + "Fezz" + multiString.slice(n);
            }
        }
        if (isSeventeen(x)) {
           multiString = reverseString(multiString);
        }
        displayResult(x , multiString);
    }
}

function isThree(x) {
    return (x % 3 === 0);
}

function isFive(x) {
    return (x % 5 === 0);
}

function isSeven(x) {
    return (x % 7 === 0);
}

function isEleven(x) {
    return (x % 11 === 0);
}

function isThirteen(x) {
    return (x % 13 === 0);
}

function isSeventeen(x) {
    return (x % 17 === 0);
}

function displayResult(x , multiString) {
    if (multiString === "") {
        console.log(x);
    } else {
        console.log(multiString);
    }
}

function reverseString(multiString) {
    let numWord = multiString.length / 4;
    let tempArr = [];
    for (let i = 0; i < numWord; i++) {
        tempArr.unshift(multiString.slice((i * 4), ((i + 1) * 4)));
    }
    multiString = tempArr.join("");
    return multiString;
}
main();