import { FC } from 'react';
import CustomModal from '../CustomModal/CustomModal.tsx';
import ModalActionButtonsGroup from '../ModalActionButtonsGroup/ModalActionButtonsGroup.tsx';
import { CustomModalProps } from '../../../../constants/types.ts';

type Props = Omit<CustomModalProps, 'children'> & {
  onConfirm: () => void;
};
const ConfirmModal: FC<Props> = ({ handleClose, onConfirm, ...props }) => (
  <CustomModal handleClose={handleClose} {...props}>
    <ModalActionButtonsGroup handleClose={handleClose} onNext={onConfirm} />
  </CustomModal>
);

export default ConfirmModal;
