import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../Layouts/ImportImage";
import WrapperContent from "../Layouts/WrapperContent";
import { formatLinkImage } from "../utils/fomatLinkImage";

const XaHoi = () => {
  const navigate = useNavigate();
  const handleClick = (e: any) => {
    navigate("/TinTucDetails", {
      state: {
        values: {
          title: e?.title,
          anh: formatLinkImage(e?.anh),
        },
      },
    });
  };
  return (
    <WrapperContent>
      {image.map((e, index) => {
        return (
          <div key={index} className="article-item hight">
            <img src={e.anh} alt="" />
            <br />

            <a onClick={() => handleClick(e)}>{e.title}</a>
          </div>
        );
      })}
      {image.map((e, index) => {
        return (
          <div key={index} className="article-item hight">
            <img src={e.anh} alt="" />
            <br />

            <a onClick={() => handleClick(e)}>{e.title}</a>
          </div>
        );
      })}
    </WrapperContent>
  );
};

export default XaHoi;
