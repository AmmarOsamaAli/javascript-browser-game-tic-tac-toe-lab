/*------------------------ Cached Element References ------------------------*/

const allSquareElements = document.querySelectorAll('.sqr')
const Resultmessage = document.querySelector('#message')
const resetBtn = document.querySelector('#reset')

console.log(allSquareElements)
console.log(Resultmessage)

/*-------------------------------- Constants --------------------------------*/

const board = ['', '', '', '', '', '', '', '', '']
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

/*---------------------------- Variables (state) ----------------------------*/

let turn = 'X'
let winner = false
let tie = false

/*-------------------------------- Functions --------------------------------*/

function render() {
    updateBoard()
    updateMessage()
}

function placePiece(index) {
    if (turn === 'X') {
        board[index] = 'X'
    }
    else {
        board[index] = 'O'
    }
}

function handleClick(event) {
    const squareIndex = event.target.id

    if (board[squareIndex] || winner) { return }

    placePiece(squareIndex)
    checkForWinner()
    checkForTie()
    switchPlayerTurn()
    render()


}

function switchPlayerTurn() {
    if (winner) return
    if (!winner)
        if (turn === 'X') {
            turn = 'O'
        }
        else
            turn = "X"

}

function updateBoard(event) {
    board.forEach((oneSqaure, index) => {
        allSquareElements[index].textContent = oneSqaure
        if (oneSqaure === 'X') {
            allSquareElements[index].style.color = 'Blue'
            allSquareElements[index].style.fontWeight = '900'
        }
        else {
            allSquareElements[index].style.color = 'Red'
            allSquareElements[index].style.fontWeight = '900'
        }
    })
}


function updateMessage() {
    if (!winner && !tie) {
        Resultmessage.textContent = `${turn}'s Turn to play`
    }
    else if (!winner && tie)
        Resultmessage.textContent = "This is a Tie!"

    else {
        Resultmessage.textContent = turn + " is the WINNER!"
    }
}



function checkForWinner() {
    winningCombos.forEach((oneCombo, index) => {
        oneCombo[index]
        if (board[oneCombo[0]] === board[oneCombo[1]] && board[oneCombo[0]] === board[oneCombo[2]] && board[oneCombo[0]] != '') {
            winner = true
        }
    })
}

function checkForTie() {
    if (winner) return
    tie = board.every((item) => item)

}

// function resetGame() {
//     if (event.target.id === 'reset') {
//         board.forEach((oneSqaure) => {
//             oneSqaure.textContent = ''
//         })
//         console.log('reset')
//     }
// }



function init() {
    board.fill('')
    turn = 'X'
    winner = false
    tie = false
    render()
}
init()


/*----------------------------- Event Listeners -----------------------------*/
allSquareElements.forEach((oneSquare) => { oneSquare.addEventListener('click', handleClick) })
resetBtn.addEventListener('click', init)