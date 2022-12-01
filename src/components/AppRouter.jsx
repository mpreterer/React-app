import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AuthContext from "../context";

import { publicRoutes, privateRoutes } from "../router/routes";

const AppRouter = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} exact={route.exact} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} exact={route.exact} />
      ))}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRouter;
