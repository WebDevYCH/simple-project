import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export default function Header(props) {
  return <Text style={styles.header} {...props} />
}

const styles = StyleSheet.create({
  header: {
    position:'fixed',
    width:'100%',
    zIndex:10,
    flexDirection:'row',
    paddingBottom:10,
    top:0,
    paddingTop: 30 + getStatusBarHeight(),
    fontSize: 32,
    color: theme.colors.black,
    fontWeight: 'bold',
    backgroundColor:theme.colors.primary,
    textAlign:'center',
  },
  background:{
    
  }
})