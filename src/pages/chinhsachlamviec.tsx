import React from "react";
import image from "../Layouts/ImportImage";
import MyVideoComponent from "../Layouts/myvideo";
import WrapperContent from "../Layouts/WrapperContent";

const Chinhsachlamviec = () => {
  return (
    <WrapperContent>
      <div className="display-flex">
        {image.map((e, index) => {
          return (
            <div key={index} className="article-item hight">
              <img src={e.anh} alt="" />
              <br />

              <a href="/TinTucDetails">{e.title}</a>
            </div>
          );
        })}
      </div>
      <hr />
      <br />

      <div>
        <h2>Các tin tức khác</h2>
        <div className="display-flex">
          {image.map((e, index) => {
            return (
              <div
                key={index}
                style={{ display: "flex", flexWrap: "nowrap" }}
                className="article-item medium"
              >
                <img src={e.anh} alt="" />
                <br />

                <a href="">{e.title}</a>
              </div>
            );
          })}
        </div>
      </div>
    </WrapperContent>
  );
};

export default Chinhsachlamviec;
