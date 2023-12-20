import { StyleSheet, View, Alert } from 'react-native';
import AddUpdate from '../components/AddUpdate';
import IconComponent from '../components/icons/IconComponent';
import { useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addExpenses, removeExpenses, updateExpenses } from '../store/redux/ExpenseSlice';
import ExpenseForm from '../components/ExpenseForm';
import { storeExpenses } from '../util/http';
import { addExpenseToDataase } from '../util/fetch';



const ManageExpensesScreen = ({ route, navigation }) => {
    const editExpenseId = route.params?.expenseId
    const isEditing = !!editExpenseId
    const [expenseData, setExpenseData] = useState({
        amount: isEditing ? route.params.expenseAmount.toString() : '',
        date: isEditing ? route.params.expenseDate.toString() : '',
        title: isEditing ? route.params.expenseTitle.toString() : '',
    })
    const updateExpenseData = (fieldName, value) => {
        setExpenseData((prevData) => ({
            ...prevData,
            [fieldName]: value
        }))
    }



    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [isEditing, navigation])


    const dispatch = useDispatch()
    const addExpenseHandler = () => {

        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0
        const dateIsValid = new Date(expenseData.date) !== 'Invalid Date'
        const titleIsValid = expenseData.title.trim().length > 0

        // if (!amountIsValid || !dateIsValid || !titleIsValid) {
        //     Alert.alert('Invalid Input', 'Please input valid data')
        //     return;
        // }
        console.log(expenseData.amount)
        addExpenseToDataase(expenseData)
        // dispatch(addExpenses(expenseData));
        //  storeExpenses(expenseData);
        // navigation.goBack();
    }
    const deleteExpenseHandler = () => {
        dispatch(removeExpenses({ id: editExpenseId }))
        navigation.goBack();
    }

    const updateExpenseHandler = () => {
        dispatch(updateExpenses({ id: editExpenseId, amount: expenseData.amount, title: expenseData.title, date: expenseData.date }))
        navigation.goBack();
    }

    return <View>
        <ExpenseForm expenseData={expenseData} updateExpenseData={updateExpenseData} />
        <View style={styles.container}>
            <AddUpdate title={isEditing ? 'update' : 'add'} onPress={isEditing ? updateExpenseHandler : addExpenseHandler} />
        </View>
        <View style={isEditing ? styles.deleteContainer : styles.hide}>
            <IconComponent
                iconName={'trash-alt'}
                size={26}
                color={'red'}
                onPress={deleteExpenseHandler}
            />
        </View>

    </View>
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
    },
    deleteContainer: {
        marginHorizontal: 25,
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1
    },
    hide: {
        display: 'none'
    }
})


export default ManageExpensesScreen