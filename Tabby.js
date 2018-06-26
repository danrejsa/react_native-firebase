import {TabNavigator , TabBarBottom} from "react-navigation";
import React, { Component } from 'react';
//import tab1 from "./tabs/tab1";
//import tab2 from "./tabs/tab2";
import Added from "./Added";
import Added2 from "./Added2";
import Added3 from "./Added3";
import Ionicons from 'react-native-vector-icons/Ionicons';


var Tabby = TabNavigator({
    Stock: {screen:Added3},
    DailySales: {screen:Added},  
   Finished:{screen:Added2}
    
  },

  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Stock') {
          iconName = `ios-cart${focused ? '' : '-outline'}`;
        } else if (routeName === 'DailySales') {
          iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
        }
        else if (routeName === 'Finished') {
          iconName = `ios-close${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} backgroundColor={'blue'}/>;
      },
    }),
  
  
    tabBarOptions: {
      activeTintColor: 'tomato',
     // inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'top',
    backgroundColor:'blue',
    animationEnabled: true,
    swipeEnabled: true,
   
  }
);
  module.exports = Tabby;
  
  /*export default myTabs; tabBarPosition: "top",
  animationEnabled: true,
  tabBarOptions:{
    activeTintColor:'red',
  
  
  }*/