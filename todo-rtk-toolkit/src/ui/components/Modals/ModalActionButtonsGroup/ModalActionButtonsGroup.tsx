import { FC } from 'react';
import { Box, Button, styled } from '@mui/material';

const ButtonsBox = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: 20,
});

const StyledButton = styled(Button)({
  minWidth: 90,
});

type Props = {
  handleClose: () => void;
  onNext: () => void;
};
const ModalActionButtonsGroup: FC<Props> = ({ onNext, handleClose }) => (
  <ButtonsBox>
    <StyledButton onClick={handleClose} variant="outlined">
      Cancel
    </StyledButton>
    <StyledButton onClick={onNext} variant="contained">
      Yes
    </StyledButton>
  </ButtonsBox>
);

export default ModalActionButtonsGroup;
