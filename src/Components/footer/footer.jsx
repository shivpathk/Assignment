import React from "react";
import "./footer.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-image">
      <Image
        src="/footer.png"
        width={1690}
        height={350}
        alt="Picture of the author"
      />
      </div>
    </div>
  );
};

export default Footer;
