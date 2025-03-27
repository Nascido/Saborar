import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  RestaurantsList: undefined;
  RestaurantDetails: { restaurant: Restaurant };
};

export type Restaurant = {
  name: string;
  logo: string;
  description: string;
  phone: string;
  whatsapp: string;
  social_media: {
    instagram: string;
    facebook: string;
  };
  email: string;
  delivery_link: string;
  menu_link: string;
  menu: {
    name: string;
    image: string;
    description: string;
    quantity: string;
    price: number;
  }[];
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export type RestaurantDetailsRouteProp = RouteProp<RootStackParamList, "RestaurantDetails">;

  