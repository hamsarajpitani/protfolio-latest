/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Navbar = () => {
  return (
    <div className="nav d-flex justify-content-between align-items-center">
      <div className="nav__brand">Hello.</div>
      <div className="nav__options d-flex align-items-center justify-content-center">
        <ul className='d-flex justify-content-center align-items-center  list-unstyled'>
          <li>
            <a href="" className="active">about</a>{" "}
          </li>
          <li>  
            <a href="">Protfolio</a>{" "}
          </li>
          <li>
            <a href="">Skills</a>{" "}
          </li>
        </ul>
      </div>
      <div className="nav__contact d-flex align-items-center">
        <a href="" className="nav__contact__btn">contact</a>
      </div>
    </div>
  );
};

export default Navbar;
