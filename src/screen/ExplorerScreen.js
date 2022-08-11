import React from 'react';
import { StyleSheet, Text,Image , View, ScrollView  } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { FlatGrid } from 'react-native-super-grid';
import ExploreCard from '../components/ExploreCard';

export default function ExplorerScreen(props) {
  const [items, setItems] = React.useState([
    { name: 'TURQUOISE', age: '25'},
    { name: 'EMERALD', age: '25' },
    { name: 'PETER RIVER', age: '25' },
    { name: 'AMETHYST', age: '25' },
    { name: 'WET ASPHALT', age: '25' },
    { name: 'GREEN SEA', age: '25' },
    { name: 'NEPHRITIS', age: '25' },
    { name: 'BELIZE HOLE', age: '25' },
    { name: 'AMETHYST', age: '25' },
    { name: 'WET ASPHALT', age: '25' },
    { name: 'GREEN SEA', age: '25' },
    { name: 'NEPHRITIS', age: '25' },
    { name: 'BELIZE HOLE', age: '25' },
  ]);
  return (
    <ScrollView  >
      <ScrollView style={styles.container}>
        <Text style={styles.explore}>Explore Results</Text>
        <FlatGrid
          itemDimension={160}
          fixed={true}
          data={items}
          style={styles.gridView}
          // staticDimension={300}
          // fixed
          spacing={10}
          renderItem={({ item }) => (
            <ExploreCard item={item} small='face' />
          )}
        />
      </ScrollView>
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
