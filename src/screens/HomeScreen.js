import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
  FlatList,
  Dimensions,
} from "react-native";
import Countdown from "react-native-countdown-component";
import HomeHeader from "../components/HomeHeader";
import { colors, parameters } from "../global/styles";
import { Icon } from "react-native-elements";
import { filterData, restaurantsData } from "../global/Data";
import FoodCard from "../components/FoodCard";

const SCREEN_WIDTH = Dimensions.get("window").width;
const Home = ({ navigation }) => {
  const [delivery, setdelivery] = useState(true);
  const [pickup, setpickup] = useState(false);
  const [indexCheck, setIndexCheck] = useState("0");
  return (
    <View style={styles.container}>
      <HomeHeader navigation={navigation} />
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <View
          style={{ backgroundColor: colors.Cardbackground, paddingBottom: 5 }}>
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
                <Text
                  style={{
                    ...styles.deliveryText,
                    color: delivery ? colors.Cardbackground : "black",
                  }}>
                  Delivery
                </Text>
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
                <Text
                  style={{
                    ...styles.deliveryText,
                    color: delivery ? "black" : colors.Cardbackground,
                  }}>
                  Pick Up
                </Text>
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

        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={filterData}
            keyExtractor={(item) => item.id}
            extraData={indexCheck}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => {
                  setIndexCheck(item.id);
                }}>
                <View
                  style={
                    indexCheck === item.id
                      ? { ...styles.selectedCardView }
                      : { ...styles.cardView }
                  }>
                  <Image source={item.image} style={styles.categoryImage} />
                  <Text
                    style={
                      indexCheck === item.id
                        ? { ...styles.selectedCategoryText }
                        : { color: "black" }
                    }>
                    {item.name}
                  </Text>
                </View>
              </Pressable>
            )}
          />
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Free Delivery now</Text>
        </View>

        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                marginLeft: 15,
                fontSize: 16,
                marginTop: -10,
                marginRight: 5,
              }}>
              Options changing in
            </Text>
            <Countdown
              until={3600}
              size={14}
              digitStyle={{ backgroundColor: colors.lightgreen }}
              digitTxtStyle={{ color: colors.Cardbackground }}
              timeToShow={["M", "S"]}
              timeLabels={{ m: "Min", s: "Sec" }}
            />
          </View>

          <FlatList
            style={{ marginTop: 10, marginBottom: 10 }}
            horizontal={true}
            data={restaurantsData}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={{ marginRight: 5 }}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.images}
                  restaurantName={item.restaurantName}
                  farAway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            )}
          />
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Promotions available</Text>
        </View>

        <View>
          <FlatList
            style={{ marginTop: 10, marginBottom: 10 }}
            horizontal={true}
            data={restaurantsData}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={{ marginRight: 5 }}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.images}
                  restaurantName={item.restaurantName}
                  farAway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            )}
          />
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Restaurants in your Area</Text>
        </View>

        <View style={{ width: SCREEN_WIDTH, paddingTop: 10 }}>
          {restaurantsData.map((item) => (
            <View key={item.id} style={{ paddingBottom: 20 }}>
              <FoodCard
                screenWidth={SCREEN_WIDTH * 0.95}
                images={item.images}
                restaurantName={item.restaurantName}
                farAway={item.farAway}
                businessAddress={item.businessAddress}
                averageReview={item.averageReview}
                numberOfReview={item.numberOfReview}
              />
            </View>
          ))}
        </View>
      </ScrollView>

      {/* {delivery && (
        <View style={styles.floatButton}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("RestaurantMapScreen");
            }}>
            <Icon
              name="place"
              type="material"
              size={32}
              color={colors.buttons}
            />

            <Text style={{ color: colors.grey2 }}>Map</Text>
          </TouchableOpacity>
        </View>
      )} */}
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
  cardView: {
    borderRadius: 15,
    backgroundColor: colors.grey5,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  selectedCardView: {
    borderRadius: 15,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  categoryImage: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  selectedCategoryText: {
    color: "white",
  },
});

export default Home;
