import { useState } from 'react';
import Input from './Input';


const ExpenseForm = ({expenseData, updateExpenseData}) => {
   
    const changeHandler =(fieldName, value)=>{
        updateExpenseData(fieldName , value)
    }
   

    return (
        <>
            <Input label='amount' textConfigure={{
                keyboardType: 'decimal-pad',
                placeholder: '12.00',
                value: expenseData.amount,
                onChangeText: (value)=> changeHandler('amount' , value)
                
            }} />
            <Input label='date' textConfigure={{
                keyboardType: 'number-pad',
                placeholder: 'YYYY-MM-DD',
                maxLength: 10,
                value: expenseData.date,
                onChangeText: (value)=> changeHandler('date' , value.toString())
            }} />
            <Input label='description' textConfigure={{
                placeholder: 'e.g. Boots',
                multiline: true,
                value: expenseData.title,
                onChangeText: (value)=> changeHandler('title' , value)
            }} />
        </>

    )
}

export default ExpenseForm