import React from 'react'
import useTicTacToe from '../hooks/useTicTacToe';

const TicTacToeBoard = ({ boardSize = 4 }) => {
    const {board, winner, continueTheGame, resetGame} = useTicTacToe(boardSize);
    return (
        <div className='board-parent'> 
            {
                winner()
                &&
                <h3 style={{ textAlign : 'center' }}>Winner is {winner()}</h3>
            }

            <div style={{ textAlign : 'center', marginBottom : 10 }}>
                <button onClick={resetGame}> Reset </button>
            </div>
            <div className='board' style={{ '--board-size' : boardSize }}>
                {
                    board.map((block, index) => (
                        <div key={index} onClick={() => continueTheGame(index)}>
                            {block}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TicTacToeBoard