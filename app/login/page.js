"use client"
//============================================================================
import { useState } from 'react';
import { useLoginVendor } from '../controllers/vendor/auth';
import Loader from '../components/ui/status/Loader';
import SuccessStatus from '../components/ui/status/Success';
import ErrorStatus from '../components/ui/status/Error';
import GoogleSSO from '../components/ui/SSO/google';
//============================================================================

const SuperAdminLogin = () => {
  //============================================================================

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Loader state
  const [showSuccess, setShowSuccess] = useState(false); // Success pop-up state
  const [apiResponse, setApiResponse] = useState(''); // Success pop-up state

  //============================================================================
  const login = useLoginVendor(); // Get the mutation hook

  const handleLogin = async (e) => {
    setLoading(true)
    e.preventDefault();
    setError('');
    setApiResponse(null);

    try {
      // ✅ Await the login mutation
      const data = await login.mutateAsync({ email, password });

      setApiResponse({
        status: 'success',
        vendorName: data?.data?.vendorName,
        message: data?.data?.message
      });
      setShowSuccess(true);

      // console.log('Login Successful:', data);
      setLoading(false)
    } catch (error) {
      console.log('========= error  ==============', error?.response?.data);
      setError(error.message || 'Login failed');
      setApiResponse({ status: 'error', message: error?.response?.data?.message });

      console.error('Login Failed:', error);
      setLoading(false)
    }
  };

  //============================================================================

  // if (loading) return <SuccessStatus userName={'Super Admin'} />;
  return (

    <div className="flex flex-col lg:flex-row min-h-screen bg-background">
      {showSuccess && (
        <SuccessStatus user={apiResponse?.vendorName} message={apiResponse?.message} />
      )}
      {error && (
        <ErrorStatus message={apiResponse} />
      )}



      {/* <SuccessStatus userName={'Super Admin'} /> */}
      {/* Left Section */}
      {/* <ThemeSelector/> */}
      <div className="lg:flex flex-col justify-center w-full lg:w-1/2 p-16 text-white bg-primary-gradient animate-gradient">
        <div className="flex lg:flex-row flex-col items-center mb-10 animate-fade-in">
          <img src="logo.png" alt="BadiDukan Logo" className="h-16 mr-4 rounded-full p-1 shadow-lg bg-amber-50" />
          {/* <h1 className="text-5xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent"> */}
          <h1 className="text-5xl font-extrabold tracking-wide bg-clip-text  text-primary-text">
            Welcome to Badi Eats Admin Panel !
          </h1>
        </div>

        <p className="text-lg mb-8 leading-relaxed opacity-90 animate-slide-in text-secondary-text">
          Your one-stop solution for managing businesses seamlessly with tailored tools and advanced integrations.
        </p>

        <ul className="space-y-8">
          <li className="flex items-start gap-4 animate-fade-in text-primary-text">
            <span className="text-2xl">🚀</span>
            <span>
              <span className="font-semibold">Get started quickly:</span> Integrate with developer-friendly APIs effortlessly.
            </span>
          </li>
          <li className="flex items-start gap-4 animate-fade-in delay-150 text-primary-text">
            <span className="text-2xl">🔧</span>
            <span>
              <span className="font-semibold">Support any business model:</span> Customizable solutions to fit your needs.
            </span>
          </li>
          <li className="flex items-start gap-4 animate-fade-in delay-300 text-primary-text">
            <span className="text-2xl">🌍</span>
            <span>
              <span className="font-semibold ">Join a global network:</span> Trusted by thousands of businesses worldwide.
            </span>
          </li>
        </ul>

        <div className="mt-16 flex gap-8 text-sm animate-fade-in text-primary-text">
          <a href="#" className="hover:underline hover:text-blue-300 transition-all">About</a>
          <a href="#" className="hover:underline hover:text-blue-300 transition-all">Terms & Conditions</a>
          <a href="#" className="hover:underline hover:text-blue-300 transition-all">Contact</a>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="flex items-center justify-center w-full lg:w-1/2 p-8 ">
        <div className="max-w-md w-full bg-background-section p-10 rounded-3xl shadow-lg ">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary-text">Welcome Back !</h2>
          </div>

          <div className="flex gap-4 mb-6">
            {/* <button className="flex items-center justify-center w-1/2 p-3 border rounded-xl text-white bg-gray-700 hover:bg-gray-600">
              <FaGoogle className="mr-2" /> Log in with Google
            </button> */}
            <GoogleSSO />
            {/* <button className="flex items-center justify-center w-1/2 p-3 border rounded-xl text-white bg-gray-700 hover:bg-gray-600">
              <FaApple className="mr-2" /> Log in with Apple
            </button> */}
          </div>

          <div className="text-center text-primary-text mb-4">or</div>

          {/* {error && <p className="text-red-500 text-sm mb-4">{error}</p>} */}












          <form onSubmit={handleLogin} className="space-y-6">




            {/* ============= icon-without-using-elative ========================== */}
            <>

              <label for="input-group-1" class=" text-primary-text">Email</label>

              <div class="flex">
                <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                </span>
                <input
                  type="email"
                  // id="website-admin"
                  class="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  value={email}

                />
              </div>








              <label for="input-group-1" class=" text-primary-text">Password</label>

              <div class="flex">
                <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                </span>
                <input
                  type="password"
                  // id="website-admin"
                  class="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  value={password}

                />
              </div>



            </>




            {/* 
            <div className="relative">
              <HiOutlineMail className="absolute left-4 top-3 text-gray-400" size={24} />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required

                className="w-full pl-14 p-4 border border-gray-700 rounded-xl focus:ring-4 focus:ring-accent focus:outline-none bg-gray-800 text-white"
              />
            </div> */}

            {/* <div className="relative">
              <HiOutlineLockClosed className="absolute left-4 top-3 text-gray-400" size={24} />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-14 p-4 border border-gray-700 rounded-xl focus:ring-4 focus:ring-accent focus:outline-none bg-gray-800 text-white"
              />
            </div> */}

            <div className="flex items-center justify-between text-sm text-gray-400">
              <label className="flex items-center text-primary-text">
                <input type="checkbox" className="mr-2 " /> Remember me
              </label>
              <a href="#" className="hover:underline text-primary-text">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="font-bold w-full bg-accent text-white p-4 rounded-xl border border-transparent hover:bg-white hover:text-blue-950 hover:font-bold hover:border-accent transition-all"
            >
              {loading ? <Loader /> : 'Login'}
            </button>
          </form>

          <p className="mt-8 text-center text-primary-text text-sm">
            Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminLogin;