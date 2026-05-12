// src/App.js
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HospitalDashboard from "./components/HospitalDashboard";
import PatientDashboard from "./components/PatientDashboard";
import "./styles.css";

function App() {
  const [role, setRole] = useState(null); // hospital | patient | new | disconnected
  const [walletAddress, setWalletAddress] = useState(""); // Renamed from 'wallet' for clarity
  const [contract, setContract] = useState(null); // New state for the contract instance
  const [provider, setProvider] = useState(null); // New state for the provider instance (optional, but useful)

  return (
    <div>
      <Navbar
        setRole={setRole}
        setAddress={setWalletAddress} // Pass setWalletAddress
        setContract={setContract}    // Pass setContract
        setProvider={setProvider}    // Pass setProvider
      />

      <div style={{ padding: "20px" }}>
        {role === null && <p>🔗 Connecting wallet...</p>}
        {role === "disconnected" && (
          <p style={{ color: "red" }}>Please connect your MetaMask wallet to interact with the system.</p>
        )}

        {/* Pass both walletAddress and contract to the dashboards */}
        {role === "hospital" && (
          <HospitalDashboard walletAddress={walletAddress} contract={contract} provider={provider} />
        )}
        {role === "patient" && (
          <PatientDashboard walletAddress={walletAddress} contract={contract} provider={provider} />
        )}
        
        {/* If 'new', wallet connected but not registered.
            The HospitalDashboard will likely show registration options. */}
        {role === "new" && (
          <HospitalDashboard walletAddress={walletAddress} contract={contract} provider={provider} />
        )}
      </div>
    </div>
  );
}

export default App;