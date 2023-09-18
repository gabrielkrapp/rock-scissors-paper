import * as S from './styles'

interface ResultProps {
  handleResetGame: () => void
  winner: String
}


export const Result: React.FC<ResultProps> = ({handleResetGame, winner}) => {

  return (
    <S.ResultContainer>
        <S.WinnerMessage>Ganhador: {winner}</S.WinnerMessage>
        <S.ResetButton onClick={handleResetGame}>Reiniciar</S.ResetButton>
    </S.ResultContainer>
);
}
