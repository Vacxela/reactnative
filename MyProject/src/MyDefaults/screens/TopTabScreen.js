import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DefaultProjectsScreen from './DefaultProjectsScreen';

const Tab = createMaterialTopTabNavigator();

const TopTabScreen= ({ navigation, route }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Projects" component={DefaultProjectsScreen} />
      <Tab.Screen name="Crew" component={DefaultProjectsScreen} />
      <Tab.Screen name="Equipment" component={DefaultProjectsScreen} />
      <Tab.Screen name="Dates" component={DefaultProjectsScreen} />
    </Tab.Navigator>
  );
};

export default TopTabScreen;