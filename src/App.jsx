import React, { useEffect, useState } from 'react';
import MobileOnly from './Components/Mobile';
import { HashRouter, Route, Routes } from 'react-router-dom';
import SplashScreen from './Pages/SplashScreen';
import ManageTask from './Pages/ManageTask';
import Welcome from './Pages/Welcome';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import ResetPassword from './Pages/Reser-Password';

const App = () => {
  const [loading, setLoading] = useState(true); // Set initial loading state to true

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <MobileOnly>
       <HashRouter>
        <Routes>
          {/* Render SplashScreen only when loading and path is '/' (ManageTask) */}
          {loading ? (
            <Route path="/" element={<SplashScreen />} /> 
          ) : (
            <Route path="/" element={<ManageTask />} /> 
          )}

          {/* Other routes not affected by the loading state */}
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </HashRouter>
    </MobileOnly>
  );
};

export default App;
