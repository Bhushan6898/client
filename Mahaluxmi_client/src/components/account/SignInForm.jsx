import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconShieldLock } from "bootstrap-icons/icons/shield-lock.svg";
import { ReactComponent as IconEmail } from "bootstrap-icons/icons/envelope.svg";
import useAdmin from './../../hooks/useUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingPage from "../../lodingPage";



const SignInPage = () => {
  const { Login, verification, getUsers, genrateotp } = useAdmin();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    otp: ''
  });

  const [showField, setShowField] = useState(null);
  const [showOtpField, setShowOtpField] = useState(false);
  const [otpGenerated, setOtpGenerated] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    verification();
    getUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      if (showField === "password" || formData.otp) {
        await Login(formData);
      } else {
        const response = await genrateotp(formData);
        if (response.status === 200) {
          setShowOtpField(true);
          setShowField("otp");
          setOtpGenerated(true);
          setFormData((prevData) => ({
            email: prevData.email,
            password: '',
            otp: ''
          }));
        } else {
          console.error("Failed to generate OTP:", response);
        }
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleShowField = (field) => {
    setFormData((prevData) => ({
      email: prevData.email,
      password: '',
      otp: ''
    }));
    if (field === "password") {
      setShowOtpField(false);
      setOtpGenerated(false);
    }
    setShowField(showField === field ? null : field);
  };

  return (
    <div className="container-fluid mt-5">
      
       {loading && (
   <LoadingPage/>
)}


      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-8 col-sm-12">
          <h2 className="text-center mb-4">Sign In</h2>
          <div className="card shadow-lg border-0" style={{ borderRadius: '20px' }}>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                <div className="form-group mb-4">
                  <label htmlFor="email" className="form-label">Email</label>
                  <div className="input-group">
                    <span className="input-group-text bg-primary text-white">
                      <IconEmail />
                    </span>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter a valid email address.
                    </div>
                  </div>
                </div>

                {showField === "password" && (
                  <div className="form-group mb-4">
                    <label htmlFor="password" className="form-label text-primary">Password</label>
                    <div className="input-group">
                      <span className="input-group-text bg-primary text-white">
                        <IconShieldLock />
                      </span>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        minLength="8"
                        maxLength="20"
                      />
                      <div className="invalid-feedback">
                        Please enter a valid password (8-20 characters).
                      </div>
                    </div>
                  </div>
                )}

                {showOtpField && (
                  <div className="form-group mb-4">
                    <label htmlFor="otp" className="form-label text-primary">OTP</label>
                    <input
                      type="text"
                      name="otp"
                      className="form-control"
                      placeholder="Enter your OTP"
                      value={formData.otp}
                      onChange={handleChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter the OTP sent to your email.
                    </div>
                  </div>
                )}

                <div className="d-grid mb-4">
                  <button
                    type="button"
                    className={`btn ${showField === "password" ? "btn-secondary" : "btn-primary"}`}
                    onClick={() => handleShowField("password")}
                  >
                    {showField === "password" ? "Hide Password" : "Show Password"}
                  </button>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-success">
                    {otpGenerated ? "Verify OTP" : showField === "password" ? "Sign In" : "Generate OTP"}
                  </button>
                </div>
              </form>

              <div className="mt-3 text-center">
                <Link to="/account/signup" className="me-3">Create your account</Link>
                <Link to="/account/forgotpassword">Forgot password?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for Loading Overlay */}
      <style>
        {`
          .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.8);
            z-index: 1050;
          }
        `}
      </style>
    </div>
  );
};

export default SignInPage;
