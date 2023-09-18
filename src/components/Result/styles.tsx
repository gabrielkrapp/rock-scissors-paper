import styled from 'styled-components';

export const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #fbc630, #fde293);
    font-size: 1.5em;
    color: #333;

    @media (max-width: 768px) {
        font-size: 1.2em;
    }

    @media (max-width: 480px) {
        font-size: 1em;
    }
`;

export const WinnerMessage = styled.div`
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 20px;
    text-transform: uppercase;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

    @media (max-width: 768px) {
        font-size: 1.8em;
    }

    @media (max-width: 480px) {
        font-size: 1.5em;
    }
`;

export const ResetButton = styled.button`
    background: #ff4b2b;
    color: white;
    border: none;
    border-radius: 25px;
    padding: 15px 30px;
    cursor: pointer;
    font-size: 1em;
    transition: background 0.3s ease;
    font-weight: 600;

    &:hover {
        background: #ff6b3d;
    }

    &:focus {
        outline: none;
    }

    @media (max-width: 768px) {
        padding: 8px 16px;
    }
`;
