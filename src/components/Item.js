import { Text, StyleSheet, Image, View } from 'react-native';

export default function Item({Item}) {
    return(
        <View style={styles.cardContainer}>
            <View style={styles.imgContainer}>
                <Image
                    source={{uri: item.image}}
                    style={styles.img}
                    resizeMode='cover'
                ></Image>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <Text style={styles.category}>{item.category}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: "100%",
        minHeight: 130,
        flexDirection: 'row',
        borderColor: 'white',
        borederRadius: 8,
        marginBottom: 16
    },
    imgContainer: {
        width: 100,
        height: 125
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 8
    },
    textContainer: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#222'
    },
    category: {
        color: '#22c9f3',
        fontSize: 12,
        marginTop: 3
    },
    description: {
        fontSize: 12,
        fontStyle: 'italic',
        color: '#555',
        marginTop: 5,
        lineHeight: 17
    },
    price: {
        backgroundColor: '#384053',
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        paddingHorizontal: 9,
        paddingVertical: 3,
        borderRadius: 12,
        overflow: 'hidden',
        marginTop: 6
    }
})