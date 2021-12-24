import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Button,
} from "react-native";
import Header from "../../components/Header";
import { colors, title, parameters } from "../../global/styles";
import * as Animatable from "react-native-animatable";
import { Fontisto, MaterialIcons, Entypo } from "@expo/vector-icons";

const SignInScreen = ({navigation}) => {
  const [textInput2Focused, setTextInput2Focused] = useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);
  return (
    <View style={styles.container}>
      <Header title="MY ACCOUNT" type="arrowleft" navigation={navigation} />
      <View>
        <Text style={title}>Sign-In</Text>
      </View>

      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text style={styles.text1}>Please enter email and password</Text>
        <Text style={styles.text1}>registered with your account</Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <View>
          <TextInput
            style={styles.TextInput1}
            placeholder="Email"
            ref={textInput1}
            onFocus={() => setTextInput2Focused(true)}
            onBlur={() => setTextInput2Focused(false)}
          />
        </View>
        <View style={styles.TextInput2}>
          <Animatable.View
            animation={textInput2Focused ? "" : "fadeInLeft"}
            duration={400}>
            <Fontisto name="locked" color={colors.grey3} size={20} />
          </Animatable.View>

          <TextInput
            style={{ width: "80%" }}
            placeholder="Password"
            ref={textInput2}
          />

          <Animatable.View
            animation={textInput2Focused ? "" : "fadeInLeft"}
            duration={400}>
            <MaterialIcons
              name="visibility-off"
              size={20}
              color={colors.grey3}
              style={{ marginRight: 10 }}
            />
          </Animatable.View>
        </View>
      </View>

      <View style={{ marginHorizontal: 20, marginTop: 10 }}>
        <Button
          title="SIGN IN"
          buttonStyle={parameters.styledButton}
          titleStyle={parameters.buttonTitle}
          color={colors.buttons}
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
      </View>

      <View style={{ marginTop: 15, alignItems: "center" }}>
        <Text style={{ ...styles.text1, textDecorationLine: "underline" }}>
          Forgot your password?
        </Text>
      </View>

      <View style={{ marginTop: 15, alignItems: "center" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>OR</Text>
        <Text style={{ ...styles.text1, marginVertical: 10 }}>
          Sign in with:
        </Text>
      </View>

      <View style={{ ...styles.socialIcons }}>
        <View>
          <Entypo
            name="facebook-with-circle"
            size={50}
            color="blue"
            onPress={() => {}}
          />
        </View>
        <View>
          <Entypo
            name="google--with-circle"
            size={50}
            color="red"
            onPress={() => {}}
          />
        </View>
      </View>

      <View style={{ marginTop: 10, marginLeft: 20, flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text style={{ ...styles.text1 }}>New to SaveFood?</Text>
        </View>
        <View>
        <Text style={{ ...styles.createButton, textDecorationLine: "underline" }}>
          create an account
        </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    fontSize: 16,
    color: colors.grey3,
  },
  TextInput1: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#86939e",
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 8,
    paddingLeft: 15,
  },
  TextInput2: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#86939e",
    marginHorizontal: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    padding: 8,
    paddingLeft: 15,
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  createButton: {
    color: colors.buttons,
    fontSize: 16,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});

export default SignInScreen;
