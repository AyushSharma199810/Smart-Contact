// const Web3 = require("web3");
// const web3 = new Web3("http://localhost:7545");
// const ethers = require("ethers");
async function metamask() {
    if(typeof window.ethereum != "undefined") {
     await ethereum.request({method: "eth_requestAccounts"});
  
    // document.getElementById("connect").innerHTML = "Connected";
}};

async function execute() {
    //address
    //contract ABI(blueprint)
    //function
    //node connection
    const contractaddress = "0xF7A165DdA3a40401f960CBAE19F27527c8F4F93d";
    const abi =[
        {
          "inputs": [],
          "stateMutability": "payable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "Owner",
          "outputs": [
            {
              "internalType": "address payable",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "x",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_x",
              "type": "uint256"
            }
          ],
          "name": "set",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address payable",
              "name": "receiver",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "sendMoney",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "ReceiveMoney",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "CheckBalance_contractAccount",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "CheckBalance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ]


const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner(); 

const contract = new ethers.Contract(contractaddress,abi,signer);
const value = document.getElementById("number").value; 
await contract.set(value).then(console.log);

}

// module.exports = {
//     metamask,
//     execute
// };