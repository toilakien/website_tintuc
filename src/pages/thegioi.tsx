import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../Layouts/ImportImage1";
import MyVideoComponent from "../Layouts/myvideo";
import WrapperContent from "../Layouts/WrapperContent";
import { formatLinkImage } from "../utils/fomatLinkImage";

const TheGioi = () => {
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
      {image1.map((e, index) => {
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

export default TheGioi;
