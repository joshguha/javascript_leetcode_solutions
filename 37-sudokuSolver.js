/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solveSudoku = function(board) {
	 while (true) {
		const prevBoard = board
		for (let  rowIndex = 0; rowIndex < 9; rowIndex++) {
			for (let colIndex = 0; colIndex < 9; colIndex++) {
				const solvable = solveElement(board, rowIndex, colIndex)
				if (!solvable) return false
			}
		}
		if (isSameBoard(board, prevBoard)) break
	 }

	if (isBoardSolved(board)) return board

	const branchBoards = generateBranchBoards(board)



	const solvedBoards = branchBoards.map((branchBoard) => solveSudoku(branchBoard)).filter((solvedBoard) => solvedBoard)

	if (solvedBoards.length === 1){
		for (let i = 0; i < 9; i++){
			for (let j = 0; j < 9; j++){
				board[i][j] = solvedBoards[0][i][j]
			}
		}
		return solvedBoards[0]
	} 

	return false
};



const isBoardSolved = (board) => {
	for (let row of board) {
		for (let el of row) {
			if (el === ".") return false
		}
	}

	return true
}

const possibilities = ['1','2','3','4','5','6','7','8','9']


const solveElement = (board, rowIndex, colIndex) => {
	if (board[rowIndex][colIndex] !== ".") return true


	const rowElements = findRowElements(board, rowIndex, colIndex)
	const colElements = findColElements(board, rowIndex, colIndex)
	const boxElements = findBoxElements(board, rowIndex, colIndex)

	const possibilitiesToRemove = [...rowElements, ...colElements, ...boxElements]

	const remainingPossibilties = possibilities.filter((number) => !possibilitiesToRemove.includes(number))
	if (!remainingPossibilties.length) return false

	if (remainingPossibilties.length === 1) {
		board[rowIndex][colIndex] = remainingPossibilties[0]

		const solvable = solveRowElements(board, rowIndex) && solveColElements(board, colIndex) && solveBoxElements(board, rowIndex, colIndex)
		if (!solvable) return false
	}

	return true

}

const findRowElements = (board, rowIndex, colIndex) => {
	const result = []

	for (let j = 0; j < 9; j++) {
		const value = board[rowIndex][j]
		if (j !== colIndex && value !== ".") result.push(value) 
	}

	return result
}

const findColElements = (board, rowIndex, colIndex) => {
	const result = []

	for (let i = 0; i < 9; i++) {
		const value = board[i][colIndex]
		if (i !== rowIndex && value !== ".") result.push(value) 
	}

	return result
}

const findBoxElements = (board, rowIndex, colIndex) => {
	const result = []

	for (let i = Math.floor(rowIndex/3) * 3; i < Math.floor(rowIndex/3) * 3 + 3; i++){
		for (let j = Math.floor(colIndex/3) * 3; j < Math.floor(colIndex/3) * 3 + 3; j++){
			const value = board[i][j]

			if (!(i === rowIndex && j === colIndex) && value !== ".") {
				result.push(value)
			}
		}
	}

	return result
}

const solveRowElements = (board, rowIndex) => {
	for (let j = 0; j < 9; j++) {
		const solvable = solveElement(board, rowIndex, j)	
		if (!solvable) return false
	}

	return true
}


const solveColElements = (board, colIndex) => {
	for (let i = 0; i < 9; i++) {
		const solvable = solveElement(board, i, colIndex)
		if (!solvable) return false
	}

	return true
}


const solveBoxElements = (board, rowIndex, colIndex) => {
	for (let i = Math.floor(rowIndex/3) * 3; i < Math.floor(rowIndex/3) * 3 + 3; i++){
		for (let j = Math.floor(colIndex/3) * 3; j < Math.floor(colIndex/3) * 3 + 3; j++){
			const solvable = solveElement(board, i, j)
			if (!solvable) return false
		}
	}

	return true
}

const isSameBoard = (board, prevBoard) => {
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (board[i][j] !== prevBoard[i][j]) return false
		}
	}
	return true
}

const generateBranchBoards = (board) => {
	let leastPossibilitiesPosition = {
		rowIndex: 0,
		colIndex: 0, 
		possibilities: ['1','2','3','4','5','6','7','8','9']
	}

	for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
		for (let colIndex = 0; colIndex < 9; colIndex++) {
			if (board[rowIndex][colIndex] === ".") {
				const rowElements = findRowElements(board, rowIndex, colIndex)
				const colElements = findColElements(board, rowIndex, colIndex)
				const boxElements = findBoxElements(board, rowIndex, colIndex)
	
				const possibilitiesToRemove = [...rowElements, ...colElements, ...boxElements]
	
				const remainingPossibilties = possibilities.filter((number) => !possibilitiesToRemove.includes(number))
	
				if (remainingPossibilties.length < leastPossibilitiesPosition.possibilities.length) {
					leastPossibilitiesPosition.rowIndex = rowIndex
					leastPossibilitiesPosition.colIndex = colIndex
					leastPossibilitiesPosition.possibilities = remainingPossibilties
				}
			}
		}
	}


	return leastPossibilitiesPosition.possibilities.map((number) => {
		const boardCopy = board.map((row) => [...row])
		boardCopy[leastPossibilitiesPosition.rowIndex][leastPossibilitiesPosition.colIndex] = number
		return boardCopy
	})


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
