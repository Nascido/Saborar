
import React, { useEffect } from 'react';
import { registerRootComponent } from 'expo';
import { SplashLoader } from './pages/SplashLoader';
import { Text, View } from "react-native";
import { appData } from "./storage/appData";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const foodHallData = appData.food_hall;

  useEffect(() => {
    const prepare = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      await SplashScreen.hideAsync();
    };

    prepare();
  }, []);

  return (
    <SplashLoader>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>{foodHallData.name}</Text>
      </View>
    </SplashLoader>
  );
}

registerRootComponent(Index);
