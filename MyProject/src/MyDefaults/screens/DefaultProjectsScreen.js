import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, Pressable} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { CheckBox } from 'react-native-elements';

const DefaultProjectsScreen= ({ navigation, route }) => {
    const [items, setItems] = React.useState([
        { name: 'Project001', id: '0000000001', color: '#8899FF' },
        { name: 'Project002', id: '0000000002', color: '#7799FE' },
        { name: 'Project003', id: '0000000003', color: '#6699FD' },
        { name: 'Project004', id: '0000000004', color: '#5599FC' },
        { name: 'Project005', id: '0000000005', color: '#4499FB' },
        { name: 'Project006', id: '0000000001', color: '#3399FA' },
        { name: 'Project007', id: '0000000002', color: '#2299F9' },
        { name: 'Project008', id: '0000000003', color: '#1199F9' },
        { name: 'Project009', id: '0000000004', color: '#0099F7' },
        { name: 'Project010', id: '0000000005', color: '#0088F6' },
        ]);

    const [isSelected, setSelected] = useState(false);

    return (
        <View style = {{flex: 1}}>
            <View style = {{flex: 11}}>
                <FlatGrid
                    itemDimension={300}
                    data={items}
                    renderItem={({ item }) => (
                        <View style={[styles.itemContainer, { backgroundColor: item.color }, styles.row]}>
                            <View style={styles.entityText}>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text style={styles.itemId}>{item.id}</Text>
                            </View>
                            <View style={styles.entityCheckBox}>
                                <CheckBox
                                    title='Click Here'
                                    checkedIcon='check-square-o'
                                    uncheckedIcon='square-o'
                                    checkedColor='white'
                                    checked={isSelected}
                                    onPress={() => setSelected(!isSelected)}
                                    containerStyle={styles.backgroundCheckBox}
                                />
                            </View>
                        </View>
                    )}
                />
            </View>

            <View style={[styles.row, {flex: 1}]}>
                <Pressable
                    onPress={() => Alert.alert('Simple Button pressed')}
                    style={styles.containerButton}
                > 
                    <Text style={styles.buttonTitle}>+Add</Text> 
                </Pressable>
                <Pressable
                    onPress={() => Alert.alert('Simple Button pressed')}
                    style={styles.containerButton}
                >
                    <Text style={styles.buttonTitle}>-Remove</Text> 
                </Pressable>
                <Pressable
                    onPress={() => Alert.alert('Simple Button pressed')}
                    style={styles.containerButton}
                >
                    <Text style={styles.buttonTitle}>Copy</Text> 
                </Pressable>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
      height: 100,
      shadowColor: "black",
    },
    buttonTitle: {
        fontSize: 16,
        color: '#555',
        fontWeight: '600',
      },
    itemName: {
      fontSize: 16,
      color: '#fff',
      fontWeight: '600',
      marginBottom: 12
    },
    itemId: {
      fontSize: 12,
      color: '#fff',
      fontWeight: '300',
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
    containerButton: {
      flex: 2,
      elevation: 2,
      backgroundColor: '#f0f0f0',
      shadowColor: "black",
      borderRadius: 8,
      margin: 4,
      padding: 12,
      alignItems: 'center',
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
    row: {
        flexDirection: "row",
    },
    column: {
        flexDirection: "column",
    },
    entityText: {
        flex: 5
    },
    entityCheckBox: {
        flex: 1
    },
    backgroundCheckBox: {

        backgroundColor: 'rgba(255,255,255,0)',
        borderColor:  'rgba(0,0,0,0)',
    }
  });

export default DefaultProjectsScreen;