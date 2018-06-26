'use strict';
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableHighlight,
  Alert
} from 'react-native';

import SettingsList from 'react-native-settings-list';


class Settings extends Component {
 
  constructor(props){
    super(props);
}



  render() {
    return (
      <View style={{backgroundColor:'#f6f6f6',flex:1}}>
       
        <View style={{backgroundColor:'#f6f6f6',flex:1}}>
          <SettingsList borderColor='#d6d5d9' defaultItemSize={50}>
            <SettingsList.Item
              hasNavArrow={false}
              title='Wireless & networks'
              titleStyle={{color:'#009688', marginBottom:10, fontWeight:'500'}}
              itemWidth={50}
              borderHide={'Both'}
            />
            <SettingsList.Item
              icon={
                <View style={styles.imageStyle}>
                  <Image style={{alignSelf:'center',height:22, width:22}}  source={require('../Icons/data.png')}/>
                </View>
              }
              hasNavArrow={false}
              itemWidth={70}
              titleStyle={{color:'black', fontSize: 16}}
              title='Data usage'
              onPress={() => Alert.alert('Under Construction. Thanks!')}
            />
            <SettingsList.Item
              icon={
                <View style={styles.imageStyle}>
                  <Image style={{alignSelf:'center',height:4, width:18}}  source={require('../Icons/more.png')}/>
                </View>
              }
              title='More'
              itemWidth={70}
              titleStyle={{color:'black', fontSize: 16}}
              hasNavArrow={false}
              onPress={() => Alert.alert('Under Construction. Thanks!')}
            />
            <SettingsList.Header headerStyle={{marginTop:-5}}/>
            <SettingsList.Item
              hasNavArrow={false}
              title='Device'
              titleStyle={{color:'#009688', marginBottom:10, fontWeight:'bold'}}
              itemWidth={70}
              borderHide={'Both'}
            />
            <SettingsList.Item
              icon={
                <View style={styles.imageStyle}>
                  <Image style={{alignSelf:'center',height:22, width:22}}  source={require('../Icons/display2.png')}/>
                </View>
              }
              title='Display'
              itemWidth={70}
              titleStyle={{color:'black', fontSize: 16}}
              hasNavArrow={false}
              onPress={() => Alert.alert('Under Construction. Thanks!')}
            />
            <SettingsList.Item
              icon={
                <View style={styles.imageStyle}>
                  <Image style={{alignSelf:'center',height:20, width:18}}  source={require('../Icons/sound.png')}/>
                </View>
              }
              title='Sound & notification'
              itemWidth={70}
              titleStyle={{color:'black', fontSize: 16}}
              hasNavArrow={false}
              onPress={() => Alert.alert('Under Construction. Thanks!')}
            />
            <SettingsList.Item
              icon={
                <View style={styles.imageStyle}>
                  <Image style={{alignSelf:'center',height:22, width:14}}  source={require('../Icons/apps.png')}/>
                </View>
              }
              title='Apps'
              itemWidth={70}
              titleStyle={{color:'black', fontSize: 16}}
              hasNavArrow={false}
              onPress={() => Alert.alert('Under Construction. Thanks!')}
            />
            <SettingsList.Item
              icon={
                <View style={styles.imageStyle}>
                  <Image style={{alignSelf:'center',height:14, width:20}}  source={require('../Icons/storage.png')}/>
                </View>
              }
              title='Storage & USB'
              itemWidth={70}
              titleStyle={{color:'black', fontSize: 16}}
              hasNavArrow={false}
              onPress={() => Alert.alert('Under Construction. Thanks!')}
            />
            <SettingsList.Item
              icon={
                <View style={styles.imageStyle}>
                  <Image style={{alignSelf:'center',height:22, width:14}}  source={require('../Icons/battery.png')}/>
                </View>
              }
              title='Battery'
              itemWidth={70}
              titleStyle={{color:'black', fontSize: 16}}
              hasNavArrow={false}
              onPress={() => Alert.alert('Under Construction. Thanks!')}
            />
            <SettingsList.Item
              icon={
                <View style={styles.imageStyle}>
                  <Image style={{alignSelf:'center',height:18, width:20}}  source={require('../Icons/memory.png')}/>
                </View>
              }
              title='Memory'
              itemWidth={70}
              titleStyle={{color:'black', fontSize: 16}}
              hasNavArrow={false}
              onPress={() => Alert.alert('Under Construction. Thanks!')}
            />
            <SettingsList.Header headerStyle={{marginTop: -5}}/>
          </SettingsList>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle:{
    marginLeft:15,
    marginRight:20,
    alignSelf:'center',
    width:20,
    height:24,
    justifyContent:'center'
  }
});

module.exports = Settings;
