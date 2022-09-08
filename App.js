import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { cloneElement, React, useState } from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./components/Login";
import Home from "./components/Home";
import Analysis from "./components/Analysis";

export default function App() {
  const Tab = createBottomTabNavigator();

  const [loggedin, setLoggedin] = useState(false);
  const handleLogin = () => {
    setLoggedin(true);
  };
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {!loggedin ? (
          <Tab.Screen name="login">
            {() => <Login logged={handleLogin} />}
          </Tab.Screen>
        ) : (
          <>
            <Tab.Screen name="home" component={Home} />
            <Tab.Screen name="analysis" component={Analysis} />
          </>
        )}
      </Tab.Navigator>
    </NavigationContainer>
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
  navbar: {
    position: "absolute",
    alignItems: "center",
    bottom: 20,
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
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
