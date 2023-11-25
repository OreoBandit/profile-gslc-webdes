import ig from "./Image/ig.png";
import x from "./Image/twt.png";
import drib from "./Image/dribble.png";
import li from "./Image/linkedin.png";
import fb from "./Image/fb.png";
import logo from "./Image/logo.png";
import "./footer-style.scss";

function Footer() {
  return (
    <div class="container-fluid bg-footer main-footer">
      <div class="row">
        {/* LOGO AND MENU */}
        <div class="col-12 col-md-6 col-lg-4">
          <div class="container-fluid d-flex align-items-center justify-content-center flex-column">
            <img class="img-fluid img-size" src={logo} alt="" />
            <h4 class="text-start fs-5">© 2023 InfluencerLink</h4>
            <h4 class="text-start fs-5">Bina Nusantara University</h4>
          </div>
        </div>

        {/* SUBMENUS */}
        <div class="col-12 col-md-6 col-lg-4 container-fluid d-flex align-items-center">
          <div class="row d-flex container-fluid flex-between justify-content-center mx-5">
            <Menus
              title={"About"}
              m1={"Contact Us"}
              m2={"Popular Talents"}
              m3={"Media Partners"}
              m4={"Testimonials"}
            />

            <Menus
              title={"Legal"}
              m1={"Terms"}
              m2={"Conditions"}
              m3={"Privacy Policy"}
            />

            <Menus title={"Shop"} m1={"Talents"} m2={"Categories"} />
          </div>
        </div>

        {/* SOCIAL MEDIA */}
        <div class="col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center ">
          <div class="d-flex container-fluid justify-content-evenly align-items">
            <a href="">
              {" "}
              <img class="imgstyle" src={fb} alt="" />{" "}
            </a>
            <a href="">
              {" "}
              <img class="imgstyle" src={ig} alt="" />
            </a>
            <a href="">
              {" "}
              <img class="imgstyle" src={li} alt="" />
            </a>
            <a href="">
              {" "}
              <img class="imgstyle" src={drib} alt="" />
            </a>
            <a href="">
              {" "}
              <img class="imgstyle" src={x} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Menus({ title, m1, m2, m3, m4 }) {
  return (
    <div class="col-4 container-fluid d-flex flex-column text-start">
      <h3 class="fs-5 fw-bold py-4">{title}</h3>
      <a class="text-decoration-none" href="">
        <h3 class="menu-btn">{m1}</h3>
      </a>
      <a class="text-decoration-none" href="">
        <h3 class="menu-btn">{m2}</h3>
      </a>
      <a class="text-decoration-none" href="">
        <h3 class="menu-btn">{m3}</h3>
      </a>
      <a class="text-decoration-none" href="">
        <h3 class="menu-btn">{m4}</h3>
      </a>
    </div>
  );
}

export default Footer;
