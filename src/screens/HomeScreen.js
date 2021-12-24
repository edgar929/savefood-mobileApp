import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import HomeHeader from "../components/HomeHeader";
import { colors, parameters } from "../global/styles";
import { Icon } from "react-native-elements";

const Home = ({ navigation }) => {
  const [delivery, setdelivery] = useState(true);
  const [pickup, setpickup] = useState(false);
  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <View>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}>
            <TouchableOpacity
              onPress={() => {
                setdelivery(true);
                setpickup(false);
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.primary : colors.grey5,
                }}>
                <Text style={{ ...styles.deliveryText }}>Delivery</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setdelivery(false);
                setpickup(true);
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.grey5 : colors.primary,
                }}>
                <Text style={{ ...styles.deliveryText }}>Pick Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.filterView}>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: colors.grey5,
              borderRadius: 15,
              paddingVertical: 3,
            }}>
            <View style={styles.addressView}>
              <Icon
                type="material-community"
                name="map-marker"
                color={colors.grey1}
                size={26}
              />
              <Text
                style={{ color: colors.grey1, fontSize: 16, marginLeft: 10 }}>
                kg 973 Street
              </Text>
            </View>

            <View style={styles.clockView}>
              <Icon
                type="material-community"
                name="clock-time-four"
                color={colors.grey1}
                size={26}
              />
              <Text
                style={{ color: colors.grey1, fontSize: 16, marginLeft: 10 }}>
                Now
              </Text>
            </View>
          </View>

          <View>
            <Icon
              type="material-icons"
              name="tune"
              color={colors.grey1}
              size={26}
            />
          </View>
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Categories</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5,
  },

  deliveryText: {
    marginLeft: 5,
    fontSize: 16,
  },
  filterView: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginHorizontal: 10,
  },
  clockView: {
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 20,
    backgroundColor: colors.Cardbackground,
    borderRadius: 15,
    paddingHorizontal: 5,
    marginRight: 20,
  },
  addressView: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.grey2,
    paddingLeft: 10,
  },
  headerTextView: {
    backgroundColor: colors.grey5,
    paddingVertical: 5,
    marginTop: 10,
  },
});

export default Home;
