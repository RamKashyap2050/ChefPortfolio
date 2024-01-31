import React from "react";

const UserHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-smoky-white">
      <a className="navbar-brand" href="/" style={{ fontWeight: "bolder" }}>
        Chef Vithu
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#chef-navbar-nav"
        aria-controls="chef-navbar-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="chef-navbar-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/portfolio">
              Culinary Portfolio
            </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="/specialties">
              Specialties
            </a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default UserHeader;
