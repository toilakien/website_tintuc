import { display } from "@mui/system";
import React from "react";
import image from "../Layouts/ImportImage";

const TinTucDetails = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Details</h1>
      <div className="display-flex" style={{ alignItems: "flex-start" }}>
        <div style={{ width: "70%" }}>
          <h2>
            Tin tức 24h: Không khí lạnh cực mạnh tràn về, vùng núi xuất hiện
            băng giá
          </h2>
          <img src="https://image-us.24h.com.vn/upload/3-2020/images/2020-08-15/Tin-tuc-24h-qua-Mot-benh-nhan-COVID-19-bi-bo-lot-sau-nhieu-lan-di-kham-o-Hai-Duong-va-Ha-Noi-a4-1597496230-142-width960height590.jpg"></img>
          <p>
            Thi hành bản án hình sự đối với Lê Tùng Vân vụ Tịnh thất Bồng Lai;
            Vụ 3,2 triệu sách giáo khoa giả: Tiếp tục truy tố ông Trần Hùng nhận
            hối lộ; Không khí lạnh cực mạnh tràn về miền Bắc, vùng núi xuất hiện
            băng giá; Em trai Ánh Viên phá kỷ lục đường đua 400m tại Đại hội Thể
            thao toàn quốc;...Từng là nhân viên của công ty Alibaba, chị L.V.T
            cho biết mình đã tư vấn cho rất nhiều khách hàng mua các dự án của
            công ty Alibaba và hoàn toàn không biết đó là những dư án “ma”. Bản
            thân chị T cũng đầu tư và mất số tiền rất lớn. Đứng trước tòa, chị T
            chỉ mong muốn đòi quyền lợi cho khách hàng và cho cả bản thân mình.
          </p>
          <i>Tin tức khác</i>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {image.map((e, index) => {
              return (
                <div key={index} className="article-item display-flex medium">
                  <img src={e.anh} alt="" />
                  <br />

                  <a href="/TinTucDetails">{e.title}</a>
                </div>
              );
            })}
          </div>
        </div>
        <div>
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
      </div>
    </div>
  );
};

export default TinTucDetails;
