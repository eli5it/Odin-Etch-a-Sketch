const gridLength = 400; // note: this is not yet dynamic - it should read the input off of the html ( I think)
let numSquares = 16;
const container = document.querySelector('.grid-container');
function makeGrid(gridLength, numSquares) {
    //  num num -> divs in html
    // takes in a sidelength for the (square)  grid
    // and a number of squares to be made 
    // -ex (16 means 16 squares long by 16 squares wide)
    // each square has an id corresponding to the point at which it was created
    // so the first created square has (id = 1), and so on
    let squareLength = gridLength / numSquares;
    
    
    for (let i = 1; i <= (numSquares ** 2); i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        container.appendChild(gridSquare);
        gridSquare.style.height = squareLength +"px";
        gridSquare.style.width  = squareLength +"px";
        

    }

}


function addStyle() {
  let gridSquares = document.querySelectorAll(".grid-square")
  gridSquares.forEach(square => square.addEventListener('mouseover',() => {
      square.style.backgroundColor = "black";
    
}))
}
const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener('click',resetGrid);

function resetGrid() {
    // if user presses reset button
    // deletes all gridSquares?
    // calls make grid w/ getNumSquares
    numSquares = getNumSquares();
    deleteBoard();
    makeGrid(gridLength, numSquares);
    addStyle();

    
}

function getNumSquares() {
    let totalSquare = prompt("How many squares would you like in your next grid?");
   return Math.round(Math.sqrt(totalSquare));                                                   // provides a usable value of 
}                                                                                      // numsquares (needs squares per side val)

function deleteBoard() {
    const delSquare = document.querySelectorAll(".grid-square");
    delSquare.forEach(square => square.remove());

}

makeGrid(gridLength, numSquares);
addStyle();