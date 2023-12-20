import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Colors } from '../assets/Colors';
import { getFormatedDate } from '../util/date';


const ExpenseItem = ({ title, date, amount, onPress }) => {
    // console.log(date)
    return (
        <Pressable
            style={({ pressed }) => pressed ?[styles.container,styles.pressed]: styles.container}
            onPress={onPress}
        >
            <View>
                <Text style={styles.details}>{title.toUpperCase()}</Text>
                <Text style={[styles.details, { fontSize: 12, fontWeight: '400' }]}>{getFormatedDate(new Date(date))}</Text>
            </View>
            <View style={styles.button}>
                <Text style={{ fontWeight: '800' }}>{`${amount.toFixed(2)}`}</Text>
            </View>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    container: {
        margin: '5%',
        padding: '3%',
        backgroundColor: Colors.primarySurface,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        borderRadius: 5
    },
    pressed: {
        opacity: 0.7
    },
    details: {
        color: Colors.white,
        fontWeight: '600'
    },
    button: {
        width: '25%',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        padding: 10,
        paddingHorizontal: 15
    }
})

export default ExpenseItem