import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { colors, parameters } from "../global/styles";
import { AntDesign } from "@expo/vector-icons";

const Header = ({ title, type,navigation }) => {
  return (
    <View style={styles.header}>
      <View style={{ marginLeft: 20 }}>
        <AntDesign
          name={type}
          color={colors.headerText}
          size={30}
          onPress={() => {
            navigation.goBack();
          }}
          />
          
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
  },
  headerText: {
    fontSize: 20,
    color: colors.headerText,
    fontWeight: "bold",
    marginLeft: 20,
  },
});
export default Header;
