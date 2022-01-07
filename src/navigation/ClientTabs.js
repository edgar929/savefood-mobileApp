import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import MyOrderScreen from "../screens/MyOrdersScreen";
import { colors } from "../global/styles";
import { ClientStack } from "./ClientStack";

const ClientTabs = createBottomTabNavigator();

const RootClientTabs = () => {
  return (
    <ClientTabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.grey2,
      }}>
      <ClientTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="home"
              type="material-community"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <ClientTabs.Screen
        name="ClientStack"
        component={ClientStack}
        options={{
          tabBarLabel: "Search",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon
              name="magnify"
              type="material-community"
              color={color}
              size={25}
            />
          ),
        }}
      />
      <ClientTabs.Screen
        name="Myorders"
        component={MyOrderScreen}
        options={{
          tabBarLabel: "My orders",
          tabBarIcon: ({ color }) => (
            <Icon
              name="view-list"
              type="material-community"
              color={color}
              size={25}
            />
          ),
        }}
      />
      <ClientTabs.Screen
        name="MyAccount"
        component={MyAccountScreen}
        options={{
          tabBarLabel: "My Account",
          tabBarIcon: ({ color }) => (
            <Icon
              name="account"
              type="material-community"
              color={color}
              size={25}
            />
          ),
        }}
      />
    </ClientTabs.Navigator>
  );
};

export default RootClientTabs;
