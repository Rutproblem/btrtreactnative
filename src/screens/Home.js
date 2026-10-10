import { React } from 'react';
import { Text, Image, StyleSheet, View, Button, Pressable, Image, Flatlist } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from '../components/Icons';
import Item from '../components/Item';
import data from '../data/data.json'

export default function Home({ navigation }) {
    const openAboutTab = () => {
        navigation.navigate('AboutTab');
    };

    const products = data.popularProducts;
    const [showAll, setShowAll] = useStats(false);

    const visibleProducts = showAll ? products : products.slice(0,3);

    const renderHeader = () => {
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

        <View style={styles.iconsContainer}>
            <Icon name="cellphone" iconText='iPhone'></Icon>
            <Icon name="android" iconText='Samsung'></Icon>
            <Icon name="laptop" iconText='Lenovo'></Icon>
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
    );
}
 
const renderProduct =({ item }) => {
    return <Item item={item}></Item>
}

const renderFooter = () => {
    if(products.length <= 3) {
        return null;
    }

    return(
        <Pressable
            style={styles.viewMoreBtn}
            onPress={() => setShowAll(!showAll)}
        >
            <Text style={styles.viewMoreText}>
                {showAll ? "Show Less" : "Show More"}
            </Text>
        </Pressable>
    )
}

return (
    <Flatlist
        style={styles.container}
        contentContainerStyle={styles.listContent}
        data={visibleProducts}
        renderItem={ renderProduct}
        keyExtractor={(item) => item.id.toString}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        extraData={showAll}
        showVerticalScrollIndicator={false}
    ></Flatlist>
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
    },
    iconsContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  listContent: {
    paddingBottom: 30,
  },

  sliderContainer: {
    width: "90%",
    height: 200,
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 8,
    overflow: "hidden",
  },

  item: {
    flex: 1,
    justifyContent: "center",
  },

  imgItem: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },

  iconsContainer: {
    width: "90%",
    alignSelf: "center",
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  sectionTitle: {
    width: "90%",
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
    marginTop: 30,
    marginBottom: 20,
  },

  viewMoreButton: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#22C9F3",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },

  viewMoreText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  }
})
