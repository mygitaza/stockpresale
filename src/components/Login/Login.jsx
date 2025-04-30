import React, { useEffect, useState } from "react";
import "./Login.css";
import closeIcon from "../../assets/closeIcon.svg";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "../../redux/api/userApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router";

const Login = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign up");
  const [countries, setCountries] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    country: "",
    address: "",
    zipCode: "",
    email: "",
    password: "",
  });

  const [registerUser, { isLoading: isRegistering }] =
    useRegisterUserMutation();
  const [loginUser, { isLoading: isLoggingIn }] = useLoginUserMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (currState === "Sign up") {
        // Registration
        const response = await registerUser(formData).unwrap();
        console.log("Register Successful:", response);
        alert("Account Created Successfully!");
        setCurrState("Login");
      } else {
        // Login
        const { email, password } = formData;
        const response = await loginUser({ email, password }).unwrap();
        const { token, user } = response;
        if (user.role === 'admin') {
            alert("Admin login is not allowed on this page.");
            return;
          }
        dispatch(setUser(user));
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        console.log("User saved:", user);
        setShowLogin(false);
        navigate("/dashboard/add-stock");
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      alert(error.data?.message || "An error occured. Try again");
    }
  };

  useEffect(() => {
    const fetchCountries = async () => {
      if (isFetched) return;

      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const sortedCountries = data
          .map((country) => country.name.common)
          .sort((a, b) => a.localeCompare(b));
        setCountries(sortedCountries);
        setIsFetched(true);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    if (isFetched) return;

    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      const sortedCountries = data
        .map((country) => country.name.common)
        .sort((a, b) => a.localeCompare(b));
      setCountries(sortedCountries);
      setIsFetched(true);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };
  return (
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="logintop">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={closeIcon}
            alt="close icon"
          />
        </div>
        <div className="login-wrapper">
          {currState === "Login" ? (
            <></>
          ) : (
            <div className="Signup-form">
              <div className="login-flex">
                <div className="login-content-wrapper">
                  <label>First Name</label>
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    type="text"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="login-content-wrapper">
                  <label>Last Name</label>
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              <div className="login-flex">
                <div className="login-content-wrapper">
                  <label>Phone No:</label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="text"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="login-content-wrapper">
                  <label>Country:</label>
                  <select
                  className="register-select"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    onClick={fetchCountries}
                    required
                  >
                    <option value="">Select your country</option>
                    {countries.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="login-flex">
                <div className="login-content-wrapper">
                  <label>Address</label>
                  <input
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    type="text"
                    placeholder="Address"
                    required
                  />
                </div>
                <div className="login-content-wrapper">
                  <label>Zip Code</label>
                  <input
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    type="text"
                    placeholder="Zip Code"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          <div className="login-flex">
            <div className="login-content-wrapper">
              <label>Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="login-content-wrapper">
              <label>Password</label>
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                placeholder="Your Password"
                required
              />
            </div>
          </div>
        </div>
        <div className="login-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        <button type="submit" disabled={isRegistering || isLoggingIn}>
          {isRegistering || isLoggingIn
            ? "Please wait..."
            : currState === "Sign up"
            ? "Create Account"
            : "Login"}
        </button>
        <div className="login-switch">
          {currState === "Login" ? (
            <p>
              Create a new account?{" "}
              <span onClick={() => setCurrState("Sign up")}>Click here</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setCurrState("Login")}>Login here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
