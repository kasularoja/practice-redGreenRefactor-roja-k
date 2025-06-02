
// countVowels.test.js
const { countVowels } = require('./countVowels');

describe('countVowels',  () => {

 test('whether it returns correct number of vowels', () => {
    expect(countVowels('Welcome')).toBe(3);
 });

 test("check for empty string", () => {
    expect(countVowels("")).toBe(0);
 })

 test("Check if it returns correct number of vowels even when uppercase and lowercase combined in a string", () => {
    expect(countVowels("HeLlo WoRld")).toBe(3);
 })

 test("Check if it returns no vowels exists in a string", () => {
    expect(countVowels("strtyfjk")).toBe(0);
 })

 test("Check if it returns correct vowel count for string with repeated characters", () => {
  expect(countVowels("aeiouuuuurty")).toBe(9);
})

test("Check if it returns correct vowel count for string combined with numbers", () => {
  expect(countVowels("a1e3o4u4")).toBe(4);
})


});