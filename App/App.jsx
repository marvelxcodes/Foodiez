import { NavigationContainer } from "@react-navigation/native";
import { TailwindProvider } from "tailwindcss-react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from './pages/Home'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
<TailwindProvider>
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
</TailwindProvider>
)}
