import {Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';

const FormInput = props => {
  const {placeholder, label} = props;
  return (
    <>
      <Text style={{fontWeight: 'bold'}}>{label}</Text>
      <TextInput
        {...props}
        placeholder={placeholder}
        style={styles.emailText}
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
