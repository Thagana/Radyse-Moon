import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

/** Screen */
import SafeStackScreen from './SaveStack/SaveStack';
import HomeStack from './HomeStack/HomeStack';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={HomeStack}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({color}: {color: string}) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SafeStackScreen}
        options={{
          tabBarLabel: 'Saved',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="file-cabinet"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}: {color: string}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabScreen;
