import React, { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext"; // Import useAuth

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Get login function from context
  
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Hardcoded credentials for demo
  const VALID_CREDENTIALS = {
    email: "admin@gmail.com",
    password: "admin@2000"
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!credentials.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!credentials.password) {
      newErrors.password = "Password is required";
    } else if (credentials.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Check credentials (hardcoded for demo)
      if (credentials.email === VALID_CREDENTIALS.email && 
          credentials.password === VALID_CREDENTIALS.password) {
        
        // User data to store
        const userData = {
          email: credentials.email,
          name: "Admin User",
          role: "admin",
          loggedInAt: new Date().toISOString()
        };

        // Create a dummy token
        const dummyToken = "dummy-jwt-token-" + Math.random().toString(36).substring(2);
        
        // Call context login function with rememberMe
        login(userData, dummyToken, rememberMe);
        
        // Navigate to dashboard
        navigate("/admin-acharya/dashboard");
      } else {
        // Show error
        setErrors({
          general: "Invalid email or password"
        });
      }

      setIsLoading(false);
    }, 1500); // Simulate network delay
  };

  // Handle forgot password
  const handleForgotPassword = () => {
    alert("Please contact admin to reset your password");
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6">
      
      {/* Login Form Container - Fully Responsive */}
      <div className="w-full max-w-[90%] xs:max-w-sm sm:max-w-md md:max-w-md border border-slate-500/45 p-4 xs:p-5 sm:p-6 rounded-xl sm:rounded-2xl ">
        
        {/* Logo - Responsive Sizes */}
        <div className="flex justify-center mb-3 sm:mb-4">
          <div className="w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 bg-gray-50 rounded-xl sm:rounded-2xl flex items-center justify-center border border-gray-200">
            <img src="/logo.png" alt="logo" className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 object-contain" />
          </div>
        </div>

        {/* Heading - Responsive Text */}
        <div className="text-center mb-3 sm:mb-4">
          <h2 className="text-xl xs:text-2xl sm:text-2xl font-semibold text-gray-900">
            Welcome Back
          </h2>
          <p className="text-xs xs:text-sm sm:text-sm text-gray-500 mt-1 sm:mt-2">
            Sign in to your account
          </p>
        </div>

        {/* Show general error if any */}
        {errors.general && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-xs sm:text-sm text-red-600 text-center">
              {errors.general}
            </p>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          {/* Email - Responsive Input */}
          <div className="mb-4 sm:mb-6">
            <label className="block text-xs xs:text-sm sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
              Email
            </label>
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base sm:text-lg" />
              <input
                type="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`w-full pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg focus:outline-none focus:border-gray-600 transition-colors text-gray-900 placeholder-gray-400 placeholder:text-xs sm:placeholder:text-sm ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Password - Responsive Input */}
          <div className="mb-3 sm:mb-4">
            <label className="block text-xs xs:text-sm sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
              Password
            </label>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base sm:text-lg" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={`w-full pl-9 sm:pl-10 pr-10 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg focus:outline-none focus:border-gray-600 transition-colors text-gray-900 placeholder-gray-400 placeholder:text-xs sm:placeholder:text-sm ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs sm:text-sm"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">{errors.password}</p>
            )}
          </div>

          {/* Remember Me Checkbox */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
            />
            <label htmlFor="remember" className="ml-2 text-xs sm:text-sm text-gray-600">
              Remember me
            </label>
          </div>

          {/* Sign In Button - Responsive */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-gray-900 text-white font-medium py-2.5 sm:py-3 text-sm sm:text-base rounded-lg hover:bg-gray-800 transition-colors cursor-pointer ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Forgot Password - Responsive */}
        <p className="text-center mt-4 sm:mt-4">
          <button
            onClick={handleForgotPassword}
            className="text-xs xs:text-sm sm:text-sm text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
          >
            Forgot Password?
          </button>
        </p>

        {/* Footer - Responsive */}
        <p className="text-center text-[10px] xs:text-xs sm:text-xs text-gray-400 mt-5 sm:mt-5">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;