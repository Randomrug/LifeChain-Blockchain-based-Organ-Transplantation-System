# 🧬 LifeChain

### Blockchain-Based Organ Transplantation System

Hi 👋
Welcome to **LifeChain**, a decentralized organ transplantation management system built using Ethereum smart contracts, Truffle, Ganache, MetaMask, and Web3.js.

LifeChain replaces opaque, centralized transplant coordination systems with a transparent, trust-driven, blockchain-based workflow where every action is verifiable, immutable, and governed collectively.

---

## 🌍 Project Overview

Organ transplant systems demand transparency, trust between hospitals, secure data handling, and clear audit trails.

LifeChain ensures that every stage — from donor registration to final approval and logistics tracking — is recorded on-chain, preventing tampering and unauthorized modifications.

---

## ⚙️ System Working (End-to-End Flow)

1. Smart contracts (`OrganTransplant.sol`) are compiled and deployed using Truffle to a blockchain network (Ganache for development).
2. The frontend connects to MetaMask for wallet authentication.
3. Role-based access is determined (Owner / Hospital / Patient / Donor).
4. User actions trigger Web3.js calls to smart contract functions.
5. Transactions are signed via MetaMask and executed on the blockchain.
6. Contract state updates permanently and emits events.
7. The frontend reflects updated status in real time.

There is no traditional backend server — the blockchain acts as the backend logic layer.

---

## 🧠 Core Modules

### 🏥 Hospital Module

Registers hospitals, assigns trust scores, and enables voting participation. Trust scores evolve based on behavior.

### 🧍 Patient Module

Registers transplant requests including blood type and organ requirement. Data is immutably stored on-chain.

### ❤️ Donor Module

Stores donor information and organ availability.

### 🔗 Matching Engine

Validates compatibility (blood type, organ requirement, status) and creates structured match records.

### 🗳 Voting & Governance

Registered hospitals vote on transplant approvals. Majority consensus finalizes decisions. All votes are permanently recorded.

### 🚚 Logistics Tracking

Tracks transplant lifecycle stages (Inactive → In Transit → Delivered) ensuring complete visibility.

---

## 🔄 System Integration Architecture

Frontend (HTML + Web3.js)
↓
MetaMask Wallet
↓
Smart Contract (Solidity)
↓
Ethereum Blockchain (Ganache/Testnet)

The frontend acts as an interaction layer, MetaMask signs transactions, and the smart contract enforces all system logic.

---

## 🦸 The Role of Solidity

`OrganTransplant.sol` is the core of the system. It manages:

* Identity validation
* Workflow transitions
* Compatibility verification
* Governance voting
* Reputation scoring
* State integrity

All transplant decisions are enforced by code, not by centralized authorities.
Every state transition is deterministic, secure, and immutable.

---

## ⚡ System Efficiency

* Decentralized governance eliminates single-point control.
* Immutable storage ensures transparent audit trails.
* Automated compatibility checks reduce manual verification delays.
* Enum-based state management optimizes contract storage.
* Structured data handling reduces redundant blockchain writes.

The system is designed to minimize gas consumption while maintaining logical clarity and security.

---

## 🏗 Technology Stack

* Solidity
* Truffle
* Ganache
* Web3.js
* MetaMask
* Bootstrap

---

Ping me at **[rithikaarulmozhi21@gmail.com](mailto:rithikaarulmozhi21@gmail.com)**

With love,
**Rangomrug** 
