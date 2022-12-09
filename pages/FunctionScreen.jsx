import * as React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import HeaderBar from "../components/header/index";

const image = {
  uri: "https://1.bp.blogspot.com/-Ag8Sf9wa8y0/X2S0zdu0qiI/AAAAAAAAbGw/p8aeOApmQ6s8OPaGr8tAmKt76iQOfRFmwCLcBGAsYHQ/d/night-landscape-phone-wallpaper-hd.png",
};
const FunctionScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="stretch" style={styles.image}>
        <HeaderBar title="Trang chủ" />
        <View style={styles.body}>

        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    
  },

  body: {
    width: "90%",
    height: "88%",
    backgroundColor:"#dadada",
    borderRadius: 10,
    marginBottom: 4
  },
});

export default FunctionScreen;
