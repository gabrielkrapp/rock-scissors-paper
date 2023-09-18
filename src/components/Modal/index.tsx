import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

interface InstructionsModalProps {
  open: boolean;
  handleClose: () => void;
}

const StyledBox = styled(Box)({
  background: 'linear-gradient(135deg, #FFD700, #FFA500)',
  border: '2px solid #333',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
  padding: '20px',
  width: '80%',
  maxWidth: '350px',
  color: '#333',
  borderRadius: '10px',
  '& h6': {
    marginBottom: '20px',
  },
});

const StyledButton = styled(Button)({
  background: '#ff4b2b',
  color: 'white',
  marginTop: '10px',
  '&:hover': {
    background: '#ff6b3d',
  },
});

export const InstructionsModal: React.FC<InstructionsModalProps> = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="instructions-title"
      aria-describedby="instructions-description"
    >
      <StyledBox
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
        }}
      >
        <Typography id="instructions-title" variant="h6">Instruções</Typography>
        <Typography id="instructions-description">
          - Pedra ganha de tesoura.<br />
          - Tesoura ganha de papel.<br />
          - Papel ganha de pedra.<br />
          - Não pode escolher pedra 2x seguidas.<br />
          - Quem fizer 3 pontos primeiro vence.<br />
        </Typography>
        <StyledButton onClick={handleClose}>Entendido</StyledButton>
      </StyledBox>
    </Modal>
  );
}
