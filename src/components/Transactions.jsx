import React,{ useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import useFetch from "../hooks/useFetch";

const TransactionCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) =>{
    const gifUrl = useFetch({keyword});

    return(
        <div className="col-md-4">
            <div className="col-md-12">
                <div className="transaction-card-content">
                    <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noopener noreferrer">
                        <p>From: {shortenAddress(addressFrom)}</p>
                    </a>
                    <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noopener noreferrer">
                        <p>To: {shortenAddress(addressTo)}</p>
                    </a>
                    <p>Amount: {amount} ETH</p>
                    {message && (
                        <>
                            <br />
                            <p>Message: {message}</p>
                        </>
                    )}
                    <img src={gifUrl || url} alt="gif" />
                    <p className="timestamp">{timestamp}</p>
                </div>
            </div>
        </div>
    );
}

const Transactions = () =>{
    const{ currentAccount, connectWallet, transactions } = useContext(TransactionContext);

    return(
        <div className="transactions container px-5">
            {currentAccount ? (
                <><h3 className="text-white text-center">Latest Transactions</h3>
                <div className="row g-3 text-white ">
                    {transactions.reverse().map((transaction, i) =>(
                        (transaction.addressFrom.toLowerCase() === currentAccount.toLowerCase() && <TransactionCard key={i} {...transaction} />)
                    ))}
                </div> </>
            ) : (
                <><h3 className="text-white text-center">Connect Your Account To See The Latest Transactions</h3>
                <div className="connect-btn-holder">
                    <p className="connect-wallet" onClick={connectWallet}>Connect You're Wallet</p>
                </div></>
            )} 
        </div>
    );
}

export default Transactions;