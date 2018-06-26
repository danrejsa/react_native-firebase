/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';



import {

  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableHighlight

} from 'react-native';


const styles = require('../style');





export default class Toolbar extends Component{
  render() {
    return (

      <View>
          <StatusBar 
            backgroundColor='coral'
            barStyle = 'light-content'

                  />

            <View style={styles.navbar}>

                <Text style={styles.navbarTitle}>
                 {this.props.title}
                    </Text>

                </View>

       
     </View>

    );

  }

}



