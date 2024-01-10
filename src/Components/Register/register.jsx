import React from "react";

import Image from "next/image";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="bg-img">
        <Image
          src="/bg.png"
          width={1680}
          height={780}
          alt="Picture of the author"
        />
      </div>
      <div className="content">
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">"Chandrgupt Literature Festival: Celebrating Our Culture and Language"</h5>
            <p className="card-text">
            Come, join us at the chandrgupt Literature Festival and experience the joy of our culture and language. In this grand celebration, we welcome you with music, poetry, stories, plays, and language. Your presence is important to us. Register now and become a participant in this festival.
            </p>
            <a href="#" className="btn btn-primary">
              Register Now
            </a>
            <a href="#" className="btn btn-primary">
              Event Schedule
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
