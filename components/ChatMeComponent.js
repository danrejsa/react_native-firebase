import React, {Component} from 'react';

import {
    Text,View,Image, TouchableHighlight
} from 'react-native';

import {About} from '../screenNames';
import HeaderChat from './HeaderChat';
import Added4 from '../Added4';
import AddButton from '../app/AddButton/AddButton';
const styles = require('../app/style');

const backgroundColor = '#0067a7';
export default class ChatMeComponent extends Component{
    static navigationOptions = ({ navigation}) =>{
        let drawerLabel = 'ChatMe';
   let drawerIcon = () => (
            <Image 
            source={require('../Icons/chat.png')}
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
      <HeaderChat {...this.props}/>
      <TouchableHighlight
        style={styles.action5}
      underlayColor="#24ce84"
     
      >        

        <Text style={styles.actionText}>Welcome to ChatMe........</Text> 
       </TouchableHighlight>
       <Added4/>
           
        </View>
        );
        }
    }

