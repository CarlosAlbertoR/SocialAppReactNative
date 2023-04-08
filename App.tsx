import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "./src/pages/Onboarding";
import LoginScreen from "./src/pages/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppStack = createStackNavigator();

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(false);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value === null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
        return;
      }
      setIsFirstLaunch(false);
    });
  }, []);

  if (isFirstLaunch) {
    return (
      <NavigationContainer>
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
          <AppStack.Screen name="Onboarding" component={Onboarding} />
          <AppStack.Screen name="Login" component={LoginScreen} />
        </AppStack.Navigator>
      </NavigationContainer>
    );
  }
  return <LoginScreen></LoginScreen>;
}
