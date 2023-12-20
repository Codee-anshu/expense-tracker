import { configureStore} from "@reduxjs/toolkit";
import expenseReducer from './ExpenseSlice'


export const store = configureStore({
    reducer:  expenseReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})