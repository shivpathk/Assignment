import React from "react";
import Image from "next/image";
import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="logo">
        <Image
          src="/logo.png"
          width={180}
          height={180}
          alt="Picture of the author"
        />
      </div>
      <div className="header">
        <h1>चंद्रगुप्त</h1>
        <h2>साहित्य महोत्सव</h2>
      </div>
      <div className="subheader">
        <h2>
          ज्ञान, विज्ञान, कला, साहित्य और संस्कृति को समर्पित अंतरराष्ट्रीय
          महोत्सव{" "}
        </h2>
      </div>
      <div className="content">
        <p>
          भारतीय इतिहास में पाटलिपुत्र का महत्वपूर्ण स्थान है। कालांतर में इसे
          ही बिहार की राजधानी पटना के नाम से जाना जाता है। यह अपने अतीत गौरव को
          संरक्षित रखते हुए आज भी देवसलिला श्रीगंगा के पावन तीर पर ज्ञान,
          विज्ञान, कला, साहित्य, संस्कृति का संरक्षण उसी गर्व के साथ कर रहा है।
          इसी के उत्तर में वैशाली में भगवान् महावीर ने उपदेश दिए थे और दक्षिण
          में बोधगया में महात्मा बुद्ध ने ज्ञान प्राप्त किया था। इसी के समीप
          गंगा और गंडक के तट पर सोनपुर में भगवान् ‘हरिहर’ का पावन मंदिर है। कुछ
          दूर पूर्व में मंदार पर्वत है, जिससे समुद्र-मंथन किया गया था। इसी भूमि
          पर धर्मशील चंद्रगुप्त जैसे यशस्वी सम्राट् और महर्षि चाणक्य जैसे
          महामनीषी हुए, जिन्होंने ज्ञान और संस्कृति की अजस्र धारा प्रवाहित की।
          यहीं गणितज्ञ एवं ज्योतिषविद् आर्यभट्ट हुए। इसी के मिथिला भूभाग में
          मंडन मिश्र जैसे शास्त्रज्ञ एवं विद्यापति जैसे कवि हुए थे।
        </p>
      </div>
      <div className="button">
        <button type="button" class="btn btn-primary">
          Know More
        </button>
      </div>
    </div>
  );
};

export default About;
