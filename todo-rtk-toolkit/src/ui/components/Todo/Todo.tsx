import { Box, IconButton, Typography } from '@mui/material';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { FC, useState } from 'react';
import { TodoType } from '../../../constants/types.ts';
import ConfirmModal from '../Modals/ConfirmModal/ConfirmModal.tsx';
import EditModal from '../Modals/EditModal/EditModal.tsx';
import UseTodoActionsFunctions from './hooks/UseTodoActionsFunctions.ts';

type Props = {
  todo: TodoType;
};
const Todo: FC<Props> = ({ todo }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

  const [handleEditAction, handleDeleteAction] = UseTodoActionsFunctions(window.location.pathname);
  const handleEdit = (title: string) => {
    const updatedTodo = {
      ...todo,
      title,
    };

    handleEditAction(updatedTodo);

    setIsEditModalOpen(false);
  };

  const handleDelete = () => {
    handleDeleteAction();
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          padding: 2,
          bgcolor: '#57F287',
          width: '90%',
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="body1">{todo.title}</Typography>
        <Box>
          <IconButton onClick={() => setIsEditModalOpen(true)}>
            <ModeEditOutlineOutlinedIcon sx={{ color: '#EB459E' }} />
          </IconButton>
          <IconButton onClick={() => setIsDeleteModalOpen(true)}>
            <DeleteOutlineOutlinedIcon sx={{ color: '#EB459E' }} />
          </IconButton>
        </Box>
      </Box>
      {isDeleteModalOpen && (
        <ConfirmModal
          open={isDeleteModalOpen}
          handleClose={() => setIsDeleteModalOpen(false)}
          title="Do you really want to delete this Todo?"
          onConfirm={handleDelete}
        />
      )}

      {isEditModalOpen && (
        <EditModal
          open={isEditModalOpen}
          handleClose={() => setIsEditModalOpen(false)}
          onEdit={handleEdit}
          todo={todo}
        />
      )}
    </>
  );
};

export default Todo;
