import { FC } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import { CustomModalProps } from '../../../../constants/types.ts';

const ModalWrapBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: theme.shadows[24],
  backgroundColor: theme.palette.background.paper,
  borderRadius: 8,
  padding: theme.spacing(4),
  width: 400,
}));

type ModalProps = CustomModalProps;
const CustomModal: FC<ModalProps> = ({ children, title, open, handleClose, modalStyles }) => (
  <Modal open={open} onClose={handleClose}>
    <ModalWrapBox sx={modalStyles}>
      <Typography variant="h6">{title}</Typography>
      <Box pt={2}>{children}</Box>
    </ModalWrapBox>
  </Modal>
);

export default CustomModal;
