import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const FormSubmitBtn = ({title}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    backgroundColor: 'rgba(27,27,51,0.4)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FormSubmitBtn;
