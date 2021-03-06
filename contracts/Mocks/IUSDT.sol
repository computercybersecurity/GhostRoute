pragma solidity 0.5.17;

contract BEP20Basic {
    uint public _totalSupply;
    function totalSupply() public view returns (uint);
    function balanceOf(address who) public view returns (uint);
    function transfer(address to, uint value) public;
    event Transfer(address indexed from, address indexed to, uint value);
}

/**
 * @title BEP20 interface
 */
contract IUSDT is BEP20Basic {
    function allowance(address owner, address spender) public view returns (uint);
    function transferFrom(address from, address to, uint value) public;
    function approve(address spender, uint value) public;
    event Approval(address indexed owner, address indexed spender, uint value);
}
