import React, {Component} from 'react';

import {
    Text,View,Image, TouchableHighlight,Alert,BackAndroid,
} from 'react-native';

import {About} from '../screenNames';
import HeaderComponent from './HeaderComponent';
//import Added from '../Added';
import Tabby from '../Tabby';
//import Toolbar from '../app/Toolbar/Toolbar';



  
  
  



const backgroundColor = '#0067a7';
export default class HomeComponent extends Component{


  
    static navigationOptions = ({ navigation}) =>{
        let drawerLabel = 'Home';
    let drawerIcon = () => (
            <Image 
           source={require('../Icons/home.png')}
            style={{width: 20, height: 20,  tintColor: backgroundColor}}
            />

    );
      
        return {drawerLabel, drawerIcon};
    }

    

    render () {

      

        return(
        
        
        
        
        
        <View style={{
            flex: 1,
            flexDirection: 'column',

        }}>
    
      <HeaderComponent {...this.props}/>
  
      <Tabby/>

     

        </View>
        
        );
        }
    }

    