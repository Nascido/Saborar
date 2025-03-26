import { Text, View } from "react-native";
import { appData } from "./storage/appData";

export default function Index() {
  const  foodHallData = appData.food_hall
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{foodHallData.name}</Text>
    </View>
  );
}
