import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Transactions from "./components/Transactions";
import Welcome from "./components/Welcome";
import { TransactionProvider } from './context/TransactionContext';

const App = () => {
  return (
    <TransactionProvider>
      <div className="gradient-bg-welcome">
        <div className="container">
          <Navbar />
          <Welcome />
        </div>
      </div>
      <div className="gradient-bg-services">
        <Services />
      </div>
      <div className="gradient-bg-transactions">
        <Transactions />
      </div>
      <div className="gradient-bg-footer">
        <Footer />
      </div>
    </TransactionProvider>
  );
}

export default App;
