import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
`;

export const GameContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    background: linear-gradient(135deg, #FFD700, #FFA500);
    color: #333;
    font-weight: 600;
    font-size: 1.5em;
    gap: 40px;

    @media (max-width: 768px) {
        font-size: 1.2em;
        gap: 20px;
    }
`;

export const ScoreBoard = styled.div`
    margin: 20px;
    display: flex;
    justify-content: space-around; // Isso irá garantir que haja espaço entre os elementos
    width: 100%;
    max-width: 700px; // Pode ajustar para o valor que se encaixe melhor
    align-items: center; // Isso irá alinhar verticalmente os itens

    div {
        padding: 10px;
        border: 1px solid #333;
        border-radius: 8px;
        text-align: center;
        flex: 1;
        margin: 0 30px;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
       
        div {
            margin-bottom: 10px;
        }
    }
`;

export const ResultMessage = styled.div`
    animation: ${fadeIn} 1s ease forwards;
    margin: 20px;
    font-weight: 800;
    font-size: 2em;
    color: #333;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);

    @media (max-width: 768px) {
        font-size: 1.6em;
    }

    @media (max-width: 480px) {
        font-size: 1.4em;
    }
`;

export const Separator = styled.div`
    width: 70%;
    height: 2px;
    background-color: #333;
    margin: 20px 0;

    @media (max-width: 768px) {
        width: 90%;
    }
`;

export const MachineChoice = styled.div`
    animation: ${fadeIn} 1.5s ease forwards;
    margin: 20px;
    font-weight: 700;
    font-size: 2em;
    text-align: center;

    strong {
        color: #ff4b2b;
    }

    @media (max-width: 480px) {
        font-size: 1.4em;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        width: 80%;
    }
`;

export const GameButton = styled.button`
    background: #ff4b2b;
    color: white;
    border: none;
    border-radius: 25px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 0.9em;
    font-weight: 600;
    transition: transform 0.3s ease, background 0.3s ease;
    flex: 1;
    margin: 10px;

    &:hover {
        background: #ff6b3d;
        transform: scale(1.05);
    }

    &:focus {
        outline: none;
    }

    @media (max-width: 768px) {
        padding: 8px 16px;
        font-size: 0.8em;
        margin: 12px 4px;
    }

    @media (max-width: 480px) {
        padding: 6px 14px;
        font-size: 0.75em;
        margin: 10px 2px;
    }
`;