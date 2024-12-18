import React, { useEffect, useState } from "react";
import "../../styles.css";

const AccountOverview = () => {
  const [balance, setBalance] = useState(0);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setEmail(user.email);  
      setBalance(user.balance); 
    } else {
      setErrorMessage("User not logged in.");
    }
  }, []);

  return (
    <div className="account-overview">
      

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <div className="account-card">
        
        <div className="balance-card">
          <h4 className="section-heading">Account Balance</h4>
          <p className="balance-amount">₹{balance}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountOverview;
