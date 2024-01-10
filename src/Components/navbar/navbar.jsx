"use client";
import React,{useState} from "react";
import './navbar.scss'

const Navbar = () => {


  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#" >
                  EVENT
                </a>
              </li>
              <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#" >
                  SCHEDULE
                </a>
              </li>
              <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#" >
                  SWAGATI SAMITI
                </a>
              </li>
              <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#" >
                  AAYOJAN SAMITI
                </a>
              </li>
              <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#" >
                  CONTACT US
                </a>
              </li>
            </ul>
            <button type="button" class="btn btn-danger">Register Now</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
