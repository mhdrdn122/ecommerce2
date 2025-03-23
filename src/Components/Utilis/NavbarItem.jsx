import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
import { AuthContext } from "../../Auth/Context/AuthProvider";
const NavbarItem = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  const navigate = useNavigate();

  // authinfo
  const { user, logOut } = useContext(AuthContext);

  // addEvent listener
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });

  const handelLogOut = () => {
    logOut();
    navigate("/");
  };
  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`}
    >
      {/* header top  start */}
      <div className={`header-top d-md-none  ${socialToggle ? "open" : ""}`}>
        <Container>
          {!user ? (
            <div className="header-top-area">
              <Link to="/signup" className="lab-btn me-3 ">
                <span>Create Account </span>
              </Link>
              <Link to="/login">log in</Link>
            </div>
          ) : (
            <Link onClick={handelLogOut}  className="lab-btn me-3 ">
            <span>log out </span>
          </Link>
          )}
        </Container>
      </div>
      {/* header top End */}

      {/* header button Start */}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* logo start  */}
            <div className="logo-search-acte">
              <div className="logo">
                <Link to={"/"}>
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            {/* logo end  */}

            {/* menu start  */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    {" "}
                    <Link to="/">Home </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/shop">shop </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/blog">Blog </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/about">About </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/contact">Contact </Link>
                  </li>
                </ul>
              </div>
              {/* sign in & log in start  */}

              {!user ? (
                <>
                  <Link
                    to="/sign-up"
                    className="lab-btn me-3 d-none d-md-block"
                  >
                    Create Account
                  </Link>

                  <Link to="/login" className=" d-none d-md-block">
                    Log In
                  </Link>
                </>
              ) : (
                <Link
                  onClick={handelLogOut}
                  className="lab-btn me-3 d-none d-md-block"
                >
                  Log Out
                </Link>
              )}
              {/* sign in & log in  end */}

              {/* menu toggler start  */}
              <div
                onClick={() => setMenuToggle(!menuToggle)}
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              {/* menu toggler end  */}

              {/* social toggler start  */}
              <div
                className="ellepsis-bar d-md-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i className="icofont-info-square"></i>
              </div>
              {/* social toggler end  */}
            </div>

            {/* menu end  */}
          </div>
        </div>
      </div>

      {/* header button End */}
    </header>
  );
};

export default NavbarItem;
