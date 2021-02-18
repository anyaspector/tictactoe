//Anya Spector
//Feb 18, 2021
//Tic tac toe in console


//this is stuff so we can write in the console
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// store values on the board
let values = new Array(9).fill(' ');
const checks = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]
function printBoard(values) {
    console.log("\n")
    console.log("\t     |     |")
    console.log("\t ", values[0], " |", values[1], "  |", values[2])
    console.log("\t_____|_____|_____")
    console.log("\t     |     |")
    console.log("\t ", values[3], " |", values[4], "  |", values[5])
    console.log("\t_____|_____|_____")
    console.log("\t     |     |")
    console.log("\t ", values[6], " |", values[7], "  |", values[8])
    console.log("\n")
}

function ask(question) {
    return new Promise((resolve) => {
        rl.question(question, resolve)
    })
}
//function to check if three boxes are the same
function oneTwoThree(box1, box2, box3) {
    return values[box1] !== ' '
        && [values[box1],
        values[box2],
        values[box3]]
            .every((val) => val === values[box1])
}
//function checkWin return false unless player won
function checkWin() {
    return checks.some((check) => oneTwoThree(...check))
}

function stalemate() {
    return !(values.some((element) => element == 0))
}

async function play() {
    //switch players each turn
    let win = false
    let curPlayer = 'O'
    while (win == false) {
        printBoard(values)
        var box = Number.parseInt(await ask(`Player ${curPlayer}: Which box?  `))
        try {
            if (!((0 < box) && (box < 10))) {
                throw ("Sorry you need to enter a number between 1 and 9")
            }
            if (values[box - 1] != ' ') {
                throw ("Sorry that spot's taken!")
            }
            values[box - 1] = curPlayer
            win = checkWin()
            if (win) {
                printBoard(values)
                console.log(curPlayer, " has won the game!")
            } else {
                stale = stalemate()
                if (stale) {
                    printBoard(values)
                    console.log("STALEMATE")
                    win = true
                }
            }
            curPlayer = curPlayer === 'O' ? 'X' : 'O'
        } catch (error) {
            console.log(error)
        }
    }
}

var result = play()
