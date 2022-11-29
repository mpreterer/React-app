import React from "react";
import { Route, Routes } from "react-router-dom";

import { publicRoutes, privateRoutes } from "../router/routes";

const AppRouter = () => {
  return (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={route.element} exact={route.exact} />
      ))}
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.element} exact={route.exact} />
      ))}
    </Routes>
  );
};

export default AppRouter;
