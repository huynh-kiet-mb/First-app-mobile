import * as React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Icon } from "react-native-elements";
import FunctionScreen from "./FunctionScreen";
import SettingScreen from "./SettingScreen";

const Tab = createMaterialBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Function"
        component={FunctionScreen}
        options={{
          tabBarIcon: () => (
            <Text>
              <Icon size={27} color="blue" name="home" />
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: () => (
            <Text>
              <Icon size={27} color="blue" name="settings" />
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
