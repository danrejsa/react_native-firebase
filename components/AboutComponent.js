import React, {Component} from 'react';

import {
    Text,View,Image, TouchableHighlight
} from 'react-native';

import {About} from '../screenNames';
import HeaderAbout from './HeaderAbout';
const styles = require('../app/style');

const backgroundColor = '#0067a7';
export default class AboutComponent extends Component{
    static navigationOptions = ({ navigation}) =>{
        let drawerLabel = 'About';
    let drawerIcon = () => (
            <Image 
           source={require('../Icons/abt.png')}
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
      <HeaderAbout {...this.props}/>
        <View style={{
            flex: 1,
            backgroundColor: backgroundColor,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
        <Text style={{ 
        fontSize: 18,
        color: '#000',marginTop:50, backgroundColor:'#fff', alignSelf:'baseline',borderRadius: 15, textAlign: 'center'}}>
        Our Market focus provides consistent delivery, flexibility, and customer involvement. This 
        allows us to deliver whole solutions based on a complete understanding of our customer's demands.
        </Text>
        <Text style={styles.t1}>Danrej Plaza</Text>
              <Text style={styles.t2}>(c) 2018</Text>

        <TouchableHighlight style={{
            margin:20,
            width:200,
            height:45,
            backgroundColor:'darkViolet',
            padding: 10,
            alignItems: 'center'
        }}

        onPress={()=>  {
            this.props.navigation.goBack();  
                 

        }}>
        <Text style={{color: 'white', fontSize: 10}}>Go back to Home</Text>
       </TouchableHighlight>
            </View>
        </View>
        );
        }
    }

