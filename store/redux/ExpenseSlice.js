import { createSlice, nanoid } from "@reduxjs/toolkit/react"

const initialState = {
    expenses: [],
}

export const expenseSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        addExpenses: (state, action) => {
            const expense = {
                id: nanoid(),
                title: action.payload.title,
                date:action.payload.date,
                amount:parseFloat( action.payload.amount)
            }
            state.expenses.push(expense)
        },

        removeExpenses: (state, action) => {
            state.expenses = state.expenses.filter((expense) => expense.id !== action.payload.id)
        },

        updateExpenses: (state, action)=>{
            
            const indexIsToUpdate= state.expenses.findIndex((expense)=>expense.id === action.payload.id)
            const expense ={
                id:action.payload.id,
                title:action.payload.title,
                date:action.payload.date,
                amount:parseFloat(action.payload.amount)
            }
            state.expenses.splice(indexIsToUpdate,1,expense)
        }
    }
})

export const {addExpenses, removeExpenses, updateExpenses} = expenseSlice.actions
export default expenseSlice.reducer
