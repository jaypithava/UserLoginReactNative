import { View, Text } from 'react-native'
import React from 'react'

const FormHeader = (leftHeading,rightHeading,subHeading) => {
  return (
    <>
        <View style={styles.normalView}>
            <Text style={styles.textStyle}>{leftHeading} </Text>
            <Text style={styles.textStyle}>{rightHeading}</Text>
        </View>
        <Text style={styles.subText}>{subHeading}</Text>
    </>
  )
}

const styles = StyleSheet.create({
    normalView:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
      },
      textStyle:{
        fontSize:30,
        fontWeight:'bold',
        color:'#1b1b33'
      },
      subText:{
        fontSize:30,
        textAlign:'center',
        color:'#1b1b33'
      },
})

export default FormHeader