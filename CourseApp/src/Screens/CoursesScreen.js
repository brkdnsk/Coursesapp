import { View, Text ,FlatList, StyleSheet} from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack= createNativeStackNavigator();

export default function HomeScreen() {
  
    const courses=[
        {name:'Angular',id:1},
        {name:'React JS',id:2},
        {name:'C#',id:3},
        {name:'C Programlama',id:4},
        {name:'Bootstrap',id:5},
    ];
  
  
    return (
    <FlatList
    data={courses}
    keyExtractor={(item)=>item.id}
    renderItem={({item})=>{
        return <Text style={styles.content}>{item.name}</Text>;
    }}
    />
  );
}

const styles = StyleSheet.create({
    content:{
        fontSize:20,
        backgroundColor:'yellow',
        marginVertical:10,
        padding:20,
    }
});