import React from "react";
import { BannerImage } from "../../assets/img/bannerImage";
import './banner.css'

const Banner = () => {
    return (
        <div className="content-banner">
            <div className="banner-column1">
                <div className="bannerGrid">
                    Next generation digital banking
                 <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving. budgeting, nvesting, and much more.</p>
                 <button>Request invite</button>
                  </div>
            </div>
            <div className="banner-column2"><BannerImage /> </div>
        </div>
    )
}

export default Banner;