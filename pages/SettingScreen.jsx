import * as React from "react";
import { StyleSheet, Text, View, ImageBackground } from 'react-native';


const image = { uri: "https://www.pixelstalk.net/wp-content/uploads/2016/08/1080-x-1920-HD-Wallpaper-Vertical.jpg" };

const SettingScreen = () => {
    return(
        <View style={styles.container}>
        <ImageBackground
          source={image}
          resizeMode="stretch"
          style={styles.image}
        ></ImageBackground>
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