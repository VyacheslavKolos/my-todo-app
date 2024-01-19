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
  },
});

export const { addTodo, editTodo } = todosSlice.actions;
