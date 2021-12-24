import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { Icon, withBadge } from "react-native-elements";
import { colors, parameters } from "../global/styles";

const HomeHeader = () => {
  const BadgeIcon = withBadge(0)(Icon);

  return (
    <View style={styles.header}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 15,
        }}>
        <Icon
          type="material-community"
          name="menu"
          color={colors.Cardbackground}
          size={30}
        />
      </View>

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.title}>SaveFood</Text>
      </View>

      <View style={{ alignItems: "center", justifyContent: "center", paddingRight:15 }}>
        <BadgeIcon
          type="material-community"
          name="cart"
          color={colors.Cardbackground}
          size={30}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: colors.primary,
    height: parameters.headerHeight,
    justifyContent: "space-between",
  },
  title: {
    color: colors.headerText,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default HomeHeader;
