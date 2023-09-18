import { useState } from 'react';
import { GameBoard } from '../Game';
import { Result } from '../Result';
import * as S from './styles'
import { InstructionsModal } from '../Modal';
import { IconButton } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';

export const Home = () => {

    const [startGame, setStartGame] = useState(false)
    const [results, setResults] = useState(false)
    const [homePage, setHomePage] = useState(true)
    const [winner, setWinner] = useState("")
    const [open, setOpen] = useState(false);

    const handleStartGame = () => {
        setStartGame(true)
        setHomePage(false)
    }

    const handleResetGame = () => {
        setStartGame(false)
        setResults(false)
        setHomePage(true)
    }

    const handleResult = (result: string) => {
        setResults(true)
        setStartGame(false)
        setHomePage(false)
        setWinner(result)
    }

    const handleOpen = () => {
        setOpen(true);
    };
      
    const handleClose = () => {
        setOpen(false);
    };


  return (
    <>
        {startGame ? <GameBoard handleResult={handleResult} /> : null}
        {results ? <Result handleResetGame={handleResetGame} winner={winner} /> : null}
        {homePage ?                 
            <>
                <S.Container>
                    Para começar o jogo clique no botão abaixo
                    <S.GameButton onClick={handleStartGame}>Iniciar o jogo</S.GameButton>
                    <IconButton onClick={handleOpen}>
                        <InfoOutlined fontSize="large" />
                    </IconButton>

                    <InstructionsModal open={open} handleClose={handleClose} />
                </S.Container>
            </> 
            : null}
        </>
  );
}
