import { Pressable, StyleSheet, Text, View } from "react-native"
import { Colors } from "../assets/Colors"
import { useNavigation } from "@react-navigation/native"

const AddUpdate = ({ title ,onPress }) => {
    const navigation = useNavigation();


    return <View style={styles.container}>

        <Pressable
            style={({ pressed }) => pressed ? [styles.button, styles.pressed] : styles.button}
            onPress={() => navigation.goBack()}
        >
            <Text style={styles.buttonText}>Cancel</Text>
        </Pressable>
        <Pressable
            style={({ pressed }) => pressed ?
                [styles.button, styles.pressed] :
                [styles.button, { backgroundColor: Colors.secondarySurface }]
            }
            onPress={onPress}
        >
            <Text style={styles.buttonText}>
                {title.toUpperCase()}
            </Text>
        </Pressable>

    </View>
}


const styles = StyleSheet.create({
    container: {
        marginVertical: '2%',
        padding: '2%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'center'
    },
    button: {
        width: '40%',
        backgroundColor: Colors.primary,
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
    },
    pressed: {
        opacity: 0.75
    },
    buttonText: {
        fontSize: 18,
        color: Colors.primarySurface,
        fontWeight: '600'
    }
})

export default AddUpdate