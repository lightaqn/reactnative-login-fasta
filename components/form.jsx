import { Link } from "expo-router";
import React, { useState, FC } from "react";
import {
  Alert,
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

const logo = require("../assets/logo.jpg");
const facebook = require("../assets/facebook.png");
const linkedin = require("../assets/linkedin.png");
const tiktok = require("../assets/tiktok.png");

// type FormProps = {
//   type: "login" | "register";
//   setType: (type: "login" | "register") => void;
// };

const Form = ({ navigation }) => {
  const [click, setClick] = useState(false);
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");

  const [type, setType] = useState("login");

  const handleSubmit = async () => {
    e.preventDefault();

    const userbody = JSON.stringify({
      id: "abcd-testghjagj123",
      firstname,
      lastname,
      email,
      avatar: logo,
    });
    try {
      await fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: userbody,
      }).then((res) => {
        Alert.alert(
          type === "login"
            ? "Login Successfull"
            : "Congrats, register successful"
        );
        return () => navigation?.navigate("Home");
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView
      style={{
        padding: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 900,
        minHeight: 1300,
        marginHorizontal: 300,
        borderColor: "#000000",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 10,
      }}
    >
      <Image
        source={logo}
        className="h-[70px] w-[70px] rounded-full "
        resizeMode="contain"
        style={{ width: 150, height: 150, borderRadius: 50 }}
      />
      <Text
        className="text-[20px] font-bold uppercase text-center py-[30px] text-gray-800"
        style={{
          fontSize: 34,
          fontWeight: "bold",
          textAlign: "center",
          paddingVertical: 30,
          color: "black",
        }}
      >
        {type == "login" ? "Login" : "Register"}
      </Text>
      <View
        style={{
          width: "100%",
          gap: 30,
          paddingHorizontal: 30,
          marginVertical: 15,
        }}
      >
        {type === "login" ? (
          <>
            <TextInput
              placeholder="Enter your email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              autoCorrect={false}
              autoCapitalize="none"
              style={{
                height: 100,
                paddingHorizontal: 15,
                borderBottomColor: "black",
                borderStyle: "solid",
                color: "black",
                fontSize: 34,
                borderColor: "#000000",

                borderWidth: 1,
                borderRadius: 10,
              }}
            />
          </>
        ) : (
          <>
            <TextInput
              placeholder="Enter your firstname"
              value={firstname}
              onChangeText={(text) => setFirstname(text)}
              autoCorrect={false}
              autoCapitalize="none"
              style={{
                height: 100,
                paddingHorizontal: 15,
                borderBottomColor: "black",
                borderStyle: "solid",
                color: "black",
                fontSize: 34,
              }}
            />

            <TextInput
              placeholder="Enter your lastname"
              value={lastname}
              onChangeText={(text) => setLastname(text)}
              autoCorrect={false}
              autoCapitalize="none"
              style={{
                height: 100,
                paddingHorizontal: 15,
                borderBottomColor: "black",
                borderStyle: "solid",
                color: "black",
                fontSize: 34,
                borderColor: "#000000",

                borderWidth: 1,
                borderRadius: 10,
              }}
            />
          </>
        )}

        <TextInput
          placeholder="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          autoCorrect={false}
          autoCapitalize="none"
          style={{
            height: 100,
            paddingHorizontal: 15,
            borderBottomColor: "black",
            borderStyle: "solid",
            color: "black",
            fontSize: 34,
            borderColor: "#000000",

            borderWidth: 1,
            borderRadius: 10,
          }}
        />
      </View>
      <View
        style={{
          display: "flex",
          width: 400,
          justifyContent: "space-between",
          alignContent: "center",
          flexDirection: "row",
          marginVertical: 5,
          paddingHorizontal: 15,
          gap: 10,
        }}
      >
        <View
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignContent: "center",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <Switch
            style={{ width: 50, height: 35 }}
            value={click}
            onValueChange={setClick}
            trackColor={{ true: "green", false: "gray" }}
          />
          <Text className="font-[12px]" style={{ fontSize: 24 }}>
            Remember Me
          </Text>
        </View>

        <View>
          <Pressable onPress={() => Alert.alert("Forget Password!")}>
            <Text style={{ fontSize: 24, color: "red", fontStyle: "italic" }}>
              Forgot Password?
            </Text>
          </Pressable>
        </View>
      </View>

      <View
        className="w-full px-[15px]"
        style={{ width: "100%", paddingHorizontal: 15 }}
      >
        <Pressable
          onPress={handleSubmit}
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignContent: "center",
            flexDirection: "row",
            backgroundColor: "black",
            height: 120,
            margin: 20,

            paddingLeft: 100,
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignContent: "center",
              fontWeight: "bold",
              color: "#ffff",
              textAlign: "center",
              marginLeft: 200,
              marginTop: 30,
              paddingVertical: 10,
              fontSize: 40,
            }}
          >
            {type === "login" ? "Login" : "Register"}
          </Text>
        </Pressable>
        <Text
          style={{
            padding: 10,
            color: "#6d6989",
            textAlign: "center",
            fontSize: 30,
            marginVertical: 6,
            fontWeight: "bold",
          }}
        >
          OR
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignContent: "center",
          flexDirection: "row",
          marginBottom: 20,
          height: 100,
          gap: 15,
          borderRadius: 10,
          paddingHorizontal: 100,
        }}
      >
        <Image
          source={facebook}
          style={{
            display: "flex",
            width: 100,
            borderRadius: 50,
            borderColor: "white",
            height: 100,
          }}
        />
        <Image
          source={tiktok}
          style={{
            display: "flex",
            width: 100,
            borderRadius: 50,
            borderColor: "white",
            height: 100,
          }}
        />
        <Image
          source={linkedin}
          style={{
            display: "flex",
            width: 100,
            borderRadius: 50,
            borderColor: "white",
            height: 100,
          }}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "gray",
            fontWeight: "500",
            fontSize: 30,
          }}
        >
          {type === "login" ? "Don't Have Account?" : "Already joined? "}
        </Text>

        <TouchableOpacity
          style={{
            color: "blue",
            textAlign: "center",
            fontWeight: 700,
            fontSize: 30,
          }}
          onPress={
            type === "login"
              ? () => setType("register")
              : () => setType("login")
          }
        >
          {type === "login" ? "Sign Up" : "Register"}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Form;
