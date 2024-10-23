import React from 'react';
import InputField from './InputField';
import OTPInput from './OTPInput';

const LoginForm = ({ loginStep, email, password, otp, handleInputChange }) => {
  // console.log(email);
  return loginStep === 1 ? (
    <>
    {/* {email} */}
      <InputField label="Email" type="email" value={email} onChange={(e) => handleInputChange('email', e.target.value)} placeholder="Enter your email"/>
      
      <InputField label="Password" type="password" value={password} onChange={(e) => handleInputChange('password', e.target.value)} placeholder="Enter your password"/>
    </>
  ) : (
    <OTPInput value={otp} onChange={(e) => handleInputChange('otp', e.target.value)} />
  );
};

export default LoginForm;
