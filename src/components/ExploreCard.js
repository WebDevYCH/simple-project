import React from 'react'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { StyleSheet, Text,Image , View,ScrollView  } from 'react-native';
import { theme } from '../core/theme';

export default function ExploreCard({item,small}) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.images}>
          <Image style={styles.userphoto} source={require('../img/userphoto.svg')}>
          </Image>
          <Image style={styles.face} source={require('../img/'+small+'.svg')}></Image>
      </View>
      
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemCode}><Text style={styles.age}>Age: </Text>{item.age}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'col',
    flexWrap: 'wrap',
    backgroundColor:theme.colors.white,
    justifyContent: 'flex-start',
    borderRadius: 5,
    height: 230,
  },
  userphoto:{
    borderRadius: 5,
    width:160,
    height:160,
  },
  images:{
    position:'relative',
    width:160,
    height:160,
  },
  face:{
    position:'absolute',
    width:24,
    height:24,
    bottom:10,
    right:10,
  },
  itemName: {
    paddingVertical:7,
    fontSize: 16,
    color: theme.colors.black,
    fontWeight: '700',
  },
  age: {
    fontSize: 14,
    color: theme.colors.black,
    fontWeight: '400',
  },
  itemCode: {
    fontWeight: '400',
    fontSize: 12,
    color: '#fff',color: theme.colors.greytextcolor,
  },
})