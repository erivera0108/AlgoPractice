// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//     let solution = []

//     for (let word of str.split(' ')) {
//         solution.push(word[0].toUpperCase() + word.slice(1))
//     }

//     return solution.join(' ')
// }

function capitalize(str) {
    let solution = str[0].toUpperCase()
    for (let char = 1; char < str.length; char++){
        if (str[char - 1] === ' '){
            solution += (str[char] = str[char].toUpperCase())
        } else {
            solution += (str[char])
        }
    }
    // debugger
    return solution
}

// capitalize('a short sentence')

module.exports = capitalize;
