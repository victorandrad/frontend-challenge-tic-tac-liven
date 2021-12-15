/**
 * Obs: O controle de estado principal da aplicação deve ser mantido neste hook
 */

import { useState } from "react";

type Player = 'X' | 'O'

const useGameState = () => {
  // Transforma todas as variaveis let em variaveis de estado
  const [stepNumber, setStepNumber] = useState(0);
  const [nextPlayer, setNextPlayer] = useState<Player>('X');
  const [currentBoard, setCurrentBoard] = useState(Array(9).fill(null));

  // Código que reseta tabuleiro
  const resetGame = () => {    
    setCurrentBoard([]);
    setStepNumber(0); 
  }

  const computeMove = (nextPlayer: Player, squareId: any) => {
    // Adiciona jogada no array no tabuleiro
    currentBoard[squareId] = nextPlayer;
    setCurrentBoard(currentBoard);

    if (nextPlayer === 'X') {
      setNextPlayer('O');
    } else {
      setNextPlayer('X');
    }
    setStepNumber((currentStepNumber) => currentStepNumber + 1);
  }

  return {
    nextPlayer,
    stepNumber,
    currentBoard,
    computeMove,
    resetGame
  }
}

export default useGameState;
