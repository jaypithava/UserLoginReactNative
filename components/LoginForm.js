import React, {useState} from 'react';
import {Text} from 'react-native';
import {isValidObjField, updateError, isValidEmail} from '../utils/methods';
import FormContainer from './FormContainer';
import FormInput from './FormInput';
import FormSubmitBtn from './FormSubmitBtn';

const LoginForm = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const {email, password} = userInfo;
  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({...userInfo, [fieldName]: value});
  };
  const [error, setError] = useState('');

  const isValidForm = () => {
    if (!isValidObjField(userInfo)) {
      return updateError('Required all fields!', setError);
    }
    if (!isValidEmail(email)) {
      return updateError('Invalid Email!', setError);
    }
    if (!password.trim() || password.length < 6) {
      return updateError('Password is less then 6 characters!', setError);
    } else {
      return true;
    }
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
        value={email}
        onChangeText={value => handleOnChangeText(value, 'email')}
        placeholder="example@gmail.com"
        label="email"
        autoCapitalize="none"
      />
      <FormInput
        value={password}
        onChangeText={value => handleOnChangeText(value, 'password')}
        placeholder="********"
        label="Password"
        secureTextEntry={true}
      />
      <FormSubmitBtn title="Login" onPress={submitForm} />
    </FormContainer>
  );
};

export default LoginForm;
