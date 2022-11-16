import React from 'react';
import FormContainer from './FormContainer';
import FormInput from './FormInput';
import FormSubmitBtn from './FormSubmitBtn';

const LoginForm = () => {
  return (
    <FormContainer>
      <FormInput placeholder="example@gmail.com" title="email" />
      <FormInput placeholder="********" title="Password" />
      <FormSubmitBtn title="Login" />
    </FormContainer>
  );
};

export default LoginForm;
