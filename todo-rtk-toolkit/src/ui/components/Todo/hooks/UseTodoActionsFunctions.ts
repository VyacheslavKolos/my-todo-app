import { useDispatch } from 'react-redux';
import {
  todosApi,
  useDeleteTodoMutation,
  useEditTodoMutation,
} from '../../../../redux/api/todosApi.ts';
import { TodoType } from '../../../../constants/types.ts';
import { AppDispatch } from '../../../../redux/store.ts';
import { urlInRtkPath } from '../../../../constants/constants.ts';
import { deleteTodo, editTodo } from '../../../../redux/slices/TodoSlice.ts';

type ReturnType = [(updatedTodo: TodoType) => Promise<void> | any, (idToDelete: number) => void];

const UseTodoActionsFunctions = (urlParam: string): ReturnType => {
  const dispatch: AppDispatch = useDispatch();
  const [handleEditRequest] = useEditTodoMutation();
  const [handleDeleteRequest] = useDeleteTodoMutation();
  const handleDeleteInRTK = async (idToDelete: number) => {
    await handleDeleteRequest(idToDelete);
    dispatch(
      todosApi.util?.updateQueryData('getTodos', undefined, (todos: TodoType[]) =>
        todos.filter((todo) => todo.id !== idToDelete),
      ),
    );
  };

  const handleDeleteInSlice = (idToDelete: number) => {
    dispatch(deleteTodo(idToDelete));
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
