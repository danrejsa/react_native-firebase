import { AppRegistry } from 'react-native';
//import App from './App';
import { DrawerNavigator, SafeAreaView, DrawerItems} from 'react-navigation';
import {Dimensions,  ScrollView , Image} from 'react-native';
import React, { Component } from 'react';
//import Splash from './components/Splash';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import SettingsComponent from './components/SettingsComponent';
import ContactComponent from './components/ContactComponent';
import ChatMeComponent from './components/ChatMeComponent';

import { Home, About, Settings, Contact, ChatMe} from './screenNames';

var {height, width} = Dimensions.get('window');


const CustomDrawerContentComponent = (props) => (
    <ScrollView>
      <Image style={{flex: 1 ,  top : 10 , height:150 , width : 270}}source={require('./Icons/dare2.jpg')}/>
      <SafeAreaView style={{flex: 1 , backgroundColor : 'transparent'}} forceInset={{ top: 'always', horizontal: 'never' }}>
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  );


let routeConfigs = {
    Home:{
        path: '/',
        screen: HomeComponent,
    },
    About: {
        path: '/About',
        screen: AboutComponent,
    },
    Settings: {       
        screen: SettingsComponent,
    },
    Contact: {        
        screen: ContactComponent,
    },
    ChatMe: {        
        screen: ChatMeComponent,
    },

};
let drawerNavigatorConfig ={
initialRouteName: Home,
//drawerWidth: width / 2,
drawerWidth:270,
darwerPosition: 'left',
drawerOpenRoute: 'DrawerOpen',
drawerCloseRoute: 'DrawerClose',
drawerToggleRoute: 'DrawerToggle',
drawerBackgoundColor:'orange',
contentComponent: CustomDrawerContentComponent,
contentOptions: {
    activeTintColor: 'red',
    activeBackgroundColor : 'transparent',

},
order:[Home, About, Contact, Settings, ChatMe]
};

const App= DrawerNavigator(routeConfigs, drawerNavigatorConfig);

//AppRegistry.registerComponent('nav', () =>Splash); height :Dimensions.get('window').height, position : 'absolute' , 
module.exports = App;
