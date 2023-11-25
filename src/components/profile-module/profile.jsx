import "./profile-style.scss";
import profileContainer from "./Images/Profile Container.png";
import pinfo from "./Images/Icons/personal-infromation.png";
import contact from "./Images/Icons/Contacts.png";
import order from "./Images/Icons/List.png";
import cart from "./Images/Icons/Carts.png";
import location from "./Images/Icons/Location.png";
import mail from "./Images/Icons/Mail.png";
import settings from "./Images/Icons/Settings.png";
import support from "./Images/Icons/Support.png";
import signout from "./Images/Icons/Signout.png";
import edit from "./Images/Icons/Edit.png";
import noOrder from "./Images/Icons/no_order.png";

var name = "Febrico Jonata";
var money = "Rp. 205.000";

function Profile() {
  return (
    <div class="container my-5 min-vh-100 main-profile">
      <div class="row pt-5">
        {/* SIDEBAR MENU */}
        <div className="col-4 d-flex flex-column">
          <Sidebar />
          <div className="sticky-top pt-3">
            <Menus />
            <Menus2 />
          </div>
        </div>

        {/* BAGIAN KANAN */}
        <div class="col-8 border border-secondary roundstyle">
          <div className="container min-vh-100">
            <div className="row">
              {/* ITEM 1 */}
              <div className="container">
                <div className="container-fluid">
                  <h3 class="text-start mx-3 my-5">Personal Information</h3>
                </div>
                <div className="row">
                  <div className="col-4">
                    <div className="container-fluid d-flex align-items-center h-100 row">
                      <div className="col-10 h-100 d-flex align-items-center justify-content-center">
                        <img src={profileContainer}></img>
                      </div>
                      <div className="col-2 h-100">
                        <a class="btnhover" href="">
                          <img src={edit} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="row">
                      <div className="col-10">
                        <ProfileBio label={"Name"} content={"Febrico Jonata"} />
                        <ProfileBio
                          label={"Date of birth"}
                          content={"dd mm yy"}
                        />
                        <ProfileBio label={"Gender"} content={"other"} />
                        <ProfileBio label={"Phone number"} content={"08xxxx"} />
                        <ProfileBio
                          label={"Email"}
                          content={"rico@gmail.com"}
                        />
                      </div>
                      <div className="col-2">
                        <a class="btnhover" href="">
                          <img src={edit} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ITEM 2 */}
              <div class="container mt-3">
                <div className="container-fluid">
                  <h3 class="text-start">My orders</h3>
                </div>
                <div className="container-fluid orderstyle py-5 border border-secondary roundstyle">
                  <div className="container ">
                    <div className="py-4 row d-flex flex-column align-items-center justify-content-center">
                      <div className="col-12">
                        <img src={noOrder} alt="" />
                      </div>
                      <div className="col-12">
                        <h3 class="text-white mt-1">No orders yet</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ITEM 3 */}
              <div class="container mt-5">
                <div className="container-fluid">
                  <h3 class="text-start">My Address</h3>
                </div>
                <div className="container-fluid py-3 border border-secondary roundstyle addrstyle">
                  <div className="row">
                    <div className="col-12 d-flex">
                      <span class="fw-bold mx-3">Rumah</span>
                      <div className="badge badgestyle text-black p-2">
                        Utama
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="container text-start my-3">
                        <h3 class="fs-5">Febrico Jonata</h3>
                        <h3 class="fs-5">+6281x xxxx xxxx</h3>
                        <h3 class="fs-5">
                          Jl. Kyai Haji Taisir No. 90A, RW. 11, Kec. Palmerah,
                          Jakarta, Daerah Khusus Ibukota Jakarta 11480{" "}
                        </h3>
                      </div>
                    </div>
                    <div className="col-12 d-flex">
                      <div class="mx-2">
                        <a class="text-decoration-none" href="">
                          <h3 class="fs-5 txtbtn">share</h3>
                        </a>
                      </div>

                      <h3 class="txtbtn2">|</h3>

                      <div className="mx-2">
                        <a class="text-decoration-none" href="">
                          <h3 class="fs-5 txtbtn">edit</h3>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 container-fluid py-3 border border-secondary roundstyle">
                  <div className="row">
                    <div className="col-12 d-flex">
                      <span class="fw-bold mx-3">Kantor</span>
                    </div>
                    <div className="col-12">
                      <div className="container text-start my-3">
                        <h3 class="fs-5">Febrico Jonata</h3>
                        <h3 class="fs-5">+6281x xxxx xxxx</h3>
                        <h3 class="fs-5">
                          Jl. Kyai Haji Taisir No. 90A, RW. 11, Kec. Palmerah,
                          Jakarta, Daerah Khusus Ibukota Jakarta 11480{" "}
                        </h3>
                      </div>
                    </div>
                    <div className="col-12 d-flex">
                      <div class="mx-2">
                        <a class="text-decoration-none" href="">
                          <h3 class="fs-5 txtbtn">share</h3>
                        </a>
                      </div>

                      <h3 class="txtbtn2">|</h3>

                      <div className="mx-2">
                        <a class="text-decoration-none" href="">
                          <h3 class="fs-5 txtbtn">edit</h3>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ITEM 4 */}
              <div class="container my-5">
                <div className="container-fluid">
                  <h3 class="text-start">Contact Information</h3>
                </div>
                <div className="container border border-secondary roundstyle">
                  <div className="row my-3">
                    <div className="col-10 d-flex flex-column">
                      <div className="row">
                        <ProfileBio label={"Name"} content="Febrico Jonata" />
                        <ProfileBio
                          label={"Instagram"}
                          content="influencerLink"
                        />
                        <ProfileBio label={"Work Number"} content="08xxxx" />
                        <ProfileBio
                          label={"Email"}
                          content="febricoJonata@gmail.com"
                        />
                        <ProfileBio label={"Fax"} content="1-234-xx" />
                      </div>
                    </div>
                    <div className="col-2">
                      <a class="btnhover" href="">
                        <img src={edit} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div>
      {/* PROFILE */}
      <div class="border border-secondary roundstyle mx-5 mb-5">
        <div class="container-fluid my-3">
          <div class="container-fluid d-flex align-items-center flex-column containerprofile">
            <div className="col flex-grow-1">
              <img class="img-fluid" src={profileContainer}></img>
              <h3 class="fs-4 mt-3">{name}</h3>
            </div>
            <div className="col flex-grow-0">
              <h3 class="fs-4">{money}</h3>
              <p class="text-secondary">balance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Menus() {
  return (
    <div class="border border-secondary roundstyle mx-5 mb-5">
      <div class="my-3 d-flex flex-column justify-content-center">
        <a href="" class="text-decoration-none">
          <Submenus icon={pinfo} label={"Personal Information"} />
        </a>

        <a href="" class="text-decoration-none">
          <Submenus icon={order} label={"My order"} />
        </a>

        <a href="" class="text-decoration-none">
          <Submenus icon={location} label={"My Address"} />
        </a>

        <a href="" class="text-decoration-none">
          <Submenus icon={contact} label={"Contact Information"} />
        </a>

        <a href="" class="text-decoration-none">
          <Submenus icon={cart} label={"Cart"} />
        </a>

        <a href="" class="text-decoration-none">
          <Submenus icon={mail} label={"Mail"} />
        </a>
      </div>
    </div>
  );
}

function ProfileBio({ label, content }) {
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-6 d-flex align-items-start">
          <h5 class="fs-5 text-secondary">{label}</h5>
        </div>
        <div className="col-6 d-flex align-items-start">
          <h5 class="fs-5">{content}</h5>
        </div>
      </div>
    </div>
  );
}

function Menus2() {
  return (
    <div class="border border-secondary roundstyle mx-5 mb-5">
      <div class="my-3">
        <a href="" class="text-decoration-none">
          <Submenus icon={settings} label={"Settings"} />
        </a>

        <a href="" class="text-decoration-none">
          <Submenus icon={support} label={"Support"} />
        </a>

        <a href="" class="text-decoration-none">
          <Submenus icon={signout} label={"Sign out"} />
        </a>
      </div>
    </div>
  );
}

function Submenus({ icon, label }) {
  return (
    <div class="container-fluid py-4 menuStyling">
      <div className="d-flex">
        <div className="col-3">
          <img src={icon} alt="" />
        </div>
        <div className="col-9 mx-3 d-flex">
          <h5 class="text-black">{label}</h5>
        </div>
      </div>
    </div>
  );
}

export default Profile;
