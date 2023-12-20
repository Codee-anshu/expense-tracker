import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Colors } from '../assets/Colors';


const Input = ({ label, textConfigure }) => {
    return <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>{label}</Text>
        <TextInput style={styles.inputField} {...textConfigure} />
    </View>
}

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 15,
        marginVertical:2
    },
    inputLabel: {
        fontWeight: '800',
        color:Colors.primarySurface,
        fontSize:18,
        textTransform:'capitalize'
    },
    inputField: {
        color: Colors.primarySurface,
        backgroundColor: Colors.primary,
        fontSize:20
    }
})

export default Input