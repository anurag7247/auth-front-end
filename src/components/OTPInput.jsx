import React from 'react';
const OTPInput = ({ value, onChange }) => (
  <div className="input-group">
    <label>Enter OTP:</label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Enter OTP"
      required
    />
  </div>
);

export default OTPInput;
