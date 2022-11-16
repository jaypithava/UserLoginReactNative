import {Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';

const FormInput = ({placeholder, title}) => {
  return (
    <>
      <Text style={{fontWeight: 'bold'}}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.emailText}
        secureTextEntry={true}
      />
    </>
  );
};

const styles = StyleSheet.create({
  emailText: {
    borderWidth: 1,
    borderColor: '#1b1b33',
    height: 40,
    borderRadius: 8,
    fontSize: 16,
    paddingLeft: 8,
    marginBottom: 20,
  },
});

export default FormInput;
