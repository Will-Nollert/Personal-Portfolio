import React from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="www.linkedin.com/in/willnollert">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/nollert_cycles/">
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/">
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
