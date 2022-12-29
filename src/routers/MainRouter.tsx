import React, { Children } from "react";
import BaseLayout from "../Layouts/BaseLayout";
import Chinhsachlamviec from "../pages/chinhsachlamviec";
import TheGioi from "../pages/thegioi";
import TinTucDetails from "../pages/tintuc-details";
import Video from "../pages/video";
import XaHoi from "../pages/xahoi";

const MainRouter = {
  path: "",
  element: <BaseLayout></BaseLayout>,
  children: [
    {
      path: "/",
      element: <XaHoi />,
    },
    {
      path: "/xahoi",
      element: <XaHoi />,
    },
    {
      path: "/chinhsachlamviec",
      element: <Chinhsachlamviec />,
    },
    {
      path: "/thegioi",
      element: <TheGioi />,
    },
    {
      path: "/video",
      element: <Video />,
    },
    {
      path: "/TinTucDetails",
      element: <TinTucDetails />,
    },
  ],
};

export default MainRouter;
