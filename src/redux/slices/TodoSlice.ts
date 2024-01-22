import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoType } from '../../constants/types.ts';

type TodoSliceStateType = {
  todos: TodoType[];
};

const initialState: TodoSliceStateType = {
  todos: [],
};
export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<TodoType>) => {
      state.todos.push(payload);
    },

    editTodo: (state, { payload: editedTodo }: PayloadAction<TodoType>) => ({
      ...state,
      todos: state.todos.map((todo) => (todo.id === editedTodo.id ? editedTodo : todo)),
    }),

    deleteTodo: (state, { payload: idToDelete }: PayloadAction<number>) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== idToDelete),
    }),
  },
});

export const { addTodo, editTodo, deleteTodo } = todosSlice.actions;
