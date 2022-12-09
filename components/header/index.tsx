import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Linking,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import { Header as HeaderRNE, HeaderProps, Icon } from "@rneui/themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {LinearGradient} from 'expo-linear-gradient';


type HeaderComponentProps = {
  title: string;
  view?: string;
};

type ParamList = {
  Detail: {
    openDrawer: void;
  };
};

const Header: React.FunctionComponent<HeaderComponentProps> = (props) => {
  
  const docsNavigate = () => {
    Linking.openURL(`https://reactnativeelements.com/docs/${props.view}`);
  };

  const playgroundNavigate = () => {
    Linking.openURL(`https://@rneui/themed.js.org/#/${props.view}`);
  };

  return (
    <SafeAreaProvider>
      <HeaderRNE
        ViewComponent={LinearGradient} 
        linearGradientProps={{
          colors: ["#3E30BD", "#4532B493"],
          start: { x: 0, y: 0.5 },
          end: { x: 1, y: 0.5 },
        }}
        leftComponent={{
          icon: "menu",
          color: "#fff",
        }}
        rightComponent={
          <View style={styles.headerRight}>
            <TouchableOpacity onPress={docsNavigate}>
              <Icon name="description" color="white" />
            </TouchableOpacity>
          </View>
        }
        centerComponent={{ text: `${props.title}`, style: styles.heading }}
      />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#602DDA",
    marginBottom: 20,
    width: "100%",
    paddingVertical: 15,
  },
  heading: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
  },
  subheaderText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Header;
