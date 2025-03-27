import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantDetails from "./pages/RestaurantDetails";
import RestaurantsList from "./pages/RestaurantsList";
import { RootStackParamList } from "./types/types"; // Se não tiver, crie esse arquivo

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RestaurantsList">
        <Stack.Screen name="RestaurantsList" component={RestaurantsList} />
        <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(Index);
