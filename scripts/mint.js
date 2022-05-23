const { ethers } = require('hardhat');
const hre = require('hardhat');

async function main(){
    const tokenURI = "https://gateway.pinata.cloud/ipfs/QmZTrXo37aLk66nWVNmiySNZBWpgbEGDfvMKuQJVzQvHT5"

    const nftContractFactory = await ethers.getContractFactory("NFT");
    const nftContractInstance = new ethers.Contract(
        "0x9259A1758adf242eA6c9A4b2F0146f2f68c4d34A",
        nftContractFactory.interface
    )
        
    const signer = await ethers.provider.getSigner();
    const signerAddress = await signer.getAddress()
    const txn = await nftContractInstance.connect(signer).mint(signerAddress,tokenURI)

    txn.wait();
    console.log(`Your transaction has been successfully broadcasted! The transaction hash is ${txn.hash}`);
    if (hre.network.config.url !='http://127.0.0.1:8545'){
        console.log(`Please Follow this https://testnets.opensea.io/${signerAddress}`)
    }
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});