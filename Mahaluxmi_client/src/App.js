import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import TopMenu from "./components/TopMenu";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.min.css";
import { appRoutes } from "./routes";
import { useSelector } from "react-redux";
import SignInView from "./views/account/SignIn";
import SignUpView from "./views/account/SignUp";
// Import your Sign In component

function App() {
  // Get authentication status from Redux store
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [showSidebarAndNavbar, setShowSidebarAndNavbar] = useState(false);

  useEffect(() => {
    // Show or hide the sidebar and navbar based on authentication status
    setShowSidebarAndNavbar(isAuthenticated);
  }, [isAuthenticated]);

  return (
    <BrowserRouter>
      <React.Fragment>
        {/* Conditionally render Header, TopMenu, and Footer if authenticated */}
        {showSidebarAndNavbar && (
          <>
            <Header />
            <TopMenu />
          </>
        )}
        <Suspense fallback={<div className="text-white text-center mt-3">Loading...</div>}>
          <Routes>
            <Route path="/account/signup" element={<SignUpView />} />
            {!isAuthenticated ? (
              <Route path="*" element={<SignInView />} />
            ) : (
              appRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))
            )}
            <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <SignInView />} />
            <Route path="" element={isAuthenticated ? <Navigate to="/home" /> : <SignInView />} />
          </Routes>

        </Suspense>
        {/* Conditionally render Footer if authenticated */}
        {showSidebarAndNavbar && <Footer />}
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
