import React from "react";
import "./sandesh.scss";

const Sandesh = () => {
  return (
    <div className="sandesh">
      <div className="heading">
        <h1>शुभकामना - संदेश</h1>
        <h2>इस साहित्य उत्सव के बारे में प्रतिनिधि क्या कह रहे हैं</h2>
      </div>
      <div className="cards">
        <div className="card">
          <div className="card" style={{ width: "20rem", height: "20rem" }}>
            <p className="card-text">
              मुझे यह जानकर खुशी है कि पटना में 25, 26 मार्च को चन्द्रगुप्त
              साहित्य महोत्सव का आयोजन हो रहा है। इसमें देश और प्रदेश की राजनीति
              पर भी चर्चा होनी है।
            </p>
            <div className="card-body">
              <h4 className="card-title">डॉ० रवीन्द्र नारायण सिंह</h4>
              <h5 className="card-title">
                राष्ट्रीय अध्यक्ष, विश्व हिन्दू परिषद
              </h5>
              <a href="#" className="btn btn-primary">
                पूरा सन्देश पढ़े
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card" style={{ width: "20rem", height: "20rem" }}>
            <p className="card-text">
              यह जानकर हार्दिक प्रसन्नता हुई कि स्काउट एण्ड गाइड परिसर, पटना में
              25 एवं 26 मार्च,2023 को चन्द्रगुप्त साहित्य महोत्सव का आयोजन किया
              जा रहा है।
            </p>
            <div className="card-body">
              <h4 className="card-title">श्री राजेन्द्र विश्‍वानाथ आर्लेकर</h4>
              <h5 className="card-title">महामहिम राज्यपाल, बिहार</h5>
              <a href="#" className="btn btn-primary">
                पूरा सन्देश पढ़े
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card" style={{ width: "20rem", height: "20rem" }}>
            <p className="card-text">
              मुझे अतीव प्रसन्नता है कि पटना में 25 और 26 मार्च, 2023 को
              चन्द्रगुप्त साहित्य महोत्सव का आयोजन किया जा रहा है। मै इस
              कार्यक्रम की सफलता की कामना करता हूँ
            </p>
            <div className="card-body">
              <h4 className="card-title">डॉ० महेश चन्द्र शर्मा</h4>
              <h5 className="card-title">
                अध्यक्ष, एकात्म मानवदर्शन अनुसंधान एवं विकास प्रतिष्ठान
              </h5>
              <a href="#" className="btn btn-primary">
                पूरा सन्देश पढ़े
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card" style={{ width: "20rem", height: "20rem" }}>
            <p className="card-text">
              यह जानकर प्रसन्नता हुई कि पाटलिपुत्र की धरती पर 25 और 26 मार्च, को
              दो दिवसीय चन्द्रगुप्त साहित्य महोत्सव का आयोजन हो रहा है।
            </p>
            <div className="card-body">
              <h4 className="card-title">डॉ० अरुण कुमार भगत</h4>
              <h5 className="card-title">सदस्य, बिहार लोकसेवा आयोग</h5>
              <a href="#" className="btn btn-primary">
                पूरा सन्देश पढ़े
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="videos">
        <div className="video">
          <video
            controls
            src={"/first_video.mp4"}
            style={{ width: "700px", height: "400px" }}
          />
        </div>
        <div className="video">
          <video
            controls
            src={"/second_video.mp4"}
            style={{ width: "400px", height: "700px" }}
          />
        </div>
        <div className="video">
          <video
            controls
            src={"/third_video.mp4"}
            style={{ width: "600px", height: "400px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Sandesh;
