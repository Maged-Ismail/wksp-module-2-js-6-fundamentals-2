// Exercise 2.2 - the Custom Grid
// ------------

// Use the grid code you wrote in 2.1

// Objectives
// Allow the user to create cells on the board based on values he/she inputs.
// - Ask the user the number of ROWS and COLUMNS
// - Use those values to generate a grid

// Hints
// - use the 'blur' event
// - one event listener per input

// If you need extra hints, see somebody... :)

const board = document.getElementById('board');
const rowsIn = document.getElementById('rows-input');
const colIn = document.getElementById('columns-input');
let rowDiv = '';
let colDiv='';
let rowN = 0;
let colN = 0;
board.style.height='600px';
board.style.width='600px';
board.style.display='grid';
// board.style.gridTemplateRows='1fr 1fr 1fr 1fr 1fr';
// board.style.gridTemplateColumns='1fr 1fr 1fr 1fr 1fr';

function rowed(){
    rowN= rowsIn.value;
    for (i=0; i<rowN; i++){
    rowDiv += '1fr ';}
    console.log(rowDiv);
    board.style.gridTemplateRows = rowDiv;
    rowsIn.removeEventListener('blur', rowed);
}
function coled(){
    colN= colIn.value;
    for (i=0; i<colN; i++){
    colDiv += '1fr ';}
    console.log(colDiv);
    board.style.gridTemplateColumns= colDiv;
    colIn.removeEventListener('blur', coled);
}

rowsIn.addEventListener('blur', rowed);
colIn.addEventListener('blur', coled);

setTimeout(function(){
let cellN = rowN*colN
console.log(cellN);
for (let i=0; i<cellN; i++){
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.id = `cell-${i}`;
    board.appendChild(cell);
}}, 5000);
