import * as React from "react";
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import HeaderBar from '../components/header/index';


const image = { uri: "https://marmotamaps.com/de/fx/wallpaper/download/faszinationen/Marmotamaps_Wallpaper_Berchtesgaden_Smartphone_1080x1920.jpg" };

const SettingScreen = () => {
    return(
        <View style={styles.container}>
        <ImageBackground
          source={image}
          resizeMode="stretch"
          style={styles.image}
        >
          <HeaderBar title="Cài đặt"/>
        </ImageBackground>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      width: "100%",
      height: "100%",
      justifyContent: "center",
    },
  });
export default SettingScreen;