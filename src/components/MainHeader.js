import React from 'react'
import { StyleSheet,Image, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import Header from './Header'
import { View } from 'react-native-web'

export default function MainHeader(props) {
  return <View style={styles.container}>
     <Header>{props.text}</Header>
     <View style={styles.button}>
        <TouchableOpacity style={styles.buttonstyle} onPress={() => {}}> 
          <Text >Upgrade</Text>
        </TouchableOpacity> 
        <TouchableOpacity onPress={() => {}}> 
          {props.filter?<Image style={styles.filter} source={require('../img/filter.svg')}/>:<View></View>}
        </TouchableOpacity> 
     </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    zIndex:20,
  },
  button:{
    zIndex:11,
    position:'fixed',
    width:'85%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:40,
    alignItems:'center',
    marginLeft:'7.5%'
  },
  buttonstyle:{
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
    backgroundColor: theme.colors.greybackgroundcolor,
    color:theme.colors.white,
    fontSize:15,
  },
  filter:{
    width:18,
    height:18,
  }
})