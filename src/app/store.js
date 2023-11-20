import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/tasksSlice';
export const store = configureStore({
  reducer: {
    tasks: tasksReducer
  }
});

//* Reducers = funciones, que saben que hacer con las acciones y el payload
//* Store = Contiene el state (1 por aplicación).
