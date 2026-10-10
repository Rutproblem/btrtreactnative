import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import About from '../screens/About';

const HomeStack = createNativeStackNavigator();
const AboutStack = createNativeStackNavigator();

const screenOptions = {
    headerStyle: {
        backgroundColor: '#2563eb'
    },
    headerTintColor: 'white',
    headerTitleStyle: {
        fontWeight: 'bold'
    },
    headerTitleAlign: 'center'
};

export function HomeStackNavigator() {
    return(
        <HomeStack.Navigator screenOptions={screenOptions}>
            <HomeStack.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Home'
                }}
            ></HomeStack.Screen>
        </HomeStack.Navigator>
    )
}

export function AboutStackNavigator() {
    return(
        <AboutStack.Navigator screenOptions={screenOptions}>
            <AboutStack.Screen
                name="About"
                component={About}
                options={{
                    title: 'About'
                }}
            ></AboutStack.Screen>
        </AboutStack.Navigator>
    )
}