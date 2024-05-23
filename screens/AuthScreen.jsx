import Form from "../components/form";
import { useState, useEffect } from "react";
import {
  Pressable,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Alert,
} from "react-native";

const AuthScreen = ({ navigation }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Form navigation={navigation} />
    </View>
  );
};

export default AuthScreen;
