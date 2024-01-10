import React from "react";
import Image from "next/image";
import "./address.scss";

const Address = () => {
  return (
    <div className="address">
      <div className="first">
        <div className="map">
          <Image
            src="/map.png"
            className="map_image"
            width={595}
            height={375}
            alt="Picture of the author"
          />
          <div className="content">
            <h2>104-105(10th Floor),Surya Apprartment,Fraser Road,Patna<br/><br/><span>25th March -26th March,2023</span></h2>
          </div>
        </div>
        <div className="date">
          <Image
            src="/time.png"
            width={1095}
            height={375}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="last">
        <div className="title">
          <h1>आयोजन स्थान</h1>
          <h2>भारत स्काउट्स एण्ड गाइड्स ग्राउंड, बुद्ध मार्ग, छज्जूबाग, पटना - ८००००१</h2>
        </div>
      </div>
    </div>
  );
};

export default Address;
