// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    // Creating the empty array within an array
    let results = []
    for (let i = 0; i < n; i++) {
        results.push([])
    }

    // Starting conditions, using these values to move along the grid and 
    // fill in the matrix 
    let counter = 1
    let startColumn = 0
    let endColumn = n - 1
    let startRow = 0
    let endRow = n - 1

    while (startColumn <= endColumn && startRow <= endRow) {
        // Thinking of a cube
        // TL = Top Left, TR = Top Right, BL = Bottom Left, BR = Bottom Right
        // The first for loop will handle adding value from TL -> TR
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++
        }
        startRow++

        // The second for loop will handle adding value from TR -> BR
        for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter
            counter++
        }
        endColumn--

        // The third for loop will handle adding value from BR -> BL
        for (let i = endColumn; i >= startColumn; i--){
            results[endRow][i] = counter
            counter++
        }
        endRow--

        // The fourth for loop will handle adding value from BL -> TR
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter
            counter++
        }
        startColumn++
    }

    // debugger
    return results
}

// matrix(4)

module.exports = matrix;
