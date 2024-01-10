import React from "react";
import Image from "next/image";
import "./sanyojak.scss";

const Sanyojak = () => {
  return (
    <div className="sanyojak">
      <div className="sanyojak-cards">
        <h1 className="Title">संयोजक</h1>
        <div className="card-start">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card">
                <Image
                  src="/sanyojak.png"
                  width={150}
                  height={150}
                  alt="Picture of the author"
                />
                <div class="card-body">
                  <h5 class="card-title">प्रो. डॉ. राजेन्द्र प्रसाद गुप्ता</h5>
                  <p class="card-text">सदस्य, बिहार विधान परिषद</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="Title">सह संयोजक</h1>
      <div className="sahsanyojak-cards">
        <div className="card-start">
          <div className="card">
            <Image
              src="/sahsanyojak1.png"
              width={150}
              height={150}
              alt="Picture of the author"
            />
            <div className="card-body">
              <h5 className="card-title">श्री मिथिलेश कुमार सिंह</h5>
              <p className="card-text">लेखक एवं समाजसेवी</p>
            </div>
          </div>
          <div className="card">
            <Image
              src="/sahsanyojak2.png"
              width={150}
              height={150}
              alt="Picture of the author"
            />
            <div className="card-body">
              <h5 className="card-title">श्री संजीव कुमार</h5>
              <p className="card-text">पत्रकार</p>
            </div>
          </div>
          <div className="card">
            <Image
              src="/sahsanyojak1.png"
              width={150}
              height={150}
              alt="Picture of the author"
            />
            <div className="card-body">
              <h5 className="card-title">गौरव रंजन</h5>
              <p className="card-text">जनसंचार अध्येता</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sanyojak;
