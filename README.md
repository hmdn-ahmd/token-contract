# ERC20 Token Deployment

This project is a Node.js program written in TypeScript for deploying an ERC20 token contract on the Ethereum blockchain. It uses ethers.js library to interact with the Ethereum network and Infura as the JSON-RPC provider.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (https://nodejs.org/)
- npm (Node.js package manager)

### Installation

1. Clone the repository:
   
   git clone :  git@github.com:hmdn-ahmd/token-contract.git


2. Navigate to the project directory:
   
   cd token-contract

   
3. Install dependencies:
   
   npm install

4. Set env.variables

   for Testnet 

### Configuration

1. Obtain an Infura project ID:
   - Sign up for an account on Infura (https://infura.io/)
   - Create a new project and obtain the project ID

2. Replace the Infura project ID:
   - Open `deployToken.ts` file
   - Replace `'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'` with your actual Infura project ID

### Usage

To deploy the ERC20 token contract, run the following command:

npm run deploy

### Example

npm run deploy

### Output

After running the deployment command, the program will:
- Connect to the Ethereum network using Infura
- Fetch and output the ETH balance of the deploying account
- Compile the ERC20 token contract
- Deploy the contract with the specified parameters (name, symbol, total supply, decimals)
- Output the transaction hash and a link to Etherscan for the transaction
- Fetch and output the ETH balance of the deploying account after deployment

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Feel free to customize the README file further based on your project's specific requirements and features. You can add more sections such as "Features", "Contributing", "Acknowledgments", etc., depending on the complexity and scope of your project.
