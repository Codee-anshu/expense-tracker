import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../assets/Colors';

const ExpenseTotal = ({title, totalAmount}) =>{
    return (
        <>
        <View style={styles.container}>
            <Text style={styles.deatils}>{title}</Text>
            <Text style={[styles.deatils,{fontWeight:'800'}]}>{`$${totalAmount}`}</Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        margin:'3%',
        padding:'3%',
        backgroundColor:Colors.primary,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:10
    },
    deatils:{
        color:Colors.primarySurface,
        fontSize:15
    }
})

export default ExpenseTotal