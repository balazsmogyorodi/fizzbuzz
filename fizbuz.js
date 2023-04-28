function aktErtek(n) {
    if (n % 3 === 0 && n % 5 === 0) {
        return "Fizz Buzz";
    } else {
        if (n % 3 === 0) {
            return "Fizz";
        }
        else {
            if (n % 5 === 0) {
                return "Buzz";
            }
            else {
                return n;
            }
        }
    }
}

function sorozat(len) {
    let tomb = new Array(len);
    for (let index = 0; index < tomb.length; index++) {
        tomb[index] = aktErtek(index + 1);
    }
    return tomb.toString();
}