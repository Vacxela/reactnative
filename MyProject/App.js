import { StyleSheet, View, Text, Button, StatusBar, Pressable, Image, ScrollView, Platform } from 'react-native';
import { SectionGrid } from 'react-native-super-grid';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TopTabScreen from './src/MyDefaults/screens/TopTabScreen';

export default function Example() {
  
  const Stack = createNativeStackNavigator();

  return (
	<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Field Data Capture' }}
        />
        <Stack.Screen
          name="ProjectList"
          component={TopTabScreen}
          options={{ title: 'My Defaults' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}

const HomeScreen = ({ navigation }) => {
  const [items, setItems] = React.useState([
    { name: 'My Defaults', code: '#1abc9c' },
    { name: 'Employee Time', code: '#2ecc71' },
    { name: 'Equipment Time', code: '#3498db' },
    { name: 'Good Receipts', code: '#9b59b6' },
    { name: 'Production', code: '#34495e' },
    { name: 'Productivity Report', code: '#16a085' },
    { name: 'Daily Overview', code: '#27ae60' },
    { name: 'Employee Time', code: '#2980b9' },
    { name: 'Equipment Time', code: '#8e44ad' },
  ]);
  
  return (
	<View style = {{flex: 1}}>
		<SectionGrid
		  itemDimension={150}
		  sections={[
			{
			  title: 'Project Foreman',
			  data: items.slice(0, 6),
			},
			{
			  title: 'Project Manager',
			  data: items.slice(6, 9),
			}
		  ]}
		  spacing={12}
		  style={styles.gridView}
		  renderItem={({ item, section, index }) => (
			  <Pressable onPress={() => navigation.navigate('ProjectList', { name: 'Jane' })}>
				<View style={[styles.itemContainer, { backgroundColor: item.code }]}>
					<MaterialCommunityIcons name="clipboard-list-outline" size={64}/>
					<Text style={styles.itemName}>{item.name}</Text>
				</View>
			  </Pressable>
		  )}
		  renderSectionHeader={({ section }) => (
			<Text style={styles.sectionHeader}>{section.title}</Text>
		  )}
		>
		</SectionGrid>
		<View style = {{alignItems: 'center', justifyContent: 'center'}}>
			<Image source={require('./images/illumiti-logo.png')} 
				style={styles.containerImage}
			/>
		</View>
	 </View>
  );
};

const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 2,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
	shadowColor: "black",
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 12
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    backgroundColor: '#636e72',
    color: 'white',
    padding: 10,
  },
  containerImage: {
	width: 120,
	height: 40,
	marginTop: 5,
  ...Platform.select({
    ios:{
        marginBottom: 20
      }
    })
  },
  fixedView : {
	  position: 'absolute',
	  left: 0,
	  bottom: 0,
	  flexDirection: 'row',
	  justifyContent: 'flex-end',
  },
});