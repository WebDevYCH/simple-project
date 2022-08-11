import React from 'react';
import { StyleSheet, Text,TouchableOpacity , View, ScrollView  } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { FlatGrid } from 'react-native-super-grid';
import ExploreCard from '../components/ExploreCard';
import { theme } from '../core/theme'

export default function MatchesScreen(props) {
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
    <ScrollView  >
      <ScrollView style={styles.container}>
        <View style={styles.buttongroup}>
          <TouchableOpacity style={styles.buttonstyle} onPress={() => {}}> 
            <Text >Matches</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.Interestsstyle} onPress={() => {}}> 
            <Text >Interests</Text>
          </TouchableOpacity> 
        </View>
        <FlatGrid
          itemDimension={160}
          fixed={true}
          data={items}
          style={styles.gridView}
          // staticDimension={300}
          // fixed
          spacing={10}
          renderItem={({ item }) => (
            <ExploreCard item={item} small="remove" />
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
  buttongroup:{
    marginTop:70+getStatusBarHeight(),
    width:'85%',
    marginHorizontal:'auto',
    display:'flex',
    flexDirection:"row",
    justifyContent:'space-between'
  },
  buttonstyle:{
    width: '44%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: theme.colors.buttongreycolor,
    color: theme.colors.white,

    fontSize:15,
  },
  Interestsstyle:{
    width: '44%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: theme.colors.white,
    color:theme.colors.black,
    fontSize:15,
    borderColor: theme.colors.black,
    borderWidth:1,
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
