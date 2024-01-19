import { combineSlices } from '@reduxjs/toolkit';
import { baseApi } from '../api/todosApi.ts';
import { todosSlice } from './TodoSlice.ts';

const rootReducer = combineSlices(baseApi, todosSlice);

export default rootReducer;
