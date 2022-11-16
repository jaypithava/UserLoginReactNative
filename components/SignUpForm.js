import {Text, StyleSheet} from 'react-native';
import React from 'react';
import FormContainer from './FormContainer';

const SignUpForm = () => {
  return (
    <FormContainer>
      <Text style={styles.signUpText}>Sign Up</Text>
    </FormContainer>
  );
};

const styles = StyleSheet.create({
  signUpText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default SignUpForm;
