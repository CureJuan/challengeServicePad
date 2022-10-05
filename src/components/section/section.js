import React from "react";
import "./section.css";
import { Img1 } from "../../assets/img/img1";
import { Img2 } from "../../assets/img/img2";
import { Img3 } from "../../assets/img/img3";
import { Img4 } from "../../assets/img/img4";

const Section = () => {
  return (
    <>
      <div>
        <div className="section">
          Why choose Easybank?
          <p>We leverage Open Banking to turn your bank acount into your financial hub. Control your finances like never before.</p></div>
        </div>
      <div>
        <div className="row">
          <div className="column">
            <div> <Img1 /> </div>
            <div className="card">Online Banking</div>
            <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
          </div>
          <div className="column">
            <div> <Img2 /> </div>
            <div className="card">Simple Budgeting</div>
            <p>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
          </div>
          <div className="column">
            <div> <Img3 /> </div>
            <div className="card">Fast Onboarding</div>
              <p>We don’t do branches. Open your account in minutes online and start taking control of your finances right away. </p>
          </div>
          <div className="column">
            <div> <Img4 /> </div>
            <div className="card">Open API</div>
            <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier. </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section;