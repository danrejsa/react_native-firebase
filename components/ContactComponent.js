import React, {Component} from 'react';

import {
    Text,View,Image, TouchableHighlight,Button,Linking
} from 'react-native';
//import { Constants } from 'expo';
import {About} from '../screenNames';
import HeaderContact from './HeaderContact';
const styles = require('../app/style');

const backgroundColor = '#0067a7';
export default class ContactComponent extends Component{
    static navigationOptions = ({ navigation}) =>{
        let drawerLabel = 'Contact';
   let drawerIcon = () => (
            <Image 
            source={require('../Icons/phone.png')}
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
      <HeaderContact {...this.props}/>
        <View style={{
            flex: 1,
            backgroundColor: 'purple',
            alignItems: 'center',
            justifyContent: 'center',
        }}>    




        <TouchableHighlight
        style={styles.action3}
      underlayColor="#24ce84"
      onPress={ ()=>{ Linking.openURL('https://facebook.com')}}
      >        

        <Text style={styles.actionText}> Facebook</Text> 
       </TouchableHighlight>

       <TouchableHighlight
        style={styles.action4}
      underlayColor="#24ce84"
      onPress={ ()=>{ Linking.openURL('https://facebook.com')}}
      >        

        <Text style={styles.actionText}> LinkedIn</Text> 
       </TouchableHighlight> 



       <TouchableHighlight
        style={styles.action4}
      underlayColor="#24ce84"
      onPress={ ()=>{ Linking.openURL('https://http://gmail.com')}}
      >        

        <Text style={styles.actionText}> Gmail</Text> 
       </TouchableHighlight>

       <TouchableHighlight
        style={styles.action4}
      underlayColor="#24ce84"
      onPress={ ()=>{ Linking.openURL('https://facebook.com')}}
      >        

        <Text style={styles.actionText}> Website</Text> 
       </TouchableHighlight>
       
           
       <Text style={styles.t1}>Danrej Plaza</Text>
              <Text style={styles.t2}>(c) 2018</Text>

        
            </View>
         
        </View>
        );
        }
    }

