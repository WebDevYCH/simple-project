import React from 'react'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { StyleSheet, Text,Image , View,ScrollView  } from 'react-native';
import { theme } from '../core/theme';

export default function InboxCard({item}) {
  return (
    <View style={styles.container}>
      <Image style={styles.userphoto} source={require('../img/userphoto.svg')} />
      <Text style={styles.item}>{item.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    display:'flex',
    flexDirection:'row',
    alignItems:'flex-start',
    borderBottomColor: theme.colors.bordercolor, 
    borderBottomWidth:2,
    paddingBottom:10,
  },
  userphoto:{
    borderRadius: 5,
    width:80,
    height:80,
  },
  item: {
    padding: 10,
    fontSize: 12,
    height: 44,
  },
})