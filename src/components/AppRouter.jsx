import React from "react";
import { Route, Router, Routes } from "react-router-dom";

import routes from "../router/routes";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          path={route.path}
          element={route.element}
          exact={route.exact}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
