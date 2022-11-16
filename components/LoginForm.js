import {Text, StyleSheet} from 'react-native';
import React from 'react';
import FormContainer from './FormContainer';

const LoginForm = () => {
  return (
    <FormContainer>
      <Text style={styles.loginText}>Login</Text>
    </FormContainer>
  );
};

const styles = StyleSheet.create({
  loginText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default LoginForm;
