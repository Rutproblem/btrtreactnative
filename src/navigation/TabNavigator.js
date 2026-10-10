import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import {
    HomeStackNavigator,
    AboutStackNavigator
} from './StackNavigator';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return(
        <Tab.Navigator
            initialRouteName="HomeTab"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#2563eb',
                tabBarInactiveTintColor: '#94a3b8',
                tabBarStyle: {
                    height: 65,
                    paddingTop: 6,
                    paddingBottom: 6,
                    backgroundColor: 'white',
                    borderTopColor: '#e2e8f0'
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "600"
                },
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;

                    if(route.name === "HomeTab") {
                        iconName = focused ? "home" : "home-outline";
                    }
                    else if (route.name === "AboutTab") {
                        iconName = focused 
                        ? "information-circle" 
                        : 'information-circle-outline'
                    }

                    return (
                        <Ionicons
                            name={iconName}
                            size={size}
                            color={color}
                        ></Ionicons>
                    )
                }

            })}
        >

            <Tab.Screen
                name="HomeTab"
                component={HomeStackNavigator}
                options={{
                    tabBarLabel: "Home"
                }}
            ></Tab.Screen>

            <Tab.Screen
                name="AboutTab"
                component={AboutStackNavigator}
                options={{
                    tabBarLabel: "About"
                }}
            ></Tab.Screen>

        </Tab.Navigator>
    )
}