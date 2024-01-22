import { Box, IconButton, Typography } from '@mui/material';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { FC } from 'react';
import { TodoType } from '../../../constants/types.ts';
import ConfirmModal from '../Modals/ConfirmModal/ConfirmModal.tsx';
import EditModal from '../Modals/EditModal/EditModal.tsx';
import UseTodoActionsFunctions from './hooks/UseTodoActionsFunctions.ts';
import useToggle from '../../../hooks/useToggle.ts';

type Props = {
  todo: TodoType;
};
const Todo: FC<Props> = ({ todo }) => {
  const [isDeleteModalOpen, toggleDeleteModal] = useToggle();
  const [isEditModalOpen, toggleEditModal] = useToggle();

  const [handleEditAction, handleDeleteAction] = UseTodoActionsFunctions(window.location.pathname);
  const handleEdit = (title: string) => {
    const updatedTodo = {
      ...todo,
      title,
    };

    handleEditAction(updatedTodo);

    toggleEditModal();
  };

  const handleDelete = () => {
    handleDeleteAction(todo.id);
    toggleDeleteModal();
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
          <IconButton onClick={toggleEditModal}>
            <ModeEditOutlineOutlinedIcon sx={{ color: '#EB459E' }} />
          </IconButton>
          <IconButton onClick={toggleDeleteModal}>
            <DeleteOutlineOutlinedIcon sx={{ color: '#EB459E' }} />
          </IconButton>
        </Box>
      </Box>
      {isDeleteModalOpen && (
        <ConfirmModal
          open={isDeleteModalOpen}
          handleClose={() => toggleDeleteModal}
          title="Do you really want to delete this Todo?"
          onConfirm={handleDelete}
        />
      )}

      {isEditModalOpen && (
        <EditModal
          open={isEditModalOpen}
          handleClose={toggleEditModal}
          onEdit={handleEdit}
          todo={todo}
        />
      )}
    </>
  );
};

export default Todo;
