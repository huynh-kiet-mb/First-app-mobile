import * as React from "react";
import { StyleSheet, Text, View, ImageBackground } from 'react-native';


const image = { uri: "https://i.pinimg.com/originals/84/b2/d2/84b2d2bb17e1fedd394c37d6d2a38e19.png" };
const FunctionScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="stretch"
        style={styles.image}
      >

        <Text></Text>
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

export default FunctionScreen;
