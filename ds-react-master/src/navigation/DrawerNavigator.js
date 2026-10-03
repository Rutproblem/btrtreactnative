import { createDrawerNavigator } from "@react-navigator/drawer";
import AboutStackNavigator from "./StackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return(
        <Drawer.Navigator>
            <Drawer.Screen
                name="Home"
                component={TabNavigator}
            ></Drawer.Screen>
            <Drawer.Screen
                name="About"
                component={AboutStackNavigator}
            ></Drawer.Screen>
        </Drawer.Navigator>
    )
}