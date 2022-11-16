import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import React from 'react';

const FormSelectorBtn = ({title, backgroundColor, style}) => {
  return (
    <TouchableWithoutFeedback>
      <View style={[styles.touchableView, style, {backgroundColor}]}>
        <Text style={styles.loginStyle}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  touchableMainView: {
    flexDirection: 'row',
    padding: 20,
  },
  touchableView: {
    height: 45,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginStyle: {
    fontSize: 16,
    color: 'white',
  },
});

export default FormSelectorBtn;
