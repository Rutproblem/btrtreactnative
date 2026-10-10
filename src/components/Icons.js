import { View, Text, Stylesheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Icon({name, iconText}) {
    return(
        <View style={styles.iconContainer}>
            <View style={styles.iconWrapper}>
                <MaterialCommunityIcons
                    name={name}
                    size={27}
                    color="#22d4ff"
                ></MaterialCommunityIcons>
            </View>

            <Text style={styles.iconText}>{iconText}</Text>
        </View>
    )
}

const styles = Stylesheet.create({
    iconContainer: {
        alignItems: 'center',
        width: 60
    },
    iconWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#384053',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    iconText: {
        marginTop: 6,
        fontWeight: 16,
        textAlign: 'center'
    }
})