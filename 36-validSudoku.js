/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
	const checkRows = (board) => {
		for (let i = 0; i < 9; i++) {
			// console.log("i", i);
			const row = board[i];
			// console.log("row", row);
			const arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

			for (let j = 0; j < 9; j++) {
				if (row[j] !== ".") {
					// console.log("row-element", row[j]);
					let index = arr.indexOf(row[j]);
					// console.log("row-element-index", index);
					if (index !== -1) {
						arr.splice(index, 1);
					} else {
						return false;
					}
				}
			}
		}

		return true;
	};
	const checkColumns = (board) => {
		for (let i = 0; i < 9; i++) {
			// console.log("i", i);
			const arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

			for (let j = 0; j < 9; j++) {
				if (board[j][i] !== ".") {
					// console.log("row-element", row[j]);
					let index = arr.indexOf(board[j][i]);
					// console.log("row-element-index", index);
					if (index !== -1) {
						arr.splice(index, 1);
					} else {
						return false;
					}
				}
			}
		}
		return true;
    };
    const checkSquares = (board) => {
        const mapInitialCell = (i) => {
            return {
                row: (i % 3) * 3,
                column: Math.floor(i / 3) * 3,
            };
        };
    
        const mapRequiredCell = (initialCell, j) => {
            const rowAddition = j % 3;
            const columnAddition = Math.floor(j / 3);
    
            return {
                row: initialCell.row + rowAddition,
                column: initialCell.column + columnAddition,
            };
        };
    
        for (let i = 0; i < 9; i++) {
            // console.log("i", i);
            const arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    
            const initialCell = mapInitialCell(i);
    
            for (let j = 0; j < 9; j++) {
                const requiredCell = mapRequiredCell(initialCell, j);
    
                if (board[requiredCell.row][requiredCell.column] !== ".") {
                    // console.log("row-element", row[j]);
                    let index = arr.indexOf(
                        board[requiredCell.row][requiredCell.column]
                    );
                    // console.log("row-element-index", index);
                    if (index !== -1) {
                        arr.splice(index, 1);
                    } else {
                        return false;
                    }
                }
            }
        }
        return true;
    };

	if (checkRows(board) && checkColumns(board) && checkSquares(board))
		return true;

	return false;
};

const board = [
	["5", "3", ".", ".", "7", ".", ".", ".", "."],
	["6", ".", ".", "1", "9", "5", ".", ".", "."],
	[".", "9", "8", ".", ".", ".", ".", "6", "."],
	["8", ".", ".", ".", "6", ".", ".", ".", "3"],
	["4", ".", ".", "8", ".", "3", ".", ".", "1"],
	["7", ".", ".", ".", "2", ".", "1", ".", "6"],
	[".", "6", ".", ".", ".", ".", "2", "8", "."],
	[".", ".", ".", "4", "1", "9", ".", ".", "5"],
	[".", ".", ".", ".", "8", ".", ".", "7", "9"],
];



console.log(isValidSudoku(board));
