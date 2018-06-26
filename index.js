import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
//import { DrawerNavigator} from 'react-navigation';
//import {Dimensions} from 'react-native';
import Splash from './components/Splash';
import Start from './Start';
import App from './App';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', "Warning: Can't call setState (or forceUpdate) on an unmounted component", 
'Warning: In next release empty section headers will be rendered', 'Warning: Failed prop type: Invalid prop','Setting a timer for a long period of time','Module RCTImageLoader']);

class Main extends Component{
    constructor(props){
        super(props);
        this.state = { currentScreen: 'Splash'};
        console.log('Start doing some tasks for about 3 seconds')
        setTimeout(()=>{
            console.log('Done doing some tasks for about 3 seconds')
        this.setState({ currentScreen: 'Start'})
        }, 1500)
    }
    render(){

        
        const { currentScreen } = this.state
        let mainScreen = currentScreen === 'Splash' ? <Splash/> : <Start/>
       return mainScreen

       
    }
    
}


//AppRegistry.registerComponent('nav', () => Main);
//AppRegistry.registerComponent('nav', () => Splash);
AppRegistry.registerComponent('danrejPlaza', () => Main );
