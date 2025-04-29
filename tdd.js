

/*
//red
const parse = require('../countVowels');
describe("count vowels", function() {
   test("return vowels counted when 'banana'", () => {
       let result = countVowels("banana"));
       expect(result).toBe(3);
   });
});

const countVowels = require('../countVowels');
describe("countVowels function", function() {
    test("returns correct number of vowels in a word", () => {
        expect(countVowels("hello")).toBe(2);
        expect(countVowels("world")).toBe(1);
        expect(countVowels("")).toBe(0);
        expect(countVowels("AEIOU")).toBe(5); // checks case-insensitivity
        expect(countVowels("bcd")).toBe(0);
    });
});

//green
function countVowels(word) {
    return word.split("").filter(char => "aeiou".includes(char)).length
}
console.log(countVowels("banana"));
*/
//refactor
function countVowels(word) {
    return word.toLowerCase().split("").filter(char => "aeiou".includes(char)).length
}
console.log(countVowels("banAna"));
//
