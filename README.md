# 🧬 LifeChain

### Blockchain-Based Organ Transplantation System

## 🌍 Why This Project? Why Blockchain?

Organ transplantation systems require extreme levels of trust, transparency, and coordination between multiple independent hospitals. Traditional centralized systems face challenges such as data tampering risks, lack of transparency in approvals, and limited auditability.

LifeChain leverages blockchain technology as a solution to these problems by ensuring:

* Immutable medical workflow records
* Transparent voting and approval mechanisms
* Decentralized governance across hospitals
* Secure and tamper-proof lifecycle tracking

This project is built **end-to-end**, covering the complete transplant journey — from hospital registration and donor/patient onboarding to compatibility matching, voting approval, and real-time organ transportation tracking.

---

## ⚙️ System Working (End-to-End Flow)

1. Smart contracts (`OrganTransplant.sol`) are compiled and deployed using Truffle to a blockchain network (Ganache for development).
2. The frontend connects to MetaMask for wallet authentication.
3. Role-based access is determined (Owner / Hospital / Patient / Donor).
4. Users register hospitals, donors, and patients directly on-chain.
5. The system validates compatibility and creates donor–patient matches.
6. Registered hospitals participate in decentralized voting.
7. Upon approval, logistics tracking begins and status updates are stored on-chain.
8. Every action is permanently recorded and reflected in the frontend interface.

There is no centralized backend server — the blockchain enforces the workflow logic.

---

## 🧠 Core Modules

### 🏥 Hospital Module

Registers hospitals, manages trust scores, and enables participation in governance voting.

### 🧍 Patient Module

Allows patients to register transplant requests with blood type and organ requirements stored immutably.

### ❤️ Donor Module

Handles donor registration and organ availability tracking.

### 🔗 Matching Engine

Performs compatibility checks and creates structured transplant match records.

### 🗳 Voting & Governance

Implements decentralized decision-making where hospitals approve transplant matches through majority voting.

### 🚚 Logistics Tracking

Tracks organ transportation stages (Inactive → In Transit → Delivered) ensuring full lifecycle transparency.

---

## 🔄 System Integration Architecture

Frontend (HTML + Web3.js)
↓
MetaMask Wallet
↓
Smart Contract (Solidity)
↓
Ethereum Blockchain (Ganache/Testnet)

The frontend acts as the interaction layer, MetaMask signs transactions, and the smart contract executes and enforces all rules.

---

## 🦸 The Role of Solidity

`OrganTransplant.sol` is the backbone of LifeChain. It governs:

* Identity and role validation
* Transplant workflow state transitions
* Compatibility verification
* Decentralized voting logic
* Trust and reputation scoring
* Secure state management

All transplant decisions are enforced by deterministic smart contract logic, ensuring fairness, auditability, and integrity.

---

## ⚡ System Efficiency

* Eliminates single-point control through decentralized governance
* Stores immutable records for full audit transparency
* Automates compatibility and approval workflows
* Uses structured storage and enum-based state transitions for gas efficiency
* Reduces operational overhead by replacing manual verification layers

LifeChain demonstrates how blockchain can securely coordinate multi-entity healthcare workflows with efficiency and trust.

---

Heyyy guyssss 👋
Any queries, collaborations, or suggestions — feel free to ping me at **[rithikaarulmozhi21@gmail.com](mailto:rithikaarulmozhi21@gmail.com)**

— **Randomrug** 🚀
