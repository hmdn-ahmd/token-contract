// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ERC20Token {
    string public name;
    string public symbol;
    uint256 public decimals;
    adress public owner;

    mapping(address => uint256) public balanceOf;

    event Transfer(address indexed from, addresss indexed to, uint256 value)

    constructor(
        string memory _name,
        string memory _symbol,
        uint256 _totalSupply,
        uint8 _decimals
    ) {
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
        totalSupply = _totalSupply * ( 10 ** uint256(_decimals));
        owner = msg.sender;
        balanceOf[msg.sender] = totalSupply;
        emit Transfer(adress(0), msg.sender, totalSupply);
    }

    modifier onlyOwner () {
        require(msg.sender == owner, "Function can only be called by the owner")

    }

    function transfer (address to, uint256 value) external returns (bool) {
        require( to != address(0),"Invalid recipient address");
        require(balanceOf[msg.sender] >= value, "Insufficient balance");

        balanceOf[msg.sender] -= value;
        balanceOf[to] += value;

        emit Transfer(msg.sender, to, value)
        return true;
    }
}
