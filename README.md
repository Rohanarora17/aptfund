# Aptfund - A Fundraising Platform on Aptos

## Overview

Aptfund is the first-ever fundraising platform built on the Aptos blockchain. Our platform leverages quadratic funding and dominance assurance contracts to ensure that projects not only receive funds democratically but also meet their fundraising goals. Aptfund provides a unique mechanism where donors are incentivized to help projects reach their goals, ensuring no project is left underfunded.

## Features

- **Quadratic Funding**: Ensures fair and democratic distribution of funds based on the number of contributors.
- **Dominance Assurance Contract**: Protects investors by providing refunds and bonuses based on their contribution time if the project does not meet its funding goal.
- **Early Donor Incentives**: Encourages early donations by offering bonuses if the funding goal is not met.

## Folder Structure

The boilerplate template provides a pre-made dApp folder structure with the following directories:

- **frontend**: Contains the React-based frontend code.
- **move**: Contains the Move smart contracts and related files.

## Tools and Technologies

- **React Framework**: Used for building the frontend of the dApp.
- **Vite**: A fast development tool to serve the dApp.
- **shadcn/ui + Tailwind**: Used for styling the dApp components.
- **Aptos TS SDK**: Provides TypeScript SDK for interacting with the Aptos blockchain.
- **Aptos Wallet Adapter**: Allows integration with Aptos wallets.
- **Node-based Move Commands**: Provides npm scripts to interact with the Move environment.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (>=14.x)
- npm (>=6.x)
- Aptos CLI

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-repo/aptfund.git
    cd aptfund
    ```

2. **Install dependencies:**

    Navigate to the `frontend` directory and install the required dependencies:

    ```bash
    cd frontend
    npm install
    ```

3. **Set up the Move environment:**

    Navigate to the `move` directory and install the Aptos CLI package:

    ```bash
    cd ../move
    npm install
    ```

4. **Configure the Module Address:**

    Before deploying your Move contracts, you need to set your module address in the `Move.toml` file.

    ```toml
    [addresses]
    aptfund = "0x63b291491eaace03eaebc33dd4d06d42f05c6d1a3e495acd48fe917da3fbb945"
    ```

    Replace `<your_module_address>` with the given module address.

### Running the DApp

1. **Start the development server:**

    From the `Root` directory, start the Vite development server:

    ```bash
    npm run dev
    ```

    The dApp should now be running at `http://localhost:3000`.

2. **Initialize the Move account:**

    To initialize an account to publish the Move contract and configure the development environment, run the following command:

    ```bash
    cd ../move
    npm run move:init
    ```

3. **Publish the Move contract:**

    Once the account is initialized, you can publish the Move contract using:

    ```bash
    npm run move:publish
    ```

4. **Run Move unit tests:**

    To run the Move unit tests, execute:

    ```bash
    npm run move:test
    ```

5. **Compile the Move contract:**

    If you need to compile the Move contract manually, use:

    ```bash
    npm run move:compile
    ```

### Additional Commands

For a list of all available Aptos CLI commands, you can run:

```bash
npx aptos
