import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Button,
} from "react-native";
import Header from "../../components/Header";
import { colors, title, parameters } from "../../global/styles";
import * as Animatable from "react-native-animatable";
import Swiper from "react-native-swiper";
import { LinearGradient } from "expo-linear-gradient";

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={{ ...styles.container }}>
      <Swiper autoplay={true}>
        <ImageBackground
          style={{ ...styles.image }}
          resizeMode="cover"
          source={require("../../../assets/images/slide1.jpg")}>
          <View style={{ ...styles.overlay }}>
            <Text style={styles.text}>SaveFood{"\n"}</Text>
          </View>

          <View style={{ ...styles.middleText }}>
            <Text style={{ ...styles.text1 }}>Waste Less, Profit More</Text>
            <Text style={{ ...styles.text2 }}>
              Find your way to surplus food
            </Text>
          </View>

          <View style={{ ...styles.buttons }}>
            <Button
              title="Get started"
              buttonStyle={parameters.styledButton}
              titleStyle={parameters.buttonTitle}
              color={colors.buttons}
              onPress={() => {
                navigation.navigate("SignIn");
              }}
            />
          </View>
        </ImageBackground>

        <ImageBackground
          style={{ ...styles.image }}
          resizeMode="cover"
          source={require("../../../assets/images/slide2.jpg")}>
          <View style={{ ...styles.overlay,justifyContent:"center",alignItems:"center" }}>
            <Text style={{...styles.text1, paddingHorizontal:10}}>Respect for food is a respect for life, for who we are and what we do</Text>
          </View>
          <View style={{...styles.buttons }}>
            <Button
              title="Get started"
              buttonStyle={parameters.styledButton}
              titleStyle={parameters.buttonTitle}
              color={colors.buttons}
              onPress={() => {
                navigation.navigate("SignIn");
              }}
            />
          </View>
        </ImageBackground>

        <ImageBackground
          style={{ ...styles.image }}
          resizeMode="cover"
          source={require("../../../assets/images/slide3.jpg")}>
              <View style={{ ...styles.overlay,justifyContent:"center",alignItems:"center" }}>
            <Text style={{...styles.text1, paddingHorizontal:10}}>Food waste is an atrocity that is reducible, if not completely avoidable.</Text>
          </View>
          <View style={{...styles.buttons }}>
            <Button
              title="Get started"
              buttonStyle={parameters.styledButton}
              titleStyle={parameters.buttonTitle}
              color={colors.buttons}
              onPress={() => {
                navigation.navigate("SignIn");
              }}
            />
          </View>
        </ImageBackground>
      </Swiper>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#A2A629",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#000000c0",
  },
  text: {
    color: colors.primary,
    fontSize: 60,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    top: "20%",
  },
  text1: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  text2: {
    color: colors.grey2,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  middleText: {
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    bottom: 0,
  },
  buttons: {
    marginHorizontal: 20,
    marginTop: "90%",
  },
});

export default WelcomeScreen;
