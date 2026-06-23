/*------------------------ Cached Element References ------------------------*/

const allSquareElements = document.querySelectorAll('.board')
const Resultmessage = document.querySelector('#message')

console.log(allSquareElements)
console.log(Resultmessage)

/*-------------------------------- Constants --------------------------------*/

const board = ['', '', '', '', '', '', '', 'X', '']

/*---------------------------- Variables (state) ----------------------------*/

let turn = 'X'
let winner = false
let tie = false

/*-------------------------------- Functions --------------------------------*/

function render() {

}

function updateBoard() {
    board.forEach((oneSqaure, index) => {
        allSquareElements[index].textContent = oneSqaure
    })
}


function init() {
    console.log('Init Game')
    updateBoard()
    render()
}



function play() {

}

/*----------------------------- Event Listeners -----------------------------*/

allSquareElements.forEach(oneSquare => oneSquare.addEventListener('click', play))