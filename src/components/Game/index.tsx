import { SetStateAction, useEffect, useState } from 'react';
import * as S from './styles'

interface GameBoardProps {
  handleResult: (result: string) => void;
}


export const GameBoard: React.FC<GameBoardProps> = ({ handleResult }) => {
  const [playerWinRound, setPlayerWinRound] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [machineScore, setMachineScore] = useState(0);
  const [selectedOptionsForMachine, setSelectedOptionsForMachine] = useState("");
  const [rockButtonDisabled, setRockButtonDisabled] = useState(false);
  const options = ["rock", "paper", "scissors"];

  useEffect(() => {
    setPlayerScore(0)
    setMachineScore(0)
    setSelectedOptionsForMachine("")
    setPlayerWinRound("")
    setRockButtonDisabled(false)
  }, [])

  const handleButtonClick = (option: SetStateAction<string>) => {
    const selectedOptionForMachine = options[Math.floor(Math.random() * options.length)];
    setSelectedOptionsForMachine(selectedOptionForMachine);

    if (option === "rock") {
      setRockButtonDisabled(true)
    } else {
      setRockButtonDisabled(false)
    }

    if (option === "rock" && selectedOptionForMachine === "scissors") {
      setPlayerWinRound("Você ganhou");
      setPlayerScore(playerScore + 1);
    } else if (option === "rock" && selectedOptionForMachine === "paper") {
      setPlayerWinRound("Você perdeu");
      setMachineScore(machineScore + 1)
    } else if (option === "paper" && selectedOptionForMachine === "scissors") {
      setPlayerWinRound("Você perdeu");
      setMachineScore(machineScore + 1)
    } else if (option === "paper" && selectedOptionForMachine === "rock") {
      setPlayerWinRound("Você ganhou");
      setPlayerScore(playerScore + 1);
    } else if (option === "scissors" && selectedOptionForMachine === "rock") {
      setPlayerWinRound("Você perdeu");
      setMachineScore(machineScore + 1)
    } else if (option === "scissors" && selectedOptionForMachine === "paper") {
      setPlayerWinRound("Você ganhou");
      setPlayerScore(playerScore + 1);
    } else {
      setPlayerWinRound("Tivemos um empate");
    }

    if (playerScore >= 2) {
      handleResult("Jogador")
    } else if (machineScore >= 2) {
      handleResult("Máquina")
    } else if (playerScore == 2 && machineScore == 2) {
      handleResult("Empate")
    }
  };

  return (
    <S.GameContainer>
        <S.MachineChoice>Escolha da máquina: <strong>{selectedOptionsForMachine}</strong></S.MachineChoice>

        <S.Separator />

        <S.ButtonGroup>
            {!rockButtonDisabled && <S.GameButton onClick={() => handleButtonClick("rock")}>Pedra</S.GameButton>}
            <S.GameButton onClick={() => handleButtonClick("paper")}>Papel</S.GameButton>
            <S.GameButton onClick={() => handleButtonClick("scissors")}>Tesoura</S.GameButton>
        </S.ButtonGroup>

        <S.ResultMessage>{playerWinRound}</S.ResultMessage>

        <S.ScoreBoard>
            <div>Pontos do Jogador: {playerScore}</div>
            <div>Pontos da Máquina: {machineScore}</div>
        </S.ScoreBoard>
    </S.GameContainer>
  );
};

