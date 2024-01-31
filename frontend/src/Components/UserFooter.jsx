import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const UserFooter = () => {
  const vithurakanData = JSON.parse(localStorage.getItem("VithurakanData"));

  return (
    <footer className="bg-smoky-white text-center py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-md-left mb-3">
            <h4>Contact Information</h4>
            <p>
              <strong>Email:</strong> Vithurakan@gmail.com
              <br />
              <strong>Phone:</strong> +1 (514) 662 6519
            </p>
          </div>
          <div className="col-md-6 text-md-right">
            <h4>Connect With Me</h4>
            <div className="social-icons">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaFacebook />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaInstagram />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaTwitter />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-3" />
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Chef Vithu | All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
};

export default UserFooter;
