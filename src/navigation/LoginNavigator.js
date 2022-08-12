import {
    createNativeStackNavigator
  } from '@react-navigation/native-stack'
import LoginScreen from '../screen/EditProfileScreen'
import UpgradeScreen from '../screen/UpgradeScreen'


const Stack = createNativeStackNavigator()
  
export function LoginNavigator() {
return (
    <Stack.Navigator>
      <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
      />
      <Stack.Screen
          name="UpgradeScreen"
          component={UpgradeScreen}
          options={{ headerShown: false }}
      />
    </Stack.Navigator>
)
  }
  