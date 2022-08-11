import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import FlatListSlider from '../components/FlatListSlider';
import Preview from '../components/Preview';
import { getStatusBarHeight } from 'react-native-status-bar-height';

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
        width={screenWidth}
        separator={0}
        loop={true}
        autoscroll={false}
        currentIndexCallback={index => console.log('Index', index)}
        onPress={item => {}}
        indicator
        animation
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    paddingTop:70+getStatusBarHeight(),
    height: 20,
  },
  separator: {
    height: 20,
  },
  contentStyle: {
    paddingHorizontal: 16,
  },
});
