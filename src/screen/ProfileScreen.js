import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Dimensions, ScrollView,Image,Text } from 'react-native';
import FlatListSlider from '../components/FlatListSlider';
import Preview from '../components/Preview';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { View } from 'react-native-web';

export default function ProfileScreen({navigation}) {
  const data= [
    {
      image:
        'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
    {
      image:
        'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
      desc:
        'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
    {
      image:
        'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      desc:
        'Sample Description below the image for representation purpose only',
    },
    {
      image:
        'https://images.unsplash.com/photo-1568700942090-19dc36fab0c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      desc:
        'Sample Description below the image for representation purpose only',
    },
    {
      image:
        'https://images.unsplash.com/photo-1584271854089-9bb3e5168e32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
      desc:
        'Sample Description below the image for representation purpose only',
    },
  ];
  const screenWidth = Math.round(Dimensions.get('window').width);
  return (
    <ScrollView style={styles.container}>
      <FlatListSlider
        data={data}
        timer={2000}
        imageKey={'image'}
        local={false}
        width={screenWidth*0.8}
        separator={30}
        loop={true}
        autoscroll={false}
        currentIndexCallback={index => console.log('Index', index)}
        onPress={item => {}}
        indicator
        animation
        contentContainerStyle={styles.contentContainerStyle}
      />
      <View style={styles.navigator}>
        <View style={styles.smallcard}>
          <Image style={styles.face} source={require('../img/face.svg')}></Image>
          <Text style={styles.item}>Favorite</Text>
        </View>
        <View style={styles.smallcard}>
          <Image style={styles.message} source={require('../img/message.svg')}></Image>
          <Text style={styles.item}>Message</Text>
        </View>
      </View>
      <Text style={styles.login}>Name</Text>
      <Text style={styles.answer}>Quisaute Iiurereprehender</Text>
      <Text style={styles.login}>Looking for</Text>
      <Text style={styles.answer}>Professional Networking</Text>
      <Text style={styles.login}>Description</Text>
      <Text style={styles.answer}>Tu quoque, Brute, fili mi, nihil timor populi, nihil! Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Mercedem aut nummos unde unde extricat, amaras. </Text>
      <Text style={styles.login}>Gender</Text>
      <Text style={styles.answer}>Male</Text>
      <Text style={styles.login}>Age</Text>
      <Text style={styles.answer}>25</Text>
      <Text style={styles.login}>Zodiac Sign</Text>
      <Text style={styles.answer}>Gemini</Text>
      <Text style={styles.login}>City</Text>
      <Text style={styles.answer}>Chicago</Text>
      <Text style={styles.login}>Education</Text>
      <Text style={styles.answer}>Bachelor’s Degree</Text>
      <Text style={styles.login}>Profession</Text>
      <Text style={styles.answer}>Web Developer</Text>
      <Text style={styles.login}>Annual Income</Text>
      <Text style={styles.answer}>$100,000</Text>
      <Text style={styles.login}>Nationality</Text>
      <Text style={styles.answer}>American</Text>
      <Text style={styles.login}>Ethnicity</Text>
      <Text style={styles.answer}>Mexican</Text>
      <Text style={styles.login}>Height</Text>
      <Text style={styles.answer}>5’8”</Text>
      <Text style={styles.login}>Religion</Text>
      <Text style={styles.answer}>Christian</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  login:{
    width:'87%',
    textAlign:'left',
    marginTop:20,
    fontSize:12,
    fontWeight:700,
    justifyContent:'flex-start'
  },
  answer:{
    width:'87%',
    textAlign:'left',
    marginTop:20,
    fontSize:12,
    fontWeight:400,
    justifyContent:'flex-start',
  },
  face:{
    width:24,
    height:24,
  },
  message:{
    width:24,
    height:19,
  },
  container: {
    width:'100%',
    paddingHorizontal:'10%',
    paddingTop:100+getStatusBarHeight(),
    height: 20,
    paddingBottom:100,
  },
  smallcard:{
    display:'flex',
    flexDirection:"col",
    alignItems:"center",
  },
  navigator:{
    paddingTop:50,
    display:'flex',
    flexDirection:"row",
    justifyContent:"space-between",
    width:"50%",
    margin:'auto'
  },
  item: {
    padding: 10,
    fontSize: 12,
    height: 44,
  },
  separator: {
    height: 20,
  },
  contentContainerStyle: {
    borderRadius:5,
  },
});
