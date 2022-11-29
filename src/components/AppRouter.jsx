import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { publicRoutes, privateRoutes } from "../router/routes";

const AppRouter = () => {
  const isAuth = false;

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={route.element} exact={route.exact} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.element} exact={route.exact} />
      ))}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRouter;
