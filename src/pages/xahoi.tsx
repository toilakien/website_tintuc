import React from "react";
import image from "../Layouts/ImportImage";
import WrapperContent from "../Layouts/WrapperContent";

const XaHoi = () => {
  return (
    <WrapperContent>
      {image.map((e, index) => {
        return (
          <div key={index} className="article-item hight">
            <img src={e.anh} alt="" />
            <br />

            <a href="/TinTucDetails">{e.title}</a>
          </div>
        );
      })}
      {image.map((e, index) => {
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

export default XaHoi;
