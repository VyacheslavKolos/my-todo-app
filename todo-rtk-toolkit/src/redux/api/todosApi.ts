import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';
import { TodoType } from '../../constants/types.ts';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: () => ({}),
});

export const todosApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<TodoType[], void>({
      query: () => '/todos',
    }),

    addTodo: builder.mutation<TodoType, TodoType>({
      query: (body) => ({
        url: '/todos',
        method: 'POST',
        body,
      }),
    }),

    editTodo: builder.mutation<TodoType, TodoType>({
      query: (body) => ({
        url: `/todos/${body.id}`,
        method: 'PATCH',
        body,
      }),
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation, useEditTodoMutation } = todosApi;
