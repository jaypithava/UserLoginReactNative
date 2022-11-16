import React from 'react';
import FormContainer from './FormContainer';
import FormInput from './FormInput';
import FormSubmitBtn from './FormSubmitBtn';

const SignUpForm = () => {
  return (
    <FormContainer>
      <FormInput placeholder="John Smith" title="Full Name" />
      <FormInput placeholder="example@gmail.com" title="email" />
      <FormInput placeholder="********" title="Password" />
      <FormInput placeholder="********" title="Confirm Password" />
      <FormSubmitBtn title="Sign Up" />
    </FormContainer>
  );
};

export default SignUpForm;
