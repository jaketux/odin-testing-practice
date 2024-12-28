

// function calculatorFunction(num1, num2, operator){
//     if (operator === 'sum'){
//         return num1 + num2
//     } else if (operator === 'subtract'){
//         return num1 - num2
//     } else if (operator === 'multiply'){
//         return num1 * num2
//     } else if (operator === 'divide'){
//         return num1 / num2
//     } else {
//         return "Error, please enter a valid operator (sum, subtract, multiply, divide)"
//     }
// }

// function toCapital(word){
//     let capitalisedWord = []
//     capitalisedWord.push(word[0].toUpperCase())
//     for (i = 1; i<word.length;i++){
//         capitalisedWord.push(word[i].toLowerCase())
//     }
//     return capitalisedWord.join("")
// }

// function reverseString(string){
//     let reversedString = []
//     for (i = string.length; i>0; i--){
//         reversedString.push(string[i-1])
//     }
//     return reversedString.join("")
// }

// function caesarCipher(string, key){

//     let cipheredString = ""
//     for (i = 0; i<string.length; i++){
//         const character = string[i];
//         //if character is a letter, convert it
//         if (/[a-z]/i.test(character)){
//             const charCode = character.charCodeAt(0)
//             let base = (charCode >= 'a'.charCodeAt(0)) ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0)
//             cipheredString += String.fromCharCode((charCode - base + key ) % 26 + base)
//             } else {
//                 cipheredString += character
//             }
//     } 
//         return cipheredString
// }


function analyzeArray(array){

    let averageTracker = 0
    let sortedArray = array.sort(function(a,b) {{
        return a - b
    }})

    for (i = 0; i < array.length;i++){
        averageTracker += array[i]
    }


    let average = Math.round((averageTracker / array.length)*100)/100

    let object = {
        average: average,
        minimum: sortedArray[0],
        maximum: sortedArray[sortedArray.length-1],
        length: sortedArray.length
    }

    return object
}

module.exports = analyzeArray

