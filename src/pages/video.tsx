import { Grid } from "@mui/material";
import React from "react";
import image from "../Layouts/ImportImage";
import MyVideoComponent from "../Layouts/myvideo";
import Video2 from "../Layouts/video2";
import WrapperContent from "../Layouts/WrapperContent";

const Video = () => {
  return (
    <WrapperContent>
      <div style={{ width: "100%", display: "flex", alignItems: "flex-start" }}>
        <MyVideoComponent />
        <div style={{ width: "100%", padding: "30px", fontSize: "1.6rem" }}>
          <br />
          <b>Khẩu trang y tế - Câu chuyện mùa dịch</b>
          <p>
            Khẩu trang y tế - Câu chuyện mùa dịch 18/02/2020 Kể từ khi Việt Nam
            công bố 2 ca nhiễm bệnh viêm đường hô hấp cấp do chủng mới của vi
            rút Corona (Covid-19) cảnh báo nguy cơ dịch bệnh có thể bùng phát
            bất cứ lúc nào thì từ khóa “khẩu trang y tế” trở thành chủ đề “nóng”
            nhận được sự quan tâm nhiệt tình của công chúng. -Lo sợ dịch bệnh,
            người dân thành phố Gia Nghĩa đổ xô đi mua khẩu trang, dẫn tới tình
            trạng “cháy hàng”. Đây cũng là tình hình chung ở các huyện. Bên cạnh
            dòng chữ “hết khẩu trang” thường thấy tại các quầy thuốc thì việc
            tăng giá bán cũng là vấn nạn nhức nhối. Trước tình hình này, Thanh
            tra Sở Y tế đã khẩn trương thành lập đoàn công tác
          </p>
        </div>
      </div>
      <br />
      <div>
        <b>Tin tức khác</b>
        <div style={{ display: "flex", alignItems: "center" }}>
          {image.map((e, index) => {
            return (
              <div key={index} className="article-item hight">
                <img src={e.anh} alt="" />
                <br />

                <a href="">{e.title}</a>
              </div>
            );
          })}{" "}
        </div>
      </div>
    </WrapperContent>
  );
};

export default Video;
