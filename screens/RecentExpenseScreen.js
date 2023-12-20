import { View, Text, FlatList } from 'react-native';
import ExpenseTotal from '../components/ExpenseTotal';
import ExpenseItem from '../components/ExpenseItem';
import { expenses } from '../store/Dummy_data';
import AddUpdate from '../components/AddUpdate';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { getDateMinusDays } from '../util/date';


const RecentExpenceScreen = () => {
    const navigation = useNavigation();
    const expenseList = useSelector(state => state.expenses)
    const updateExpenseHandler = (item) => {
        navigation.navigate('manageExpenses', {
            expenseId: item.id,
            expenseAmount:item.amount,
            expenseTitle:item.title,
            expenseDate:item.date
        })
    }
    

    const expenseListHandler = (itemdata) => {
        const item = itemdata.item
        const handlePress =()=>{
            updateExpenseHandler(item)
        }
        return <ExpenseItem {...itemdata.item} onPress={handlePress} />
    }

   

    const recentExpenses = expenseList.filter((expenseItem) => {
        const today = new Date();
        const dateBefore7days = getDateMinusDays(today, 7)
        return new Date(expenseItem.date) > dateBefore7days
    })

    const expenseSum = recentExpenses.reduce((sum, expense) => {
        return sum + expense.amount
    }, 0)

    return (
        <>
            <ExpenseTotal title={'Last 7days'} totalAmount={expenseSum.toFixed(2)} />
            <View>
                <FlatList
                    data={recentExpenses}
                    keyExtractor={item => item.id}
                    renderItem={expenseListHandler}
                />
            </View>
        </>
    )
}

export default RecentExpenceScreen