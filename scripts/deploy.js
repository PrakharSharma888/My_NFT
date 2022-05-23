const { ethers } = require("hardhat");

async function main(){
    const NFT = await ethers.getContractFactory("NFT");
    const deployNFT = await NFT.deploy();
    console.log(`Deplyed at : ${deployNFT.address}`);
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});