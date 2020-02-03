//Declar mark ' X ' and ' O '
const xPlayer = 'O';
const oPlayer = 'X';

//Create Array for win
const winning = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]
]
var board;
//Call ===> select all inside class ( cell ) 
const cells = document.querySelectorAll('.cell');
//calling
startGame();

//The end Game 
function startGame() {
  document.querySelector(".endgame").style.display = "none";
//create Array from 9 elem
  board = Array.from(Array(9).keys());
  //clear board after win 
	for (var i = 0; i < cells.length; i++) {
		cells[i].innerText = ''; //clear 
		/* cells[i].style.removeProperty('background-color'); */
		cells[i].addEventListener('click', turnClick, false); //call click
	}
}

//Creat function turnClick
function turnClick(square) {
  // GENARATE  target cell number using humen player click event
	if (typeof board[square.target.id] == 'number') {
  //turn ==> console.log
		turn(square.target.id, xPlayer)
	
}

//Create function for ' O ' Player
function turn(squarePlayer, player) { 
	board[squarePlayer] = player; // squere when SquerePlayer click
	document.getElementById(squarePlayer).innerText = player;
	let gameWon = checkWin(board, player) //won Player 
	
}


//Take ARRAY AND ADD THE INDEX TOO THE ARRAY, IDENTIFY EVERY INDEX OF PLAYER CLICKED
function checkWin(board, player) {
//check ===> (t= totalVal, e= currentVal, i= currentIndex)
  let plays = board.reduce((t, e, i) =>
  //initVal
    (e === player) ? t.concat(i) : t, []);
    
  //SET GAME WON NULL DROW NO WINS
  let gameWon = null;
  
  //Check game is won
	for (let [index, win] of winning.entries()) {
  //Check if player click   
		if (win.every(elem => plays.indexOf(elem) > -1)) {
  //Player won and win index
			gameWon = {index: index, player: player};
			break;
		}
	}
	return gameWon;
}

