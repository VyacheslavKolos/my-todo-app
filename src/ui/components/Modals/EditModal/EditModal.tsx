import { FC, useState } from 'react';
import { TextField } from '@mui/material';
import CustomModal from '../CustomModal/CustomModal.tsx';
import ModalActionButtonsGroup from '../ModalActionButtonsGroup/ModalActionButtonsGroup.tsx';
import { CustomModalProps, TodoType } from '../../../../constants/types.ts';

type Props = Omit<CustomModalProps, 'children' | 'title'> & {
  onEdit: (title: string) => void;
  todo: TodoType;
};
const EditModal: FC<Props> = ({ handleClose, onEdit, todo, ...props }) => {
  const [todoTitle, setTodoTitle] = useState<string>(todo.title || '');

  const handleEdit = () => {
    onEdit(todoTitle);
  };

  return (
    <CustomModal handleClose={handleClose} {...props}>
      <TextField
        id="outlined-basic"
        label="Edit Todo"
        variant="outlined"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />

      <ModalActionButtonsGroup handleClose={handleClose} onNext={handleEdit} />
    </CustomModal>
  );
};

export default EditModal;
