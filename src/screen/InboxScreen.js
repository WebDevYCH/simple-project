import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import InboxCard from '../components/InboxCard';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { FlatGrid } from 'react-native-super-grid';

export default function InboxScreen({navigation}) {
  const [items, setItems] = React.useState([
    { name: 'AMETHYST', age: '25' },
    { name: 'WET ASPHALT', age: '25' },
    { name: 'GREEN SEA', age: '25' },
    { name: 'NEPHRITIS', age: '25' },
    { name: 'BELIZE HOLE', age: '25' },
    { name: 'TURQUOISE', age: '25'},
    { name: 'EMERALD', age: '25' },
    { name: 'PETER RIVER', age: '25' },
    { name: 'AMETHYST', age: '25' },
    { name: 'WET ASPHALT', age: '25' },
    { name: 'GREEN SEA', age: '25' },
    { name: 'NEPHRITIS', age: '25' },
    { name: 'BELIZE HOLE', age: '25' },
   
  ]);
  return (
    <ScrollView style={styles.container}>
        <Text style={styles.explore}>Inbox</Text>
        <FlatGrid
          itemDimension={1000}
          data={items}
          renderItem={({ item }) => (
            <InboxCard item={item}/>
          )}
        />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    paddingTop:20+getStatusBarHeight(),
  },
  explore:{
    width:'94%',
    textAlign:'left',
    fontSize:12,
    fontWeight:700,
    marginTop:70 + getStatusBarHeight(),
    justifyContent:'flex-start',
    marginHorizontal:'auto',
    marginBottom:20,
  }
});
