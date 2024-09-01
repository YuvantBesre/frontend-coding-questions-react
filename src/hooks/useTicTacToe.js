import { useState } from "react";

const useTicTacToe = (boardSize) => {

    const newBoard = new Array(boardSize * boardSize).fill(null);

    const [board, setBoard] = useState(newBoard);

    const WINNING_PATTERNS = [
        [0, 4, 8],
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6]
    ]

    const [isXTurn, setIsXTurn] = useState(true);

    const winner = () => {
        for(let i = 0; i < WINNING_PATTERNS.length; i++) {
            const [a, b, c] = WINNING_PATTERNS[i];
            if(board[a] && board[a] == board[b] && board[a] == board[c])
                return board[a];
        }
        return null;
    }

    const continueTheGame = (index) => {
        if(board[index]) return;
        
        const isWinner = winner();
    
        const tempBoard = [...board];

        if(!isWinner) {
            if(isXTurn) {
                tempBoard[index] = 'X'
            }
            else {
                tempBoard[index] = 'O'
            }
            setBoard(tempBoard);
            setIsXTurn(!isXTurn);
        }
    }

    const resetGame = () => {
        setBoard(newBoard);
    }

    return {
        continueTheGame, 
        winner,
        board,
        resetGame
    }
}

export default useTicTacToe;