import Layout from '../ui/components/Layout';
import { useAppDispatch, useAppSelector } from '../redux/store.ts';
import { addTodo } from '../redux/slices/TodoSlice.ts';

const InSlicePage = () => {
  const { todos } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  const handleCreateTodo = async (todoTitle: string) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      title: todoTitle,
      completed: false,
    };
    dispatch(addTodo(newTodo));
  };

  return <Layout todos={todos} createTodo={handleCreateTodo} />;
};

export default InSlicePage;
