import React, {Component} from 'react';

import {
    Text,View,Image, TouchableHighlight
} from 'react-native';

import {About} from '../screenNames';
import HeaderSettings from './HeaderSettings';
import Settings from './Settings';

const backgroundColor = '#0067a7';
export default class SettingsComponent extends Component{
    static navigationOptions = ({ navigation}) =>{
        let drawerLabel = 'Settings';
        let drawerIcon = () => (
            <Image 
           source={require('../Icons/set.png')}
           style={{width: 20, height: 20, tintColor: backgroundColor}}
            />


        );
      
         return {drawerLabel, drawerIcon};
    }

    render () {
        return(<View style={{
            flex: 1,
            flexDirection: 'column',

        }}>
      <HeaderSettings {...this.props}/>
      <Settings/>
       
        </View>
        );
        }
    }

/* <View style={{
            flex: 1,
            backgroundColor: 'green',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
        <Text style={{ fontWeight: 'bold',
        fontSize: 22,
        color: 'white'}}>
        This is Settings Screen
        </Text>

       
            </View>*/




















           