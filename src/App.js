import "./styles/App.css";

import React, { useEffect, useState } from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";

import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import AuthContext from "./context";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <HashRouter>
        <Navbar />
        <AppRouter />
      </HashRouter>
    </AuthContext.Provider>
  );
}

export default App;
