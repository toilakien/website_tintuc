import { Grid } from "@mui/material";
import logo from "../assets/images/news-1644696_960_720.png";
import homeicon from "../assets/images/home-icon.png";
import usericon from "../assets/images/user-icon.png";
import searchicon from "../assets/images/search-cion.png";
import internal from "../assets/images/international-logo-svg-vector.svg";
import { Outlet } from "react-router-dom";
const BaseLayout = () => {
  return (
    <Grid>
      <Grid xs={12}>
        <header className="header">
          <div className="navigator">
            <div className="logo">
              <img style={{ width: "100%" }} src={logo} />
            </div>
            <div className="header-top">
              <div>
                <div className="international">
                  <img src={internal} />
                  <p>Internation vesion</p>
                </div>
              </div>
              <div className="address">
                <p>
                  Hà Nội
                  <br />
                </p>
                <div className="circle"></div>
              </div>
              <div style={{ borderLeft: "1px solid #ddd" }}>19 .C</div>
              <div>
                <a style={{ textDecoration: "nonelogo-user" }} href="">
                  Đăng nhập
                </a>
              </div>

              <div className="logo-user">
                <img style={{ width: "100%" }} src={usericon} />
              </div>

              <div className="logo-search">
                <img style={{ width: "100%" }} src={searchicon} />
              </div>
            </div>
          </div>
        </header>
        <div className="nav">
          <div className="display-flex">
            <a className="display-flex" href="/">
              <div className="home">
                <img style={{ width: "100%" }} src={homeicon} />
              </div>
              <div className="logo-2">
                <img style={{ width: "100%" }} src={logo} />
              </div>
            </a>
          </div>
          <ul className="menu">
            <li>
              <a href="">XÃ HỘI</a>
              <ul className="menu-item">
                <li>
                  <a href="/xahoi">Xa hội</a>
                </li>
                <li>
                  <a href="/chinhsachlamviec">CHÍNH SÁCH VIỆC LÀM</a>
                </li>
                <li>
                  <a href="">CHÚNG TÔI NÓI</a>
                </li>
                <li>
                  <a href="">hello my fridnf jjaj</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/chinhsachlamviec">CHÍNH SÁCH VIỆC LÀM</a>
            </li>
            <li>
              <a href="/thegioi">Thế giới</a>
            </li>
            <li>
              <a href="/video">Video</a>
            </li>
            <li>
              <a href="">Thể thao</a>
            </li>
            <li>
              <a href="">Việc làm</a>
            </li>
            <li>
              <a href="">Nhân ái</a>
            </li>
          </ul>
          <div className="display-flex">
            <div className="logo-2"></div>
          </div>
        </div>
      </Grid>
      <hr
        style={{
          border: "1px solid #ddd",
          width: "80%",
        }}
      />
      <Outlet />
      <Grid xs={12}>
        <hr />
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="footer-col">
                <h4>Thế giới</h4>
                <ul>
                  <li>
                    <a href="#">Liên hệ</a>
                  </li>
                  <li>
                    <a href="#">Dịch vụ</a>
                  </li>
                  <li>
                    <a href="#">Giá vàng</a>
                  </li>
                  <li>
                    <a href="#">Tin tức hóa</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Liên hệ</h4>
                <ul>
                  <li>
                    <a href="#">kien@gmail.com</a>
                  </li>
                  <li>
                    <a href="#">Ha NOi</a>
                  </li>
                  <li>
                    <a href="#">Liên kết khác</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Tin nóng</h4>
                <ul>
                  <li>
                    <a href="#">Tin nóng 24/7</a>
                  </li>
                  <li>
                    <a href="#">Thể thao</a>
                  </li>
                  <li>
                    <a href="#">Wc2022</a>
                  </li>
                  <li>
                    <a href="#">Chính trị</a>
                  </li>
                  <li>
                    <a href="#">VĂn Hóa</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Thị trường</h4>
                <ul>
                  <li>
                    <a href="#">Mỹ</a>
                  </li>
                  <li>
                    <a href="#">Việt Nam</a>
                  </li>
                  <li>
                    <a href="#">Liên minh eu</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Theo dõi chúng tôi</h4>
                <div className="social-links">
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Grid>
    </Grid>
  );
};
export default BaseLayout;
