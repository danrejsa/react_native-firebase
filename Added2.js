

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Modal,
  TextInput,
  Firebase,
  Alert,

} from 'react-native';

const styles = require('./app/style');

import Toolbar from './app/Toolbar/Toolbar';
//import * as firebase from 'firebase';
import AddButton from './app/AddButton/AddButton';
import firebaseApp from './Config/FirebaseConfig';
//export default 'firebase'
//module.exports = firebase;

/*const firebaseConfig = {
    apiKey: "AIzaSyBecpHAfAXJ3rIG0N-fLPcXS4unlFseK0w",
    authDomain: "dr-plaza.firebaseapp.com",
    databaseURL: "https://dr-plaza.firebaseio.com",
    projectId: "dr-plaza",
    storageBucket: "dr-plaza.appspot.com",
    persistence: true,
}

const firebaseApp = firebase.initializeApp(firebaseConfig);*/


export default class Added2 extends Component {

  constructor(){
    super();
    let ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
    this.state = {
      text:'',
      itemDataSource: ds,
      modalVisible: false

    }

    this.itemsRef = this.getRef().child('Finished');
    this.renderRow = this.renderRow.bind(this);
    this.pressRow = this.pressRow.bind(this);
  }

  setModalVisible(visible){
    this.setState({modalVisible:visible});
  }

  getRef(){
    return firebaseApp.database().ref();
  }

componentWillMount(){
  this.getItems(this.itemsRef);
}

componentDidMount(){
  //this.getItems(this.itemsRef);
}


 getItems(itemsRef){

  //let items = [{title: 'Item One'}, {title: 'Item Two'}];
  itemsRef.on('value', (snap) => {
    let Finished = [];
    snap.forEach((child)  => {
      Finished.push ({
      title: child.val().title,
      _key: child.key

    }); 
     
  });



 this.setState({
  itemDataSource: this.state.itemDataSource.cloneWithRows(Finished)

 });
 });

 }


 pressRow(item){
  //this.itemsRef.child(item._key).remove();
  Alert.alert(
    'Delete',
    'Do you want to delete item?',
    [     
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
     // {text: 'OK', onPress: () =>  {this.itemsRef.child(item._key).remove()('OK Pressed')}},
     {text: 'OK', onPress : () =>  {
       this.itemsRef.child(item._key).remove()}},
    ],
    { cancelable: false }
  )
 }

 renderRow(item){
  return(


 
<View>

    <TouchableHighlight onPress={() => {
      this.pressRow(item);
    }}>
   <View style={styles.liF}>
      <Text 
      style={styles.liText}>{item.title}
      </Text>

      </View>
    
    </TouchableHighlight>

</View>

    );

 }


 addItem(){
this.setModalVisible(true);
 }

  render() {
    return (
      <View style={styles.container}>
<Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {}}
                     
                     >
          <View style={{marginTop: 22}}>
            <View>
              <Toolbar title="Finished"/>
      <TextInput
      style={{marginTop:50,}}
        value={this.state.text}
          placeholder="Enter Item Name/Quantity"         
            onChangeText = {(value) => this.setState({text:value})}
          />

          <Text style={{textAlign:'center'}}>E.g Indomie (15 Cartoons) or Wine (2 Bottles)</Text>
         

              <TouchableHighlight
                onPress={() => {
                  this.itemsRef.push({title: this.state.text});

                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={styles.action1}                   
                >Save</Text>
              </TouchableHighlight>

        <TouchableHighlight
                onPress={() => {
                

                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={styles.action2}>Cancel</Text>
              </TouchableHighlight>

              <Text style={styles.t1}>Danrej Plaza</Text>
              <Text style={styles.t2}>(c) 2018</Text>


            </View>
          </View>
        </Modal>
 
     

      <ListView
          dataSource={this.state.itemDataSource}
          renderRow={this.renderRow}
      />
        <AddButton onPress={this.addItem.bind(this)} title="Add Item"/>
      </View>
    );
  }
}

// <Toolbar title = "Redefining the business world!"/>

//export default 'firebase'