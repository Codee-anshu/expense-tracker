import axios from "axios";


const databaseURL = 'https://expense-tracker-app-727a3-default-rtdb.firebaseio.com/expenses.json'

export const storeExpenses = async (expenseData) => {
    console.log(expenseData)
    await axios.post(databaseURL, JSON.stringify(expenseData))
        .then(response => {
            console.log('Data posted successfully. Unique ID:', response.data.name);
            console.log("press")
        })
        .catch(error => {
            console.error('Error posting data:', error.response ? error.response.data : error.message);
        });

};

export const fetchExpenses = async () => {
    const response = await axios.get(databaseURL)

    const expenses = []

    for (key in response.data) {
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: response.data[key].data,
            title: response.data[key].title
        }
        expenses.push(expenseObj)
    }

    return expenses
}


