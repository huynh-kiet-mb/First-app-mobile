import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Button, Input } from "react-native-elements";
import { Icon } from "react-native-elements";
import HeaderBar from "../components/header/index";
import styled from "styled-components";

const image = {
  uri: "https://1.bp.blogspot.com/-Ag8Sf9wa8y0/X2S0zdu0qiI/AAAAAAAAbGw/p8aeOApmQ6s8OPaGr8tAmKt76iQOfRFmwCLcBGAsYHQ/d/night-landscape-phone-wallpaper-hd.png",
};
const FunctionScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="stretch" style={styles.image}>
        <HeaderBar title="Trang chủ" />

        <View style={styles.body}>
          <Input
            label="Mã số ID :3"
            keyboardType="number-pad"
            placeholder="Nhập mã số ID của gia đình..."
          />
          <Button title="Xác nhận" />
          <BodyFunctionWrapper>
            <Heading>THÔNG BÁO</Heading>
            <ButtonWrapper>
              <ButtonFuction color="#2133da">
                <Text style={{ color: "#FFFFFF" }}>Về nhà trễ</Text>
              </ButtonFuction>
              <ButtonFuction color="#21da5f">
                <TextButton color="#FFFFFF">
                  Mua đồ ăn, ăn ngoài (nhà không có nấu cơm)
                </TextButton>
              </ButtonFuction>
              <ButtonFuction color="#da2149">
                <TextButton color="#FFFFFF">
                  Có việc rất rất gấp cần có mặt ngay lập tức!
                </TextButton>
              </ButtonFuction>
              <ButtonFuction color="#d39716">
                <TextButton color="white">Yêu cầu A</TextButton>
              </ButtonFuction>
              <ButtonFuction color="#09c2fa">
                <TextButton color="white">Yêu cầu B</TextButton>
              </ButtonFuction>
              <ButtonFuction color="#fa09c6">
                <TextButton color="white">Yêu cầu C</TextButton>
              </ButtonFuction>
            </ButtonWrapper>
          </BodyFunctionWrapper>
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
    justifyContent: "flex-start",
    alignItems: "center",
  },
  bodyWrapper: {
    height: "50%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    width: "90%",
    height: "85%",
    backgroundColor: "#dadada",
    borderRadius: 10,
    marginBottom: 14,
    padding: 15,
  },
});

const BodyFunctionWrapper = styled(View)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
`;

const ButtonWrapper = styled(View)`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  gap: 2px;
  justify-content: space-between;
`;

const ButtonFuction = styled(TouchableOpacity)`
  background-color: ${(props) => props.color ?? props.colors};
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 48% 0 0;
  margin-bottom: 10px;
  height: 40%;
  border-radius: 10px;
  padding: 0 5px 0 5px;
`;

const TextButton = styled(Text)`
  color: ${(props) => props.color ?? props.color};
  text-align: center;
`;

const Heading = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  color: "black";
`;

export default FunctionScreen;
