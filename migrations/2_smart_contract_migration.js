const DumbDonuts = artifacts.require("DumbDonuts");

module.exports = function (deployer) {
  deployer.deploy(DumbDonuts, "Dumb Donuts", "DD", "https://gateway.pinata.cloud/ipfs/QmVAKgeUfyK86xjxZWy92h6nvxC6ZSr1MaLGhtG9Btrhme/");
};
