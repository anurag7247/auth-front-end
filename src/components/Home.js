// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';
// import home from '../assets/home.png';
// import axios from 'axios';

// const Home = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [signupStep, setSignupStep] = useState(1);
//   const [loginStep, setLoginStep] = useState(1);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [otp, setOtp] = useState('');

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [phoneError, setPhoneError] = useState('');

//   const navigate = useNavigate();

//   const validatePhoneNumber = (phoneNumber) => {
//     const phoneRegex = /^[0-9]{10}$/;
//     return phoneRegex.test(phoneNumber);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setPasswordError('');
//     setLoading(true);

//     if (isLogin) {
//       await handleLogin();
//     } else {
//       if (signupStep === 3 && password !== confirmPassword) {
//         setPasswordError('Passwords do not match');
//         setLoading(false);
//         return;
//       }
//       await handleSignup();
//     }

//     setLoading(false);
//   };

//   const handleLogin = async () => {
//     try {
//       if (loginStep === 1) {
//         // Validate email and password with the server
//         const response = await axios.post('/api/auth/validate-login', { email, password });
  
//         if (response.data.success) {
//           // If email and password are correct, send OTP to the user's email
//           const otpResponse = await axios.post('/api/auth/send-otp', { email });
  
//           if (otpResponse.data.success) {
//             setLoginStep(2);
//           } else {
//             setError('Failed to send OTP. Please try again.');
//           }
//         } else {
//           setError(response.data.message || 'Invalid email or password.');
//         }
//       } else {
//         // Second step: Verify OTP using email
//         const otpResponse = await axios.post('/api/auth/verify-otp', { email, otp });
  
//         if (otpResponse.data.success) {
//           navigate('/dashboard');
//         } else {
//           setError('OTP verification failed.');
//         }
//       }
//     } catch (error) {
//       setError('An error occurred during login.');
//     }
//   };
  

//   const handleSignup = async () => {
//     try {
//       if (signupStep === 1) {
//         setSignupStep(2);
//       } else if (signupStep === 2) {
//         if (!validatePhoneNumber(phone)) {
//           setPhoneError('Enter a valid 10-digit phone number.');
//           setLoading(false);
//           return;
//         }
//         setSignupStep(3);
//       } else if (signupStep === 3) {
//         const response = await axios.post('/api/auth/signup', {
//           firstName,
//           lastName,
//           phone,
//           email,
//           password,
//         });
//         if (response.data.success) {
//           // Send OTP to the user's email
//           const otpResponse = await axios.post('/api/auth/send-otp', { email });
//           if (otpResponse.data.success) {
//             setSignupStep(4);
//           } else {
//             setError('Failed to send OTP. Please try again.');
//           }
//         } else {
//           setError(response.data.message || 'Signup failed.');
//         }
//       } else if (signupStep === 4) {
//         // Verify OTP using email
//         const otpVerificationResponse = await axios.post('/api/auth/verify-otp', { email, otp });
//         if (otpVerificationResponse.data.success) {
//           navigate('/dashboard');
//         } else {
//           setError('OTP verification failed.');
//         }
//       }
//     } catch (error) {
//       setError('An error occurred during signup.');
//     }
//   };
  
