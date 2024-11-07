import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import home from '../assets/home.png';
import axios from 'axios';
import SignupForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [signupStep, setSignupStep] = useState(1);
  const [loginStep, setLoginStep] = useState(1);
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    otp: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const resendOtp = true;
  const navigate = useNavigate();

  const handleInputChange = (field, value) => {
    setUserData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setPasswordError('');
    setLoading(true);

    if (isLogin) {
      await handleLogin();
    } else {
      if (signupStep === 3 && userData.password !== userData.confirmPassword) {
        setPasswordError('Passwords do not match');
        setLoading(false);
        return;
      }
      await handleSignup();
    }

    setLoading(false);
  };

  const handleLogin = async () => {
    try {
      if (loginStep === 1) {
        const response = await axios.post('https://auth-1-kwq4.onrender.com/api/login', 
          { email: userData.email,
          password: userData.password,
          resendOtp:resendOtp,
         }
          , {
            headers: {
              'Content-Type': 'application/json', 
            },
          }
        );

        if (response.data.success) {
          // const otpResponse = await axios.post('/api/auth/send-otp', { email: userData.email, });
          // if (otpResponse.data.success) {
            setLoginStep(2);
          // } else {
          //   setError('Failed to send OTP. Please try again.');
          // }
        } else {
          setError(response.data.message || 'Invalid email or password.');
        }
      } else {
        const otpResponse = await axios.post('https://auth-1-kwq4.onrender.com/api/verify-otp', {  email: userData.email,password: userData.password,
          otp: userData.otp, });
        if (otpResponse.data.success) {
          navigate('/dashboard');
        } else {
          setError('OTP verification failed.');
        }
      }
    } catch (error) {
      setError('An error occurred during login.');
    }
  };

  const handleSignup = async () => {
    try {
      if (signupStep === 1) {
        setSignupStep(2);
      } else if (signupStep === 2) {
        if (!validatePhoneNumber(userData.phoneNumber)) {
          setPhoneError('Enter a valid 10-digit phone number.');
          setLoading(false);
          return;
        }
        setSignupStep(3);
      } else if (signupStep === 3) {
        const response = await axios.post(
          'https://auth-1-kwq4.onrender.com/api/register',
          {
            firstName: userData.firstName,
            lastName: userData.lastName,
            phoneNumber: userData.phoneNumber,
            email: userData.email,
            password: userData.password,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        if (response.data.success) {
            setSignupStep(4);
            // navigate('/dashboard');
        } else {
          setError(response.data.message || 'Signup failed.');
        }
      } 
      else if (signupStep === 4) {
        const otpVerificationResponse = await axios.post('https://auth-1-kwq4.onrender.com/api/verify-otp', { 
          email: userData.email,
          password:userData.password,
          otp: userData.otp,
         });
        if (otpVerificationResponse.data.success) {
          navigate('/dashboard');
        } else {
          setError('OTP verification failed.');
        }
      }
    } catch (error) {
      setError('An error occurred during signup.');
    }
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  return (
    <div className="home-container">
      <div className="homeContainer-content">
        <div className="left-section">
          <div className="text-overlay">
            <h1>End the Search,</h1>
            <h1>Start Your Career</h1>
          </div>
          <img src={home} alt="Career" className="career-image" />
        </div>

        <div className="right-section">
          <div className="auth-card">
            <div className="register">
              <p>Register For <span>Free</span></p>
            </div>
            <h2>
              {isLogin
                ? `Login ${loginStep === 2 ? '- OTP Verification' : ''}`
                : `Sign Up - Step ${signupStep}`}
            </h2>
            <form onSubmit={handleSubmit}>
              {isLogin ? (
                <LoginForm
                  loginStep={loginStep}
                  email={userData.email}
                  password={userData.password}
                  otp={userData.otp}
                  handleInputChange={handleInputChange}
                />
              ) : (
                <SignupForm
                  signupStep={signupStep}
                  firstName={userData.firstName}
                  lastName={userData.lastName}
                  phoneNumber={userData.phoneNumber}
                  email={userData.email}
                  password={userData.password}
                  confirmPassword={userData.confirmPassword}
                  otp={userData.otp}
                  phoneError={phoneError}
                  passwordError={passwordError}
                  handleInputChange={handleInputChange}
                />
              )}
              <button type="submit" className="btn-primary" disabled={loading}>
                {isLogin
                  ? loginStep === 1 ? 'Send OTP' : 'Login'
                  : signupStep < 4 ? 'Next' : 'Complete Signup'}
              </button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            {((signupStep > 1 && !isLogin) || (loginStep === 2 && isLogin)) && (
              <button
                onClick={() => (isLogin ? setLoginStep(1) : setSignupStep(signupStep - 1))}
                className="btn-secondary"
              >
                Back
              </button>
            )}
            <p>
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setSignupStep(1);
                  setLoginStep(1);
                }}
                className="btn-link"
              >
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
