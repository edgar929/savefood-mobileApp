import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import RootClientTabs from "./ClientTabs";
import { Icon } from "react-native-elements";
import { colors } from "../global/styles";
import BusinessConsoleScreen from "../screens/BusinessConsoleScreen";
import DrawerContent from "../components/DrawerContent";

const Drawer = createDrawerNavigator();

const RootDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="RootClientTabs"
        component={RootClientTabs}
        options={{
          title: "Client",
          headerShown: false,
          drawerIcon: ({ focused, size }) => {
            return (
              <Icon
                name="home"
                type="material-community"
                color={focused ? "#8ee788" : colors.grey2}
                size={size}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="business console"
        component={BusinessConsoleScreen}
        options={{
          title: "Business console",
          headerShown: false,
          drawerIcon: ({ focused, size }) => {
            return (
              <Icon
                name="business"
                type="material"
                color={focused ? "#8ee788" : colors.grey2}
                size={size}
              />
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
};
export default RootDrawer;
