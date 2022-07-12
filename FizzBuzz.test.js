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
            [15, "FizzBuzz"],
            [17, 17]
        ]).test("%s -> %s", (num, expected) => {
            expect(fizzBuzz(num)).toEqual(expected);
        })
    })

    describe("It handles unexpected input succesfully", () => {

        each([
            [859359, "Fizz"],
            [11246240, "Buzz"],
            [300000, "FizzBuzz"],
            [542784382964, 542784382964]
        ]).test("%s -> %s", (num, expected) => {
            expect(fizzBuzz(num)).toEqual(expected);
        })
    })

    describe("It handles invalid input succesfully", () => {

        test("It throws an error if the input is NaN", () => {
            expect(() => {
                fizzBuzz(true)
            }).toThrow('Error: all inputs must be a number')
        })
    })
    


});