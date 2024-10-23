import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import './Navbar.css';
import homeLogo from '../assets/logo.png';
import closeIcon from '../assets/close-x-svgrepo-com.svg';
import dashboardLogo from '../assets/whi.png';
const PostJobModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    jobType: '', jobTitle: '', jobLocation: '', openings: '',
    experience: '', salary: '', bonus: '', jobDescription: '',
    contactDays: '', skills: '', jobTiming: '', interviewTiming: '',
    companyName: '', contactNo: '', email: '', personProfile: '',
    organizationSize: '', jobAddress: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job posted:', formData);
    onClose();
  };
 
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} >
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2 className="modal-title">Post a New Job</h2>
        <form onSubmit={handleSubmit} className="job-form">
          <div className="form-section">
            <h3>Basic Job Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="jobType">Job Type</label>
                <select id="jobType" name="jobType" value={formData.jobType} onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="partTime">Part Time</option>
                  <option value="fullTime">Full Time</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="jobTitle">Job Title</label>
                <input type="text" id="jobTitle" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="jobLocation">Job Location</label>
                <input type="text" id="jobLocation" name="jobLocation" value={formData.jobLocation} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="openings">Number of Openings</label>
                <input type="number" id="openings" name="openings" value={formData.openings} onChange={handleChange} required />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Candidate Requirements</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="experience">Experience</label>
                <select id="experience" name="experience" value={formData.experience} onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="any">Any</option>
                  <option value="fresherOnly">Fresher Only</option>
                  <option value="experienceOnly">Experience Only</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="salary">Monthly In-hand Salary (up to)</label>
                <input type="number" id="salary" name="salary" value={formData.salary} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="bonus">Bonus or Incentives</label>
                <select id="bonus" name="bonus" value={formData.bonus} onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="contactDays">Contact Days</label>
                <select id="contactDays" name="contactDays" value={formData.contactDays} onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="everyday">Every day</option>
                  <option value="monToFri">Monday to Friday</option>
                  <option value="monToSat">Monday to Saturday</option>
                  <option value="custom">Custom</option>
                </select>
              </div>
            </div>
            <div className="form-group full-width">
              <label htmlFor="jobDescription">Job Description</label>
              <textarea id="jobDescription" name="jobDescription" value={formData.jobDescription} onChange={handleChange} maxLength="500" required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="skills">Skills Required</label>
                <input type="text" id="skills" name="skills" value={formData.skills} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="jobTiming">Job Timing</label>
                <input type="text" id="jobTiming" name="jobTiming" value={formData.jobTiming} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="interviewTiming">Interview Timing</label>
              <input type="text" id="interviewTiming" name="interviewTiming" value={formData.interviewTiming} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-section">
            <h3>Company Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="companyName">Company Name</label>
                <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="contactNo">Contact Number</label>
                <input type="tel" id="contactNo" name="contactNo" value={formData.contactNo} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="personProfile">Person's Profile</label>
                <input type="text" id="personProfile" name="personProfile" value={formData.personProfile} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="organizationSize">Size of Organization</label>
                <input type="text" id="organizationSize" name="organizationSize" value={formData.organizationSize} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="jobAddress">Job Address</label>
                <textarea id="jobAddress" name="jobAddress" value={formData.jobAddress} onChange={handleChange} required />
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-submit">Submit</button>
            <button type="button" className="btn-cancel" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const LoginForm = ({ onClose, onSwitchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted', { email, password, rememberMe });
  };
  

  return (
    <>
    <img src={closeIcon} onClick={onClose} alt='close-btn' id='cl-btn'/>
    <div className="auth-form-cmp">
      <h2>Company Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group-cmp">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group-cmp">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group-chk">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            /> <h1 id='rem'>Remember Me</h1>
          </label>
        </div>
        <button id='log' type="submit">Login</button>
      </form>
      <p>
        <Link href="#" onClick={(e) => { e.preventDefault(); /* Handle forget password */ }}>
          Forgot Password?
        </Link>
      </p>
      <p>
        Don't have an account?{' '}
        <Link href="#" onClick={(e) => { e.preventDefault(); onSwitchToSignup(); }}>
          Sign Up
        </Link>
      </p>
      {/* <button id='cl-btn' onClick={onClose}>Close</button> */}
    </div>
    </>
  );
};

