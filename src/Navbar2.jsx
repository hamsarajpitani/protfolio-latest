/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";

const Navbar2 = () => {
  useEffect(() => {
    // define all UI variable
    const navToggler = document.querySelector(".nav-toggler");
    const navMenu = document.querySelector(".site-navbar ul");
    const navLinks = document.querySelectorAll(".site-navbar a");
    // functions of all event listners
    function allEventListners() {
      // toggler icon click event
      if (navToggler) navToggler.addEventListener("click", togglerClick);
      // nav links click event
      navLinks.forEach((elem) => elem.addEventListener("click", navLinkClick));
    }

    // togglerClick function
    function togglerClick() {
      navToggler.classList.toggle("toggler-open");
      navMenu.classList.toggle("open");
    }

    // navLinkClick function
    function navLinkClick() {
      if (navMenu.classList.contains("open")) {
        navToggler.click();
      }
    }
    // load all event listners
    allEventListners();
  });

  return (
    <div>
      <div class="navbar-area">
        <div class="container-fluid px-5">
          <nav class="site-navbar">
            <a href="#home" class="site-logo">
              Hello.
            </a>

            <ul>
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a href="#">service</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
            </ul>
            <div id="contact" className="contact d-flex align-items-center">
              <a href="" className="btn__contact">
                contact
              </a>
            </div>
            <button class="nav-toggler">
              <span></span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
