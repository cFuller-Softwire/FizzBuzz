function main() {
    for (let x = 1; x < 101; x++) {
        let multiString = "";
        if(isThree(x)){
            multiString = multiString.concat("Fizz");
        }
        if(isFive(x)) {
            multiString = multiString.concat("Buzz");
        }
        if(isSeven(x)) {
            multiString = multiString.concat("Bang");
        }
        if(multiString === "") {
            console.log(x);
        } else {
            console.log(multiString);
        }

    }
}

function isThree(x) {
    if (x % 3 === 0) {
        return true;
    } else {
        return false;
    }
}

function isFive(x) {
    if (x % 5 === 0) {
        return true;
    } else {
        return false;
    }
}

function isSeven(x) {
    if (x % 7 === 0) {
        return true;
    } else {
        return false;
    }
}

main();