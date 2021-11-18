import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const ProjectList= ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

export default ProjectList;