import React from 'react';

const InputField = ({ label, type, value, onChange, placeholder, error }) => (
  <div className="input-group">
    <label>{label}:</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
    />
    {error && <p className="error">{error}</p>}
  </div>
);

export default InputField;
