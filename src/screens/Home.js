import React, { useState } from 'react'
import { Text, StyleSheet, View, Button, Pressable, Image, FlatList } from 'react-native'
import Swiper from 'react-native-swiper';
import Icon from '../components/Icons';
import Item from '../components/Item';
import data from '../data/data.json'

export default function Home({ navigation }) {
    const openAboutTab = () => {
        navigation.navigate('AboutTab');
    };

    const products = data.popularProducts;
    const [showAll, setShowAll] = useState(false);

    const visibleProducts = showAll ? products : products.slice(0,3);

    const renderHeader = () => {
    return(
        <View style={styles.container}>
            <View style={styles.sliderContainer}>
                <Swiper
                    autoplay
                    autoplayTimeout={5}
                    activeDotColor='#22D4FF'
                    loop={true}
                    showsButtons={true}
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
                    {/* <View style={styles.item}>
                        <Image
                            source={require("../../assets/rm3.jfif")}
                            style={styles.imgItem}
                            resizeMode='cover'
                        ></Image>
                    </View> */}
                </Swiper>
            </View>

            <View style={styles.iconsContainer}>
                <Icon name="cellphone" iconText="iPhone"></Icon>
                <Icon name="android" iconText="Samsung"></Icon>
                <Icon name="laptop" iconText="Laptop"></Icon>
            </View>

            <Text style={styles.sectionTitle}>
                Most Popular Products
            </Text>

            {/* <Text style={styles.emoji}>🏠</Text>
            <Text style={styles.title}>Home Screen</Text>
            <Text style={styles.description}>Welcome to the Home Screen</Text>
            <Pressable style={styles.button}>
                <Text style={styles.btnText}>Go to About</Text>
            </Pressable>

            <Button
                title='Open Menu'
                onPress={()=> navigation.openDrawer()}
            ></Button> */}

        </View>
        );
    }

    const renderProduct = ({ item }) => {
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
        <FlatList
            style={styles.container}
            contentContainerStyle={styles.listContent}
            data={visibleProducts}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id.toString()}
            ListHeaderComponent={renderHeader}
            ListFooterComponent={renderFooter}
            extraData={showAll}
            showsVerticalScrollIndicator={false}
        ></FlatList>
    )


 
}

const styles = StyleSheet.create({
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

  viewMoreBtn: {
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
  },
});