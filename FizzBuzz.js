const fizzBuzz = (num) => {
    if (typeof num != "number") {
        throw 'Error: all inputs must be a number'
    } else {
        if (num % 3 == 0 && num % 5 == 0) {
        return "FizzBuzz";
        } else if (num % 3 == 0) {
        return "Fizz";
        }  else if (num % 5 == 0) {
        return "Buzz";
        } else {
        return num;
        }
    }
    
}

console.log(fizzBuzz(542784382964));
console.log(fizzBuzz("Hippo"));
console.log(fizzBuzz(542784382964));
console.log("it works");


module.exports = {
    fizzBuzz: fizzBuzz
}