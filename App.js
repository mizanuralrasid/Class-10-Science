import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Link, NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screen/Home.js';
import Chapter01 from './Screen/Chapter01';
// import Chapter02 from './Screen/Chapter02';
// import Chapter03 from './Screen/Chapter03';
// import Chapter04 from './Screen/Chapter04';
// import Chapter05 from './Screen/Chapter05';
// import Chapter06 from './Screen/Chapter06';
// import Chapter07 from './Screen/Chapter07';
// import Chapter08 from './Screen/Chapter08';
// import Chapter09 from './Screen/Chapter09';
// import Chapter10 from './Screen/Chapter10';
// import Chapter11 from './Screen/Chapter11';
// import Chapter12 from './Screen/Chapter12';
// import Chapter13 from './Screen/Chapter13';
// import Chapter14 from './Screen/Chapter14';
// import Chapter15 from './Screen/Chapter15';
// import Chapter16 from './Screen/Chapter16';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle:{
        backgroundColor:'#2b4a99',
      }}}>
        <Stack.Screen name="Class 10 Math Solutiona Assamese" component={Home} options={{title:"Class 10 Math Solutiona Assamese"}}/>
        <Stack.Screen name="Chapter01" component={Chapter01} options={{title:"অধ্যায় - 1 বাস্তৱ সংখ্যা "}} />
        {/* <Stack.Screen name="Chapter02" component={Chapter02} options={{title:"এছিড, ক্ষৰক আৰু লৱণ"}} />
        <Stack.Screen name="Chapter03" component={Chapter03} options={{title:"ধাতু আৰু অধাতু"}} />
        <Stack.Screen name="Chapter04" component={Chapter04} options={{title:"কাৰ্বন আৰু ইয়াৰ যৌগ"}} />
        <Stack.Screen name="Chapter05" component={Chapter05} options={{title:"মৌলৰ পৰ্যাব্ৰীত্ত শ্ৰেণীবিভাজন"}} />
        <Stack.Screen name="Chapter06" component={Chapter06} options={{title:"জীবন প্ৰোক্ৰিয়া"}} />
        <Stack.Screen name="Chapter07" component={Chapter07} options={{title:"নিয়ন্ত্ৰন আৰু সমন্বয়"}} />
        <Stack.Screen name="Chapter08" component={Chapter08} options={{title:"জীবৈ কেনেকৈ বংশ্ববিস্তাৰ কৰে ?"}} />
        <Stack.Screen name="Chapter09" component={Chapter09} options={{title:"বংশগতি আৰু ক্ৰমবিকাশ"}} />
        <Stack.Screen name="Chapter10" component={Chapter10} options={{title:"পোহৰৰ প্ৰোতিফলন আৰু প্ৰোতিসৰন"}} />
        <Stack.Screen name="Chapter11" component={Chapter11} options={{title:"মানুহৰ চকু আৰু বাৰেবৰনীয়া প্ৰীথিৱীন"}} />
        <Stack.Screen name="Chapter12" component={Chapter12} options={{title:"বিদ্যুত"}} />
        <Stack.Screen name="Chapter13" component={Chapter13} options={{title:"বিদ্যুত- প্ৰবাহৰ চুম্বকীয় ক্ৰিয়া"}} />
        <Stack.Screen name="Chapter14" component={Chapter14} options={{title:"শক্তীৰ উৎসমূহ"}} />
        <Stack.Screen name="Chapter15" component={Chapter15} options={{title:"আমাৰ পৰিবেশ"}} />
        <Stack.Screen name="Chapter16" component={Chapter16} options={{title:"প্ৰাকৃতিক সম্পদৰ ব্যৱস্থাপনা"}} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
navbar:{
  textAlign:'center',
  backgroundColor:'#2b4a99',
}
});