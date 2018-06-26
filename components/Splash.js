import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image, 
} from 'react-native';


export default class Splash extends Component {
    render(){
        return(


    /*<ImageBackground    style={{width: 50, height: 50}} 
        source={require('../Icons/dare2.jpg')}>
    <Text>Inside</Text>
    </ImageBackground>*/

 

            <View style={{
           // backgroundColor: '#0099ff',
           // backgroundColor: '#000',
            flex:1 ,
            alignItems: 'center',
            justifyContent:'center'
            }}>

            <Text style={{
            fontWeight:'bold',
            fontSize:30,
            color:'#fff',
            backgroundColor: '#000',

            }}>Danrej Plaza </Text>


            
          
            <Image style={{ width:300, height:350, marginTop:50 }}
            source={require('../Icons/dare5.jpg')}
         
            />

            <Text style={{
            fontWeight:'bold',
            fontSize:18,
            fontStyle: 'italic',
            color:'red',
            flexDirection:'row'
            }}>We deliver the best! </Text>

            </View>
        )
    }
}


/*

            <Text style={{
            fontWeight:'bold',
            fontSize:18,
            fontStyle: 'italic',
            color:'red'
            }}>We deliver the best! </Text>*/