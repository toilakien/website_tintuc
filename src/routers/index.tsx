import React from "react";
import { useRoutes } from "react-router-dom";
import MainRouter from "./MainRouter";

const Routers = () => {
  return useRoutes([MainRouter]);
};

export default Routers;
