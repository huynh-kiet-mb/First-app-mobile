import * as React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Icon } from "react-native-elements";
import FunctionScreen from "./FunctionScreen";
import SettingScreen from "./SettingScreen";



const Tab = createMaterialBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator 
      shifting={true}
      barStyle={styles.NavigatorStyles}
      activeColor="#000000"
      inactiveColor="#FFFFFF"  
      labelStyle={{fontWeight: 'bold'}}
      
    >
      <Tab.Screen
        name="Function"
        component={FunctionScreen}
        options={{     
          tabBarBadge: false,
          tabBarLabel: <Text style={styles.TextStyles}>Home</Text>,
          tabBarIcon: ({color}) => (
            <Text>
              <Icon size={27} color={color} name="home" />
            </Text>
          ),
        }}
        
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarLabel:<Text style={styles.TextStyles}>Settings</Text>,
          tabBarIcon: ({color}) => (
            <Text>
              <Icon size={27} color={color} name="settings" />
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  NavigatorStyles:{
    backgroundColor: '#2D4099A6',
  },
  TextStyles:{
    color: "white",
    fontWeight: "bold",
  }
});

export default HomeScreen;
