import { useDispatch } from 'react-redux';
import Layout from '../ui/components/Layout';
import { todosApi, useAddTodoMutation, useGetTodosQuery } from '../redux/api/todosApi.ts';
import { AppDispatch } from '../redux/store.ts';
import { TodoType } from '../constants/types.ts';
import UseCustomSnackbar from '../hooks/useCustomSnackbar.ts';

const InRtkPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const { callSnackbar } = UseCustomSnackbar();
  const {
    data: todos = [],
    isFetching,
    isError,
  } = useGetTodosQuery(undefined, {
    refetchOnFocus: true,
  });

  const [handleCreate, { isError: isErrorAdd, isLoading }] = useAddTodoMutation();
  const handleCreateTodo = async (todoTitle: string) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      title: todoTitle,
      completed: false,
    };
    const createdTodo = await handleCreate(newTodo).unwrap();

    dispatch(
      todosApi.util?.updateQueryData('getTodos', undefined, (todos: TodoType[]) => {
        todos.push(createdTodo);
      }),
    );
    callSnackbar('Your todo was successfully created', 'success');
  };

  return (
    <Layout
      todos={todos}
      createTodo={handleCreateTodo}
      isError={isError || isErrorAdd}
      isFetching={isFetching || isLoading}
    />
  );
};

export default InRtkPage;
