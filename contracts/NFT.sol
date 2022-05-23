// SPDX-License-Identifier: MIT

pragma solidity ^0.8.1;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract NFT is ERC721URIStorage{
    using Counters for Counters.Counter;
    Counters.Counter private tokenId;

    constructor() ERC721("BreakingBad", "BB"){}

    function mint(address recipientAddress, string memory _tokenURI) public returns (uint256 newItemId){
        tokenId.increment();
        newItemId = tokenId.current();
    _safeMint(recipientAddress, newItemId);
    _setTokenURI(newItemId, _tokenURI);
    }
}


