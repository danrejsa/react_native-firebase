import React, { Component } from 'react';
import Button from 'react-native-button';
import {
    Text,
    View,
    Image, 
    TouchableHighlight
} from 'react-native';

export default class HeaderChat extends Component{
    render(){
        return (<View style={{
            height:60,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor:'#0099ff'
        }}>

      
        <TouchableHighlight style={{ marginLeft:10,
       }}
        onPress={() => {
        const { navigate } = this.props.navigation;
        navigate('DrawerOpen');
        }}>
        
        <Image style={{ width:23, height:32, marginTop:5 }}
            source={require('../Icons/menu2.png')}
            />

        


        </TouchableHighlight>

        <Text style={{textAlign:'center', marginLeft: 30, fontSize:20, height:30, color:'#fff', marginTop:5}}> ChatMe </Text>

       </View>
      
       
    );

    }
}














