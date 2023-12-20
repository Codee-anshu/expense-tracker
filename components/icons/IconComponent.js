import { View, Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const IconComponent = ({ iconName, size,color , onPress}) => {
    return (
        <Pressable onPress={onPress} style={({pressed})=> pressed && styles.pressed}>
            <Icon name={iconName} size={size} color={color}/>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressed:{
        opacity:0.75
    }
})

export default IconComponent