import {
    createNativeStackNavigator
  } from '@react-navigation/native-stack'
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OtherScreen from '../screen/OtherScreen'
import ExplorerScreen from '../screen/ExplorerScreen'
import MatchesScreen from '../screen/MatchesScreen'
import InboxScreen from '../screen/InboxScreen'
import ProfileScreen from '../screen/ProfileScreen'
import Header from '../components/Header';

import { theme } from '../core/theme';

const Stack = createNativeStackNavigator()
  
export function MainNavigator() {
return (
    <Stack.Navigator>
        <Stack.Screen
            name="MainScreen"
            component={MaineScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="OtherScreen"
            component={OtherScreen}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
    )
}
const Tab = createBottomTabNavigator();
function MaineScreen() {
    return (
        <Tab.Navigator
            screenOptions={{
                // tabBarShowLabel:false,
                tabBarLabelPosition:'below-icon',
                header: ({ navigation, route, options }) => {
                    return <Header>LOGO</Header>;
                  },
                tabBarActiveTintColor: theme.colors.active,
                tabBarInactiveTintColor:theme.colors.inactive,
            }}
        >
            <Tab.Screen 
                name="Explorer" 
                component={ExplorerScreen}
                options={{
                    // tabBarIcon: ({ color, size }) => (
                    //     <MaterialCommunityIcons name="home" color={color} size={size} />
                    // ),
                }}
            />
            <Tab.Screen 
                name="Matches" 
                component={MatchesScreen} 
            />
            <Tab.Screen 
                name="Inbox" 
                component={InboxScreen} 
            />
            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen} 
            />
        </Tab.Navigator>
    );
}