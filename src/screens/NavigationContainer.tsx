import { NavigationContainer as RNNavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";

const Stack = createNativeStackNavigator();

export default function NavigationContainer() {
  return (
    <RNNavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </RNNavigationContainer>
  );
}
