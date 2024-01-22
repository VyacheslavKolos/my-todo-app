import { Box, Link, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { FC } from 'react';
import TodoList, { TodoListProps } from '../TodoList/TodoList.tsx';
import InputField from '../InputField/InputField.tsx';
import Loader from '../Loader/Loader.tsx';
import ErrorComponent from '../ErrorComponent/ErrorComponent.tsx';

type Props = TodoListProps & {
  createTodo: (todo: string) => void;
  isError?: boolean;
  isFetching?: boolean;
};

const Layout: FC<Props> = ({ todos = [], createTodo, isFetching, isError }) => {
  const getTodoList = () => {
    if (isFetching) {
      return <Loader />;
    }
    if (isError) {
      return <ErrorComponent />;
    }
    return <TodoList todos={todos} />;
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 2,
        gap: 4,
      }}
    >
      <Box sx={{ display: 'flex', gap: 4 }}>
        <Link variant="button" color="#EB459E" component={NavLink} to="/inSlice">
          Data from redux toolkit slice
        </Link>
        <Link variant="button" color="#EB459E" component={NavLink} to="/inRtk">
          Data from RTK (Jsonplaceholper)
        </Link>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant="h3">To do list app</Typography>
        </Box>
        <InputField createTodo={createTodo} />
        {getTodoList()}
      </Box>
    </Box>
  );
};

export default Layout;
