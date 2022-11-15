import React, { Component } from 'react'
import {StyleSheet,View} from 'react-native'
import FormHeader from './components/FormHeader'

export default class App extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.subView}>
          <FormHeader leftHeading='Welcom ' rightHeading='Back'
          subHeading="Hii There!!"  />
          
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView:{
    flex:1,
    padding:120,
  },
  subView:{
    height:100,
    backgroundColor:'red',
  },
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
  }
})
