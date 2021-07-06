/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solveSudoku = function(board) {


	function possible(y,x,n) {
		for (let i = 0; i < 9; i++){
			if (board[y][i] === n.toString()) {
				return false
			}
		}

		for (let i = 0; i < 9; i++){
			if (board[i][x] === n.toString()) {
				return false
			}
		}

		const x0 = Math.floor(x / 3) * 3
		const y0 = Math.floor(y/3) * 3

		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				if (board[y0+i][x0+j] === n.toString()) {
					return false
				}
			}
		}
	
		return true
	}
	




	for (let i = 0; i < 9; i++){
		for (let j = 0; j < 9; j++) {
	
			if (board[i][j] === ".") {
				for (let k = 1; k < 10; k++) {
					if (possible(i, j, k)) {
						board[i][j] = k.toString()
						solveSudoku(board)
						board[i][j] = "."
					}
				}
			}

			return board
		}
	}
}



const board = [
	[".", ".", "9", "7", "4", "8", ".", ".", "."],
	["7", ".", ".", ".", ".", ".", ".", ".", "."],
	[".", "2", ".", "1", ".", "9", ".", ".", "."],
	[".", ".", "7", ".", ".", ".", "2", "4", "."],
	[".", "6", "4", ".", "1", ".", "5", "9", "."],
	[".", "9", "8", ".", ".", ".", "3", ".", "."],
	[".", ".", ".", "8", ".", "3", ".", "2", "."],
	[".", ".", ".", ".", ".", ".", ".", ".", "6"],
	[".", ".", ".", "2", "7", "5", "9", ".", "."],
];

console.log(solveSudoku(board))