//   const renderSignupStep = () => {
//     switch (signupStep) {
//       case 1:
//         return (
//           <>
//             <div className="input-group">
//               <label>First Name:</label>
//               <input
//                 type="text"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//                 placeholder="Enter your first name"
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <label>Last Name:</label>
//               <input
//                 type="text"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//                 placeholder="Enter your last name"
//                 required
//               />
//             </div>
//           </>
//         );
//       case 2:
//         return (
//           <>
//             <div className="input-group">
//               <label>Phone Number:</label>
//               <input
//                 type="tel"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 placeholder="Enter your phone number"
//                 required
//               />
//               {phoneError && <p className="error">{phoneError}</p>}
//             </div>
//             <div className="input-group">
//               <label>Email:</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>
//           </>
//         );
//       case 3:
//         return (
//           <>
//             <div className="input-group">
//               <label>Password:</label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter your password"
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <label>Confirm Password:</label>
//               <input
//                 type="password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 placeholder="Confirm your password"
//                 required
//               />
//               {passwordError && <p className="error">{passwordError}</p>}
//             </div>
//           </>
//         );
//       case 4:
//         return (
//           <div className="input-group">
//             <label>Enter OTP:</label>
//             <input
//               type="text"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               placeholder="Enter OTP"
//               required
//             />
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   const renderLoginStep = () => {
//     if (loginStep === 1) {
//       return (
//         <>
//           <div className="input-group">
//             <label>Email:</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//           <div className="input-group">
//             <label>Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               required
//             />
//           </div>

//         </>
//       );
//     } else {
//       return (
//         <div className="input-group">
//           <label>Enter OTP:</label>
//           <input
//             type="text"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             placeholder="Enter OTP"
//             required
//           />
//         </div>
//       );
//     }
//   };

//   return (
//     <div className="home-container">
//      <div className='homeContainer-content'>

//       <div className="left-section">
//         <div className="text-overlay">
//           <h1>End the Search,</h1>
//           <h1>Start Your Career</h1>
//         </div>
//         <img src={home} alt="Career" className="career-image" />
//       </div>

//       <div className="right-section">
//         <div className="auth-card">
//           <div className='register'>
//             <p>Register For <span>Free</span></p>
//           </div>
//           <h2>
//             {isLogin
//               ? `Login ${loginStep === 2 ? '- OTP Verification' : ''}`
//               : `Sign Up - Step ${signupStep}`}
//           </h2>
//           <form onSubmit={handleSubmit}>
//             {isLogin ? renderLoginStep() : renderSignupStep()}
//             <button type="submit" className="btn-primary" disabled={loading}>
//               {isLogin
//                 ? (loginStep === 1 ? 'Send OTP' : 'Login')
//                 : (signupStep < 4 ? 'Next' : 'Complete Signup')}
//             </button>
//           </form>
//           {loading && <p>Loading...</p>}
//           {error && <p className="error">{error}</p>}
//           {((signupStep > 1 && !isLogin) || (loginStep === 2 && isLogin)) && (
//             <button
//               onClick={() => isLogin ? setLoginStep(1) : setSignupStep(signupStep - 1)}
//               className="btn-secondary"
//             >
//               Back
//             </button>
//           )}
//           <p>
//             {isLogin
//               ? "Don't have an account? "
//               : "Already have an account? "}
//             <button
//               onClick={() => {
//                 setIsLogin(!isLogin);
//                 setSignupStep(1);
//                 setLoginStep(1);
//               }}
//               className="btn-link"
//             >
//               {isLogin ? 'Sign Up' : 'Login'}
//             </button>
//           </p>
//         </div>
//       </div>
//     </div>
//     </div>

//   );
// };

// export default Home;





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
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    otp: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [phoneError, setPhoneError] = useState('');

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
          password: userData.password, }
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
        if (!validatePhoneNumber(userData.phone)) {
          setPhoneError('Enter a valid 10-digit phone number.');
          setLoading(false);
          return;
        }
        setSignupStep(3);
      } else if (signupStep === 3) {
        const response = await axios.post('https://auth-1-kwq4.onrender.com/api/register', {
          firstName: userData.firstName,
          lastName: userData.lastName,
          phone: userData.phone,
          email: userData.email,
          password: userData.password,
        });
        if (response.data.success) {
          // const otpResponse = await axios.post('/api/auth/send-otp', {  email: userData.email, });
          // if (otpResponse.data.success) {
            setSignupStep(4);
          // } else {
          //   setError('Failed to send OTP. Please try again.');
          // }
        } else {
          setError(response.data.message || 'Signup failed.');
        }
      } else if (signupStep === 4) {
        const otpVerificationResponse = await axios.post('/api/auth/verify-otp', { email: userData.email,
          otp: userData.otp, });
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
                  phone={userData.phone}
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
