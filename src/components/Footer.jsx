import React from "react";

const Footer = () =>{
    return(
        <div className="footer container">
            <hr />
            <div className="row">
                <div className="col-md-6">
                    <h3>
                        <a className="brand" href="#">CRYPTOWORL</a>
                    </h3>
                </div>
                <div className="col-md-6">
                    <div className="row text-center">
                        <div className="col-md-3"><a href="#">Market</a></div>
                        <div className="col-md-3"><a href="#">Exchange</a></div>
                        <div className="col-md-3"><a href="#">Tutorials</a></div>
                        <div className="col-md-3"><a href="#">Wallets</a></div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <p> Come Join Us / info@cryptoworld.com <br /> ©CRYPTOWORLD 2022. All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Footer;