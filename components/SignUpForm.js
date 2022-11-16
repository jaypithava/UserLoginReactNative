import React, {useState} from 'react';
import {Text} from 'react-native';
import FormContainer from './FormContainer';
import FormInput from './FormInput';
import FormSubmitBtn from './FormSubmitBtn';
import {isValidObjField, updateError, isValidEmail} from '../utils/methods';

const SignUpForm = () => {
  const [userInfo, setUserInfo] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const {fullName, email, password, confirmPassword} = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({...userInfo, [fieldName]: value});
  };
  const isValidForm = () => {
    if (!isValidObjField(userInfo)) {
      return updateError('Required all fields!', setError);
    }
    if (!fullName.trim() || fullName.length < 3) {
      return updateError('Invalid Name!', setError);
    }
    if (!isValidEmail(email)) {
      return updateError('Invalid Email!', setError);
    }
    if (!password.trim() || password.length < 6) {
      return updateError('Password is less then 6 characters!', setError);
    }
    if (password !== confirmPassword) {
      return updateError('Password does not match!', setError);
    }
    return true;
  };
  const submitForm = () => {
    if (isValidForm()) {
      console.log(userInfo);
    }
  };

  return (
    <FormContainer>
      {error ? (
        <Text style={{color: 'red', fontSize: 18, textAlign: 'center'}}>
          {error}
        </Text>
      ) : null}
      <FormInput
        value={fullName}
        onChangeText={value => handleOnChangeText(value, 'fullName')}
        placeholder="John Smith"
        label="Full Name"
      />
      <FormInput
        value={email}
        onChangeText={value => handleOnChangeText(value, 'email')}
        autoCapitalize="none"
        placeholder="example@gmail.com"
        label="email"
      />
      <FormInput
        value={password}
        onChangeText={value => handleOnChangeText(value, 'password')}
        autoCapitalize="none"
        placeholder="********"
        label="Password"
        secureTextEntry={true}
      />
      <FormInput
        value={confirmPassword}
        onChangeText={value => handleOnChangeText(value, 'confirmPassword')}
        autoCapitalize="none"
        placeholder="********"
        label="Confirm Password"
        secureTextEntry={true}
      />
      <FormSubmitBtn title="Sign Up" onPress={submitForm} />
    </FormContainer>
  );
};

export default SignUpForm;
