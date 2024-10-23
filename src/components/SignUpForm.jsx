
import React from 'react';
import InputField from './InputField';
import OTPInput from './OTPInput';

const SignupForm = ({
  signupStep,
  firstName,
  lastName,
  phone,
  email,
  password,
  confirmPassword,
  otp,
  phoneError,
  passwordError,
  handleInputChange,
}) => {
  switch (signupStep) {
    case 1:
      return (
        <>
          <InputField label="First Name" type="text" value={firstName} onChange={(e) => handleInputChange('firstName', e.target.value)} placeholder="Enter your first name"/>
          <InputField label="Last Name" type="text" value={lastName} onChange={(e) => handleInputChange('lastName', e.target.value)} placeholder="Enter your last name"/>
        </>
      );
    case 2:
      return (
        <>
          <InputField label="Phone Number" type="tel" value={phone} onChange={(e) => handleInputChange('phone', e.target.value)} placeholder="Enter your phone number" error={phoneError}/>
          <InputField label="Email" type="email" value={email} onChange={(e) => handleInputChange('email', e.target.value)} placeholder="Enter your email"/>
        </>
      );
    case 3:
      return (
        <>
          <InputField label="Password" type="password" value={password} onChange={(e) => handleInputChange('password', e.target.value)} placeholder="Enter your password"/>
          <InputField label="Confirm Password" type="password" value={confirmPassword} onChange={(e) => handleInputChange('confirmPassword', e.target.value)} placeholder="Confirm your password" error={passwordError}/>
        </>
      );
    case 4:
      return <OTPInput value={otp} onChange={(e) => handleInputChange('otp', e.target.value)} />;
    default:
      return null;
  }
};

export default SignupForm;
