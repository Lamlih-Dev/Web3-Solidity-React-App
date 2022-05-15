import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import React from "react";

const ServiceCard = ({ icon, title, subtitle, backgroundColor }) =>{
    return(
        <div className="service-card text-white white-glassmorphism">
            <div className="icon">
                <div className="icon-holder" style={{background: backgroundColor}}>
                    { icon }
                </div>
            </div>
            <div className="service-card-content">
                <h3 className="title">{ title }</h3>
                <p className="subtitle">{ subtitle }</p>
            </div>
        </div>
    );
}

const Services = () =>{
    return(
        <div className="services container">
            <div className="row">
                <div className="col-md-6 d-flex flex-row flex-column align-items-start justify-content-center">
                    <h1 className="text-white text-gradient">Services that <br /> we continue to improve</h1>
                </div>
                <div className="col-md-6 d-flex flex-row flex-column align-items-start justify-content-center">
                    <ServiceCard 
                        icon={<BsShieldFillCheck fontSize={21} className="text-white" />} 
                        title="Security Guaranteed"
                        subtitle="Security is guaranteed. we always maintain privacy and maintain the quality of our products."
                        backgroundColor="#2952E3"
                    />
                    <ServiceCard 
                        icon={<BiSearchAlt fontSize={21} className="text-white" />} 
                        title="Best Exchange Rates"
                        subtitle="Security is guaranteed. we always maintain privacy and maintain the quality of our products."
                        backgroundColor="#8945F8"
                    />
                    <ServiceCard 
                        icon={<RiHeart2Fill fontSize={21} className="text-white" />} 
                        title="Fastest Transactions"
                        subtitle="Security is guaranteed. we always maintain privacy and maintain the quality of our products."
                        backgroundColor="#F84550"
                    />
                </div>
            </div>
        </div>
    );
}

export default Services;