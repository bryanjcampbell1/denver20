import Web3 from 'web3';


let ethereum = window.ethereum;
let web3 = window.web3;

async function getEthereum(){
	 await ethereum.enable();
}

getEthereum();

export web3 = new Web3(web3.currentProvider);