const SignupForm = ({ onClose, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    password: '',
    confirmPassword: '',
    contactNo: '',
    companyWebUrl: '',
    companyAddress: '',
    industryType: '',
    companySize: '',
    companyDescription: '',
    logo: null,
    adminContactNo: '',
    hrContactNo: '',
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup submitted', formData);
  };

  return (
    <>
    <img src={closeIcon} onClick={onClose} alt='close-btn' id='cl-btn'/>
    <div className="signup-container">
  <h2>Company Sign Up</h2>
  <form onSubmit={handleSubmit}>
    <div className="form-group-cmp">
      <label htmlFor="companyName">Company Name</label>
      <input
        type="text"
        id="companyName"
        name="companyName"
        value={formData.companyName}
        onChange={handleChange}
        required
        />
    </div>
    <div className="form-group-cmp">
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        />
    </div>
    <div className="form-group-cmp">
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
        />
    </div>
    <div className="form-group-cmp">
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-group-cmp">
      <label htmlFor="contactNo">Contact No.</label>
      <input
        type="tel"
        id="contactNo"
        name="contactNo"
        value={formData.contactNo}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-group-cmp">
      <label htmlFor="companyWebUrl">Company Web URL</label>
      <input
        type="url"
        id="companyWebUrl"
        name="companyWebUrl"
        value={formData.companyWebUrl}
        onChange={handleChange}
        />
    </div>
    <div className="form-group-cmp">
      <label htmlFor="companyAddress">Company Address</label>
      <textarea
        id="companyAddress"
        name="companyAddress"
        value={formData.companyAddress}
        onChange={handleChange}
        required
        />
    </div>
    <div className="form-group-cmp">
      <label htmlFor="industryType">Industry Type</label>
      <input
        type="text"
        id="industryType"
        name="industryType"
        value={formData.industryType}
        onChange={handleChange}
        required
        />
    </div>
    <div className="form-group-cmp">
      <label htmlFor="companySize">Company Size</label>
      <select
        id="companySize"
        name="companySize"
        value={formData.companySize}
        onChange={handleChange}
        required
      >
        <option value="">Select company size</option>
        <option value="10-20">10 to 20</option>
        <option value="10-50">10 to 50</option>
        <option value="50-100">50 to 100</option>
        <option value="100+">Above 100</option>
      </select>
    </div>
    <div className="form-group-cmp">
      <label htmlFor="companyDescription">Company Description</label>
      <textarea
        id="companyDescription"
        name="companyDescription"
        value={formData.companyDescription}
        onChange={handleChange}
      />
    </div>
    <div className="form-group-cmp">
      <label htmlFor="logo">Logo Upload</label>
      <input
        type="file"
        id="logo"
        name="logo"
        onChange={handleChange}
        accept="image/*"
        />
    </div>
    <div className="form-group-cmp">
      <label htmlFor="adminContactNo">Admin Contact No.</label>
      <input
        type="tel"
        id="adminContactNo"
        name="adminContactNo"
        value={formData.adminContactNo}
        onChange={handleChange}
        required
        />
    </div>
    <div className="form-group-cmp">
      <label htmlFor="hrContactNo">HR Contact No.</label>
      <input
        type="tel"
        id="hrContactNo"
        name="hrContactNo"
        value={formData.hrContactNo}
        onChange={handleChange}
      />
    </div>
    <div className="form-group-chk">
      <label>
        <input
          type="checkbox"
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleChange}
          required
          />
        I agree to the Terms and Conditions
      </label>
    </div>
    {/* Add CAPTCHA verification here */}
    <button type="submit" id='log'>Sign Up</button>
  </form>
  <p>
    Already have an account?{' '}
    <Link href="#" onClick={(e) => { e.preventDefault(); onSwitchToLogin(); }}>
      Login
    </Link>
  </p>
      {/* <button id='cl-btn' onClick={onClose}>Close</button> */}
    </div>
      </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      console.log('Searching for:', searchQuery);
    }
  };

  const handlePostJob = () => {
    console.log('Opening Post Job modal');
    setIsModalOpen(true);
  };

  const handleCompanyLogin = () => {
    setIsLoginForm(true);
    setIsAuthModalOpen(true);
  };

  const handleCloseAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const switchToSignup = () => {
    setIsLoginForm(false);
  };

  const switchToLogin = () => {
    setIsLoginForm(true);
  };
  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      handleCloseAuthModal();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${isDashboard ? 'navbar-transparent' : ''}${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-logo">
            <img
              src={isDashboard ? dashboardLogo : homeLogo}
              alt="JobPortal Logo"
              className="logo-image"
            />
          </div>

          <div className="desktop-menu">
            <Link to="/">Home</Link>
            <Link to="">Jobs</Link>
            <Link to="">Companies</Link>
            <Link to="/about">About</Link>
          </div>

          {isDashboard ? (
            <button className="post-job-button" onClick={handlePostJob}>
              + Post Job
            </button>
          ) : (
            <>
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleSearch}
                />
                <Search className="search-icon" size={20} />
              </div>
              <button className="company-login-button" onClick={handleCompanyLogin}>
              Company Login
              </button>
            </>
          )}

          <button onClick={toggleMenu} className="mobile-menu-button">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="mobile-menu">
            <Link to="/">Home</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/companies">Companies</Link>
            <Link to="/about">About</Link>
            {isDashboard ? (
              <button className="post-job-button" onClick={handlePostJob}>
                + Post Job
              </button>
            ) : (
              <button className="company-login-button" onClick={handleCompanyLogin}>
                Company Login
              </button>
            )}
          </div>
        )}
      </nav>

      {isAuthModalOpen && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            {isLoginForm ? (
              <LoginForm onClose={handleCloseAuthModal} onSwitchToSignup={switchToSignup} />
            ) : (
              <SignupForm onClose={handleCloseAuthModal} onSwitchToLogin={switchToLogin} />
            )}
          </div>
        </div>
      )}

      <PostJobModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;