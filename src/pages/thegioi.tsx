import React from "react";
import image1 from "../Layouts/ImportImage1";
import MyVideoComponent from "../Layouts/myvideo";
import WrapperContent from "../Layouts/WrapperContent";

const TheGioi = () => {
  return (
    <WrapperContent>
      {image1.map((e, index) => {
        return (
          <div key={index} className="article-item hight">
            <img src={e.anh} alt="" />
            <br />

            <a href="/TinTucDetails">{e.title}</a>
          </div>
        );
      })}
    </WrapperContent>
  );
};

export default TheGioi;
