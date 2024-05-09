import { ethers } from 'ethers';

//function to deploy token 

async function deployToken(
    name: string,
    symbol: string,
    totalSupply: number,
    decimals: number
) {
    //connecting to Etherium Network(infura)
    const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/22148e2c72184517b279125db1ec6319')
    const signer =provider.getSigner();

    // fetching balance of the user
    const balance= await signer.getBalance();
    console.log('ETH balance before deployment:', ethers.utils.formatEther(balance))

    //compiling the contract
    const factory = new ethers.ContractFactory(
        [
          // Solidity code for ERC20 token contract
          `
          // SPDX-License-Identifier: MIT
          pragma solidity ^0.8.0;
      
          contract MyToken {
              string public name;
              string public symbol;
              uint256 public totalSupply;
      
              constructor(string memory _name, string memory _symbol, uint256 _totalSupply) {
                  name = _name;
                  symbol = _symbol;
                  totalSupply = _totalSupply;
              }
          }
          `
        ],
        signer
      );

      //deploy the contract
      const contract = await factory.deploy(name, symbol, totalSupply, decimals)
      await contract.deployed()

        // Output link to scanner for the transaction
        console.log('Transaction hash:', contract.deployTransaction.hash);
        console.log('Transaction link:', `https://ropsten.etherscan.io/tx/${contract.deployTransaction.hash}`);
    
        // ETH balance after deployment
        const balanceAfter = await signer.getBalance()
        console.log('ETH balance after deployment:', ethers.utils.formatEther(balanceAfter))
    }

        async function main(){
            try{
            await deployToken('project-token','ptk', 1000, 18)
            console.log('deployed!')
        } catch (error) {
            console.error('error deploying token:',error)
        }
        }
         main()
        

