/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
	let allPossibilities = [...board];
	const scanRow = (i, j) => {
		for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
			if (typeof allPossibilities[i][j] !== "string") {
				if (allPossibilities[i][j].length === 1) {
					allPossibilities[i][j] = allPossibilities[i][j][0];
					completed[convertIndeces(i, j)] = true;
					break;
				}

				if (typeof allPossibilities[i][rowIndex] === "string") {
					const selected = allPossibilities[i][rowIndex];
					if (allPossibilities[i][j].includes(selected)) {
						const filteredPossibilites = allPossibilities[i][
							j
						].filter((possibility) => possibility !== selected);

						allPossibilities[i][j] = filteredPossibilites;
					}
				}
			}
		}
	};

	const scanColumn = (i, j) => {
		for (let colIndex = 0; colIndex < 9; colIndex++) {
			if (typeof allPossibilities[i][j] !== "string") {
				if (allPossibilities[i][j].length === 1) {
					allPossibilities[i][j] = allPossibilities[i][j][0];
					completed[convertIndeces(i, j)] = true;
					break;
				}

				if (typeof allPossibilities[colIndex][j] === "string") {
					const selected = allPossibilities[colIndex][j];
					if (allPossibilities[i][j].includes(selected)) {
						const filteredPossibilites = allPossibilities[i][
							j
						].filter((possibility) => possibility !== selected);

						allPossibilities[i][j] = filteredPossibilites;
					}
				}
			}
		}
	};

	const scanSquare = (i, j) => {
		for (let squareIndex = 0; squareIndex < 9; squareIndex++) {
			if (typeof allPossibilities[i][j] !== "string") {
				if (allPossibilities[i][j].length === 1) {
					allPossibilities[i][j] = allPossibilities[i][j][0];
					completed[convertIndeces(i, j)] = true;
					break;
				}

				if (
					typeof allPossibilities[mapToSquare(i, j, squareIndex).row][
						mapToSquare(i, j, squareIndex).column
					] === "string"
				) {
					const selected =
						allPossibilities[mapToSquare(i, j, squareIndex).row][
							mapToSquare(i, j, squareIndex).column
						];

					if (allPossibilities[i][j].includes(selected)) {
						const filteredPossibilites = allPossibilities[i][
							j
						].filter((possibility) => possibility !== selected);

						allPossibilities[i][j] = filteredPossibilites;
					}
				}
			}
		}
	};

	const convertIndeces = (i, j) => {
		return i * 9 + j;
	};

	const mapToSquare = (i, j, squareIndex) => {
		const initialRow = Math.floor(i / 3) * 3;
		const initialCol = Math.floor(j / 3) * 3;

		return {
			row: initialRow + Math.floor(squareIndex / 3),
			column: initialCol + (squareIndex % 3),
		};
	};

	let completed = Array(81).fill(false);

	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (allPossibilities[i][j] === ".") {
				allPossibilities[i][j] = [
					"1",
					"2",
					"3",
					"4",
					"5",
					"6",
					"7",
					"8",
					"9",
				];
			} else {
				completed[convertIndeces(i, j)] = true;
			}
		}
	}

	while (true) {
		for (let i = 0; i < 9; i++) {
			for (let j = 0; j < 9; j++) {
				scanRow(i, j);
				scanColumn(i, j);
				scanSquare(i, j);
			}
		}
		console.log(completed);


		if (completed.every((value) => value)) {
			break;
		}
	}
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			board[i][j] = allPossibilities[i][j];
		}
	}

	return board;
};

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
solveSudoku(board);
