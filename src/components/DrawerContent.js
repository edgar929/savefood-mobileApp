import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  Linking,
  Pressable,
  Alert,
  Switch,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { colors } from "../global/styles";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import { Avatar, Button, Icon } from "react-native-elements";

const DrawerContent = (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={{ backgroundColor: colors.buttons }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 20,
              paddingVertical: 10,
            }}>
            <Avatar
              rounded
              avatarStyle={styles.avatar}
              size={75}
              source={{
                uri: "https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg",
              }}
            />

            <View style={{ marginLeft: 10 }}>
              <Text
                style={{
                  fontWeight: "bold",
                  color: colors.Cardbackground,
                  fontSize: 18,
                }}>
                shumbusho edgar
              </Text>
              <Text style={{ color: colors.Cardbackground, fontSize: 14 }}>
                {" "}
                edgar@gmail.com
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingBottom: 5,
            }}>
            <View style={{ flexDirection: "row", marginTop: 0 }}>
              <View
                style={{
                  marginLeft: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: colors.Cardbackground,
                    fontSize: 18,
                  }}>
                  1
                </Text>
                <Text style={{ color: colors.Cardbackground, fontSize: 14 }}>
                  My Favorites
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", marginTop: 0 }}>
              <View
                style={{
                  marginLeft: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: colors.Cardbackground,
                    fontSize: 18,
                  }}>
                  0
                </Text>
                <Text style={{ color: colors.Cardbackground, fontSize: 14 }}>
                  My Cart
                </Text>
              </View>
            </View>
          </View>
        </View>

        <DrawerItemList {...props} />

        <DrawerItem
          label="Payment"
          icon={({ color, size }) => (
            <Icon
              type="material-community"
              name="credit-card-outline"
              color={color}
              size={size}
            />
          )}
        />

        <DrawerItem
          label="Promotions"
          icon={({ color, size }) => (
            <Icon
              type="material-community"
              name="tag-heart"
              color={color}
              size={size}
            />
          )}
        />

        <DrawerItem
          label="Settings"
          icon={({ color, size }) => (
            <Icon
              type="material-community"
              name="cog-outline"
              color={color}
              size={size}
            />
          )}
        />

        <DrawerItem
          label="Help"
          icon={({ color, size }) => (
            <Icon
              type="material-community"
              name="lifebuoy"
              color={color}
              size={size}
            />
          )}
        />

        <View style={{ borderTopWidth: 1, borderTopColor: colors.grey5 }}>
          <Text style={styles.preferences}>Preferences</Text>

          <View style={styles.switchText}>
            <Text style={styles.darkthemeText}>Dark Theme</Text>
            <View style={{ paddingRight: 10 }}>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor="#f4f3f4"
              />
            </View>
          </View>
        </View>
      </DrawerContentScrollView>

      <DrawerItem
        label="Sign Out"
        icon={({ color, size }) => (
          <Icon
            type="material-community"
            name="logout-variant"
            color={color}
            size={size}
            onPress={() => {
              Alert.alert(
                "Sign Out",
                "Are you sure you want to sign out?",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                  },
                  { text: "OK", onPress: () => console.log("OK Pressed") },
                ],
                { cancelable: false }
              );
            }}
          />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  avatar: {
    borderWidth: 4,
    borderColor: colors.Cardbackground,
  },

  preferences: {
    fontSize: 16,
    color: colors.grey2,
    paddingTop: 10,
    paddingLeft: 20,
  },

  switchText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingVertical: 5,
    paddingRight: 10,
  },
  darkthemeText: {
    fontSize: 16,
    color: colors.grey2,
    paddingTop: 10,
    paddingLeft: 0,
    fontWeight: "bold",
  },
});

export default DrawerContent;
