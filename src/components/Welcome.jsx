import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum, SiTheirishtimes, SiUfc } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Loader from "./Loader";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";

const Welcome = () =>{
    const { connectWallet, currentAccount, formData, sendTransaction, handleChange, isLoading } = useContext(TransactionContext);

    const handleSubmit = (e) =>{
        
        const { addressTo, amount, keyword, message } = formData;
        e.preventDefault();

        if(!addressTo || !amount || !keyword || !message) return;
        sendTransaction();        
    }

    return(
        <div className="welcome row">
            <div className="col-md-6 px-4-py-12 d-flex flex-row flex-column align-items-start justify-content-center">
                <h1 className="text-gradient">Send Crypto <br /> across the world</h1>
                <p className="text-white">
                    Explore the cryto world. Buy and sell cryptocurrencies easily on CRYPTOWORLD !
                </p>
                {!currentAccount && (
                <button type="button" onClick={connectWallet} className="btn btn-primary">
                    Connect Wallet
                </button>)}
                <table class="text-white">
                    <tr>
                        <th>Reliability</th>
                        <th>Security</th>
                        <th>Ethereum</th>
                    </tr>
                    <tr>
                        <td>Web 3.0</td>
                        <td>Low Fees</td>
                        <td>Blockchain</td>
                    </tr>
                </table>
            </div>
            <div className="col-md-6 px-4-py-12 d-flex flex-row flex-column align-items-start justify-content-center">
                <div className="eth-card white-glassmorphism text-white d-flex align-items-center justify-content-center">
                    <div className="card-logo d-flex align-items-center justify-content-center">
                        <SiEthereum fontSize={21} color="#fff" />
                    </div>
                    <div className="card-info">
                        <BsInfoCircle fontSize={17} color="#fff" />
                    </div>
                    <div className="card-wallet">
                        <p>{!currentAccount ? "Please Connect Your Wallet" : shortenAddress(currentAccount)}</p>
                    </div>
                    <div className="card-network">
                        <p>Ethereum</p>
                    </div>
                </div>
                <div className="form-container blue-glassmorphism">
                    <div className="form-group">
                        <input type="text" className="form-control white-glassmorphism" placeholder="Address To" name="addressTo" onChange={(e)=>{handleChange(e,e.target.name)}}/>
                        <input type="number" className="form-control white-glassmorphism" placeholder="Enter The Amount (ETH)" name="amount" onChange={(e)=>{handleChange(e,e.target.name)}}/>
                        <input type="text" className="form-control white-glassmorphism" placeholder="Keyword (GIF)" name="keyword" onChange={(e)=>{handleChange(e,e.target.name)}}/>
                        <input type="text" className="form-control white-glassmorphism" placeholder="Enter The Message" name="message" onChange={(e)=>{handleChange(e,e.target.name)}}/>
                        
                        <hr />

                        {isLoading ? (
                            <Loader/>
                        ) : (
                            <button type="button" onClick={handleSubmit} className="btn text-white">
                                Send Now
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;