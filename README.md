# Aptfund
Beyond Fair Funding: Ensuring True Impact with Dominant Assurance for Everyone’s Success

## Overview

Aptfund is the first-ever fundraising platform built on the Aptos blockchain. Our platform leverages quadratic funding and dominance assurance contracts to ensure that projects not only receive funds democratically but also meet their fundraising goals. Aptfund provides a unique mechanism where donors are incentivized to help projects reach their goals, ensuring no project is left underfunded.

## Table of Contents

| **Section**                    | **Description**                                                                                   |
|--------------------------------|---------------------------------------------------------------------------------------------------|
| **[Overview](#overview)**                   | An introduction to Aptfund, highlighting its unique features and purpose.                        |
| **[Features](#features)**                   | Detailed explanation of key features like Quadratic Funding and Dominant Assurance Contracts.    |
| **[Problem Statement](#problem-statement)**          | Discussion of the limitations of traditional crowdfunding platforms and the issues Aptfund addresses. |
| **[Solution](#solution)**                   | Explanation of how Aptfund solves the problem with Dominant Assurance Contracts.                 |
| **[Links](#links)**                      | Links to live demo, video, documentation, and Devfolio submission.                               |
| **[Folder Structure](#folder-structure)**           | Overview of the dApp's directory structure, including frontend, Move contracts, and related files. |
| **[Tools and Technologies](#tools-and-technologies)**     | List of technologies and frameworks used in the development of Aptfund.                          |
| **[Getting Started](#getting-started)**            | Instructions for setting up the project, including prerequisites and installation steps.         |
| **[Installation](#installation)**               | Detailed steps to clone the repository, install dependencies, and configure the environment.     |
| **[Running the DApp](#running-the-dapp)**           | Guide to starting the development server and initializing the Move account.                      |
| **[Additional Commands](#additional-commands)**        | List of available Aptos CLI commands and their usage.                                            |


## Features

- **Quadratic Funding**: Ensures fair and democratic distribution of funds based on the unique number of contributors.
- **Dominant Assurance Contract**: Protects investors by providing refunds and bonuses based on their contribution time if the project does not meet its funding goal.
- **Early Donor Incentives**: Encourages early donations by offering bonuses if the funding goal is not met.
- **More Donations**: This structure encourages more donations, as early donors are incentivized by the promise of a full refund with a bonus, while late donors are motivated to help the project reach its goal to avoid only receiving a partial refund.

## Problem Statement

Popular crowdfunding platforms like Gitcoin ensure that everyone receives fair funding by using a Quadratic Funding algorithm. This algorithm allocates funds in a round based on the number of unique donors rather than the total amount of money a project is receiving. While this method ensures that every project gets a share of the overall funding, it doesn’t guarantee that the share will be sufficient for the project to fully achieve its goals.

For example, let’s say a project has a goal of raising 100k USDC to reach a specific milestone. After participating in a quadratic funding round, the project may receive only 20k USDC, even though they now have funds, this amount falls short of what’s needed to achieve their milestone.

## Solution

To address this issue, we’ve taken an extra step by introducing a Dominant Assurance Contract (DAC). This contract ensures that if a project doesn’t meet its funding goal after the quadratic funding round, the money will be refunded to donors with a bonus as a reward for their support.

Here’s how it works: DAC divides donors into two groups—early donors and late donors. Early donors receive a complete refund with an additional bonus, while late donors receive a partial refund. This structure encourages more donations, as early donors are incentivized by the promise of a full refund with a bonus, while late donors are motivated to help the project reach its goal to avoid only receiving a partial refund.

In this way, we’ve taken the best practices from the crowdfunding world and implemented our own unique approach to ensure everyone’s success.


## Links

- **Live Link**: https://aptfund-2mzp.vercel.app/
- **Video Link**: https://www.youtube.com/watch?v=q3AERLvFcLI
- **Docs Link**: https://docs.google.com/document/d/1PZn6ox9QvFaL-QTHShqZ5U87tYOLj5AskFwbLnjnTZw/edit?usp=sharing
- **Devfolio Submission Link**: https://devfolio.co/projects/apt-fund-6d01

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
