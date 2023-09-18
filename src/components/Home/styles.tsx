import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    background: linear-gradient(135deg, #FFD700, #FFA500);
    font-size: 1.5em;
    color: #333;
    font-weight: 600;
    padding: 10px;

    @media (max-width: 768px) { 
        font-size: 1.2em;
    }

    @media (max-width: 480px) { 
        font-size: 1em;
    }

    > *:not(:last-child) {
        margin-bottom: 20px;
    }
`;

export const GameButton = styled.button`
    background: #ff4b2b;
    color: white;
    border: none;
    border-radius: 25px;
    padding: 15px 30px;
    cursor: pointer;
    font-size: 1em;
    font-weight: 600;
    transition: background 0.3s ease;
    margin-top: 20px;

    &:hover {
        background: #ff6b3d;
    }

    &:focus {
        outline: none;
    }

    @media (max-width: 768px) {
        padding: 12px 24px;
        font-size: 0.9em;
    }

    @media (max-width: 480px) {
        padding: 10px 20px;
        font-size: 0.8em;
    }
`;
