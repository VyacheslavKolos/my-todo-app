import { useDispatch } from 'react-redux';
import { todosApi, useEditTodoMutation } from '../../../../redux/api/todosApi.ts';
import { TodoType } from '../../../../constants/types.ts';
import { AppDispatch } from '../../../../redux/store.ts';
import { urlInRtkPath } from '../../../../constants/constants.ts';
import { editTodo } from '../../../../redux/slices/TodoSlice.ts';

type ReturnType = [(updatedTodo: TodoType) => Promise<void> | any, () => void];

const UseTodoActionsFunctions = (urlParam: string): ReturnType => {
  const dispatch: AppDispatch = useDispatch();
  const [handleEditRequest] = useEditTodoMutation();
  const handleDeleteInRTK = () => {
    console.log('delete in RTK');
  };

  const handleDeleteInSlice = () => {
    console.log('deleete in Slice');
  };

  const handleEditRTK = async (updatedTodo: TodoType) => {
    const updatedTodoReq = await handleEditRequest(updatedTodo).unwrap();
    dispatch(
      todosApi.util?.updateQueryData('getTodos', undefined, (todos: TodoType[]) =>
        todos.map((todo) => (todo.id === updatedTodoReq.id ? updatedTodoReq : todo)),
      ),
    );
  };

  const handleEditSlice = (updatedTodo: TodoType) => {
    dispatch(editTodo(updatedTodo));
  };

  if (urlParam === urlInRtkPath) {
    return [handleEditRTK, handleDeleteInRTK];
  }

  return [handleEditSlice, handleDeleteInSlice];
};

export default UseTodoActionsFunctions;
