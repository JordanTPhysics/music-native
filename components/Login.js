import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

export default function Login(props) {
  const [text, setText] = useState("");
  const [spot, setSpot] = useState("");

  const isValid = (text, spot) => {
    if (text.length == 0) {
      return false;
    }
    if (spot.length == 0) {
      return false;
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <Text>A music analytics app</Text>
      <StatusBar style="auto" />

      <View nativeID="login" style={styles.inputContainer}>
        <Text>Enter your name</Text>
        <TextInput
          placeholder="Name"
          value={text}
          style={styles.input}
          onChangeText={(text) => setText(text)}
        ></TextInput>
        <TextInput
          placeholder="spotify"
          value={spot}
          style={styles.input}
          onChangeText={(spot) => setSpot(spot)}
        ></TextInput>
        <Button
          style={styles.loginBtn}
          title="Log In"
          onPress={() => {
            isValid() ? Alert("Credentials invalid") : props.logged();
          }}
        />
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 10,
    flexDirection: "column",
    backgroundColor: "magenta",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    margin: 1,
    borderWidth: 5,

    borderColor: "navy",
    borderRadius: 6,
    padding: 6,
  },
  textfield: {
    margin: 6,
    borderWidth: 5,
    borderStyle: "groove",
    borderColor: "navy",
    borderRadius: 0.1,
    padding: 6,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
});
