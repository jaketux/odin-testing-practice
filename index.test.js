// const calculatorFunction = require('./index');

// test('Allow the calculator formula to include an operator', () => {
//     expect(calculatorFunction(1,2,'sum')).toBe(3)}
// )

// test('Add using the calculator function', () => {
//     expect(calculatorFunction(1,2,'sum')).toBe(3)}
// )

// test('Subtract using the calculator function', () => {
//     expect(calculatorFunction(1,2,'subtract')).toBe(-1)}
// )

// test('Multiply using the calculator function', () => {
//     expect(calculatorFunction(1,2,'multiply')).toBe(2)}
// )

// test('Divide using the calculator function', () => {
//     expect(calculatorFunction(1,2,'divide')).toBe(0.5)}
// )

// test('If an incorrect operator is provided, throw an error', () => {
//     expect(calculatorFunction(1,2,'dawdwad')).toBe("Error, please enter a valid operator (sum, subtract, multiply, divide)")}
// )

// const toCapital = require('./index')

// test ("Check whether the first letter is capitalised", () => {
//     expect(toCapital("wwdWDwdWdwdWdd")).toBe("Wwdwdwdwdwdwdd")}
// )

// const reverseString = require('./index')

// test ('Return the string entered in as the reverse', () => {
//     expect(reverseString("Lets test this out. I want to believe!")).toBe('!eveileb ot tnaw I .tuo siht tset steL')}
// )

// test('Return the letters shifted 3 spaces', () => {
//     expect(caesarCipher("Hello, world!",3)).toBe('Khoor, zruog!')}
// )
// const caesarCipher = require('./index')

const analyzeArray = require('./index')

test('Return the average of the array', () => {
    expect(analyzeArray([1,1,2,5,84,45,53]).average).toBe(27.29)}
)

test('Return the minimum of the array', () => {
    expect(analyzeArray([1,1,2,5,84,45,53]).minimum).toBe(1)}
)

test('Return the maximum of the array', () => {
    expect(analyzeArray([1,1,2,5,84,45,53]).maximum).toBe(84)}
)

test('Return the length of the array', () => {
    expect(analyzeArray([1,1,2,5,84,45,53]).length).toBe(7)}
)