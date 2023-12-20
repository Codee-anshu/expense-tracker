import { View , Text, FlatList} from 'react-native';
import ExpenseTotal from '../components/ExpenseTotal';
import {useSelector} from 'react-redux'
import ExpenseItem from '../components/ExpenseItem';
import { useNavigation } from '@react-navigation/native';


const AllExpensesScreen =()=>{
    const navigation = useNavigation();
    const updateExpenseHandler = () => {
        navigation.navigate('editExpenses')
    }
    const expenseList = useSelector(state => state.expenses)

    const expenseListHandler = (itemdata) => {
        const item = itemdata.item
        // console.log(item.date)
        return <ExpenseItem {...itemdata.item} onPress={updateExpenseHandler} />
    }

    const expenseSum = expenseList.reduce((sum, expense) => {
        return sum + expense.amount
    }, 0)
    return <View>
        <ExpenseTotal title={'All'} totalAmount={expenseSum.toFixed(2)} />
        <View>
                <FlatList
                    data={expenseList}
                    keyExtractor={item => item.id}
                    renderItem={expenseListHandler}
                />
            </View>
    </View>
}

export default AllExpensesScreen