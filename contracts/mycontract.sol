// pragma is the directive through
// which we write the smart contract
pragma solidity 0.8.13;
							
// Creating a contract
contract mycontract{
	uint public x = 10;
	function set(uint _x) public {
		x = _x;
	}

	// Specify the owner's address
	// which is publicly visible
	address payable public Owner;

	// mapping is created for mapping
	// address=>uint for transaction
	mapping(address=>uint) Amount;
	
	// Defining a constructor
	// constructor is payable, which means
	// it cost ether during the deployment
	constructor() public payable{
					
	// msg.sender is the address of the
	// person who has currently deployed contract
		Owner = payable(msg.sender);
					
		// msg.value is the value of the ether we are
		// giving during the deploying of contract
		Amount[Owner] = msg.value;
	
	}

	// modifier(onlyOwner) it will check
	// the required condition, here condition
	// is the only owner can call this function
	modifier onlyOwner(){

		// require is used whether the
		// owner is the person who has
		// deployed the contract or not
		require(Owner == msg.sender);
		_;
	}

// Defining a function which is
// used to send money
function sendMoney(
	address payable receiver, uint amount)
					public payable onlyOwner {

		// receiver account balance should be>0
		require( receiver.balance>0);
		
		// amount should not be negative,
		// otherwise it will throw error
		require(amount>0);
						
		Amount[Owner] -= amount;
		Amount[receiver] += amount;
	}

	// Defining function for Receiving money
	// to our smart contract account
	// not to an owners account
	function ReceiveMoney() public payable{
	}

	// This function will return the current
	// balance of the contract account owned
	// by the owner
	function CheckBalance_contractAccount()
	public view onlyOwner returns(uint){
		return address(this).balance;
	}
	

	// Defining a function that will return
// the current balance of the owner's account
function CheckBalance()
	public view onlyOwner returns(uint){
		return Amount[Owner];
}
	
}
