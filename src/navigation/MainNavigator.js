import {
    createNativeStackNavigator
  } from '@react-navigation/native-stack'
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OtherScreen from '../screen/OtherScreen'
import ExplorerScreen from '../screen/ExplorerScreen'
import MatchesScreen from '../screen/MatchesScreen'
import InboxScreen from '../screen/InboxScreen'
import ProfileScreen from '../screen/ProfileScreen'
import MainHeader from '../components/MainHeader';
import EditProfileScreen from '../screen/EditProfileScreen'
import Svg, { Path } from "react-native-svg"
import { theme } from '../core/theme';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
         <Stack.Screen
            name="EditProfileScreen"
            component={EditProfileScreen}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
    )
}
const Tab = createBottomTabNavigator();
function MaineScreen() {
    const [filter,setFilter]=useState('filter');
    const [pushName,setPushName]=useState('');
    return (
        <Tab.Navigator
            screenListeners={{
                state: (e) => {
                   switch(e.data.state.index){
                     case 0:{
                                setFilter('filter');
                                setPushName('');
                                break;
                            }
                    case 1:{
                                setFilter('');
                                setPushName('');
                                break;
                            }
                    case 2:{
                                setFilter(''); 
                                setPushName('');
                                break;
                            }
                    default:{
                                setFilter('');
                                setPushName('EditProfileScreen');
                                break;
                            }
                   }
                },
            }}
            screenOptions={{
                // tabBarShowLabel:false,
                tabBarLabelPosition:'below-icon',
                header: ({ navigation, route, options }) => {
                    return  <MainHeader text='LOGO' filter={filter} onUpgrade={()=>{navigation.navigate(pushName)}}/>;
                  },
                tabBarActiveTintColor: theme.colors.active,
                tabBarInactiveTintColor:theme.colors.inactive,
            
            }}
        >
            <Tab.Screen 
                name="Explore" 
                component={ExplorerScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Svg
                            width={30}
                            height={17}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color={color}
                            size={size}
                        >
                            <Path
                            d="M29.819 7.854C26.994 3.169 21.403 0 15 0 8.597 0 3.004 3.172.181 7.854.062 8.054 0 8.276 0 8.5c0 .225.062.446.181.646C3.006 13.831 8.597 17 15 17c6.403 0 11.996-3.172 14.819-7.854.119-.2.181-.422.181-.646 0-.225-.062-.446-.181-.646ZM15 14.875c-1.483 0-2.933-.374-4.167-1.074-1.233-.7-2.194-1.697-2.762-2.861a5.492 5.492 0 0 1-.427-3.684c.29-1.236 1.004-2.372 2.053-3.264 1.049-.891 2.385-1.499 3.84-1.745a8.736 8.736 0 0 1 4.333.363c1.37.483 2.542 1.3 3.366 2.348C22.06 6.007 22.5 7.24 22.5 8.5c0 .837-.193 1.666-.57 2.44a6.413 6.413 0 0 1-1.626 2.069 7.7 7.7 0 0 1-2.433 1.382 8.66 8.66 0 0 1-2.871.484ZM15 4.25c-.446.005-.89.062-1.318.168.353.408.522.91.478 1.415-.045.505-.302.98-.723 1.338-.422.358-.98.576-1.574.615a2.817 2.817 0 0 1-1.666-.406 3.642 3.642 0 0 0 .142 2.594c.365.83 1.027 1.543 1.894 2.037a5.65 5.65 0 0 0 2.936.717 5.562 5.562 0 0 0 2.878-.873c.828-.54 1.436-1.286 1.739-2.135a3.638 3.638 0 0 0-.052-2.597c-.336-.84-.974-1.568-1.823-2.084A5.612 5.612 0 0 0 15 4.25Z"
                            fill={color}
                            />
                        </Svg>
                    ),
                }}
            />
            <Tab.Screen 
                name="Matches" 
                component={MatchesScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Svg
                            width={25}
                            height={25}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <Path
                            d="M12.11 0C5.42 0 0 5.42 0 12.11c0 6.689 5.42 12.109 12.11 12.109 6.689 0 12.109-5.42 12.109-12.11C24.219 5.42 18.799 0 12.109 0ZM4.413 8.574c.327-.86 1.304-1.303 2.192-1.07l.347.094.098-.347c.244-.884 1.113-1.509 2.026-1.362a1.727 1.727 0 0 1 1.406 2.173l-.947 3.413a.42.42 0 0 1-.513.293l-3.427-.89a1.733 1.733 0 0 1-1.182-2.304Zm7.695 12.13c-2.959 0-6.567-1.871-7.021-4.556a.783.783 0 0 1 1.01-.875c1.475.474 3.668.743 6.011.743 2.344 0 4.536-.269 6.011-.743a.785.785 0 0 1 1.01.875c-.453 2.685-4.062 4.555-7.02 4.555Zm6.514-9.83-3.428.889a.424.424 0 0 1-.512-.293l-.948-3.413a1.727 1.727 0 0 1 1.407-2.173c.908-.147 1.777.478 2.026 1.362l.098.347.346-.093c.889-.23 1.866.21 2.193 1.07a1.73 1.73 0 0 1-1.182 2.304Z"
                            fill={color}
                            />
                        </Svg>
                    ),
                }}
            />
            <Tab.Screen 
                name="Inbox" 
                component={InboxScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Svg
                            width={25}
                            height={19}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <Path
                            d="M24.526 6.191a.294.294 0 0 1 .474.23v9.985a2.344 2.344 0 0 1-2.344 2.344H2.344A2.344 2.344 0 0 1 0 16.406v-9.98c0-.244.278-.381.474-.23 1.093.85 2.544 1.929 7.524 5.547 1.03.752 2.769 2.334 4.502 2.324 1.743.015 3.516-1.601 4.507-2.324 4.98-3.618 6.426-4.702 7.52-5.552ZM12.5 12.5c1.133.02 2.764-1.426 3.584-2.021 6.48-4.703 6.973-5.113 8.467-6.285.283-.22.449-.561.449-.923v-.927A2.344 2.344 0 0 0 22.656 0H2.344A2.344 2.344 0 0 0 0 2.344v.927c0 .362.166.699.45.923 1.493 1.167 1.987 1.582 8.466 6.285.82.595 2.451 2.04 3.584 2.021Z"
                            fill={color}
                            />
                        </Svg>
                    ),
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Svg
                            width={25}
                            height={25}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <Path
                            d="M12.5 14.063a7.033 7.033 0 0 0 7.031-7.032A7.033 7.033 0 0 0 12.5 0a7.033 7.033 0 0 0-7.031 7.031 7.033 7.033 0 0 0 7.031 7.032Zm6.25 1.562h-2.69a8.51 8.51 0 0 1-7.12 0H6.25A6.25 6.25 0 0 0 0 21.875v.781A2.344 2.344 0 0 0 2.344 25h20.312A2.344 2.344 0 0 0 25 22.656v-.781a6.25 6.25 0 0 0-6.25-6.25Z"
                            fill={color}
                            />
                        </Svg>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}