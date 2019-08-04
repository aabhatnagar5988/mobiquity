import React, { useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import { NavigationProp } from "react-navigation";
import RNSplashScreen from "react-native-splash-screen";
import logo from "../../../assets/logo.png";
import { Screens } from "../../Constants/NavConstants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

type P = {
  navigation: NavigationProp
};

const navigateToHome = navigation => {
  navigation.navigate(Screens.AppFlow);
};

const SplashScreen = ({ navigation }: P) => {
  useEffect(() => {
    setTimeout(() => {
      RNSplashScreen.hide();
      navigateToHome(navigation);
    }, 2000);
  });
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 200, height: 200 }} />
    </View>
  );
};

export default SplashScreen;
