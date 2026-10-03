import { React } from 'react';
import { Text, Image, StyleSheet, View, Button, Pressable } from 'react-native';
import Swiper from 'react-native-swiper';

export default function Home({ navigation }) {
    const openAboutTab = () => {
        navigation.navigate('AboutTab');
    };

return(
    <View style={styles.container}>

        <View style={styles.sliderContainer}>
            <Swiper
                autoplay
                autoplayTimeout={5}
                activeDotColor='#22D4FF'
                showsButtons={true}
                loop={true}
            >
                <View style={styles.item}>
                    <Image
                        source={require("../../assets/rm1.jpg")}
                        style={styles.imgItem}
                        resizeMode='cover'
                    ></Image>
                </View>
                <View style={styles.item}>
                    <Image
                        source={require("../../assets/rm2.jpg")}
                        style={styles.imgItem}
                        resizeMode='cover'
                    ></Image>
                </View>
                <View style={styles.item}>
                    <Image
                        source={require("../../assets/rm3.jpg")}
                        style={styles.imgItem}
                        resizeMode='cover'
                    ></Image>
                </View>
                <View style={styles.item}>
                    <Image
                        source={require("../../assets/rm4.jpg")}
                        style={styles.imgItem}
                        resizeMode='cover'
                    ></Image>
                </View>
            </Swiper>
        </View>

        {/* <Text style={styles.emoji}>🏠</Text>
        <Text style={styles.title}>Home Screen</Text>
        <Text style={styles.description}>Welcome to the Home Screen</Text>
        <Pressable style={styles.button}>
            <Text style={styles.btnText}>Go to About</Text>
        </Pressable>
        <Button
            title="Open Menu"
            onPress={()=> navigation.openDrawer()}
        ></Button> */}

    </View>
)
 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        padding: 24,
        backgroundColor: "#f8fafc"
    },
    sliderContainer: {
        width: "90%",
        height: 200,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 8,
        overflow: 'hidden'
    },
    item: {
        flex: 1,
        justifyContent: 'center'
    },
    imgItem: {
        width: '100%',
        height: '100%',
        borderRadius: 8
    },
    emoji: {
        fontSize: 64,
        fontWeight: 'bold',
        color: '#0f172a',
        marginBottom: 16
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#0f172a',
        marginBottom: 12
    },
    description: {
        maxWidth: 320,
        fontSize: 16,
        color: '#64748b',
        textAlign: 'center',
        marginBottom: 24
    },
    button: {
        backgroundColor: '#2563eb',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 10
    },
    btnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
})
