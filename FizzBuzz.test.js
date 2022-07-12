const each = require('jest-each').default;
const { fizzBuzz } = require("./FizzBuzz.js");


describe("fizzbuzz", () => {

    test("fizzBuzz is a function", () => {
        expect(typeof fizzBuzz).toBe("function");
    })

    describe("It handles normal inputs sucessfully", () => {

        each([
            [3, "Fizz"],
            [5, "Buzz"],
            [15, "FizzBuzz"]
        ]).test("%s -> %s", (num, expected) => {
            expect(fizzBuzz(num)).toEqual(expected);
        })
    })

    describe("It handles unexpected input succesfully", () => {

        each([
            [859359, "Fizz"],
            [11246240, "Buzz"],
            [300000, "FizzBuzz"]
        ]).test("%s -> %s", (num, expected) => {
            expect(fizzBuzz(num)).toEqual(expected);
        })
    })


    


});