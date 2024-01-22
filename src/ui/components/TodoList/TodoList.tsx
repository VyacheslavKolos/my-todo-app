import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { TodoType } from '../../../constants/types.ts';
import Todo from '../Todo/Todo.tsx';

export type TodoListProps = {
  todos: TodoType[];
};

const TodoList: FC<TodoListProps> = ({ todos }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      mt: 2,
      gap: 2,
      bgcolor: '#5865F2',
      borderRadius: 10,
      width: '800px',
      padding: 2,
    }}
  >
    {todos.length ? (
      todos.map((todo) => <Todo key={todo.id} todo={todo} />)
    ) : (
      <Typography variant="h3" sx={{ color: '#57F287' }}>
        Add your first task
      </Typography>
    )}
  </Box>
);

export default TodoList;
