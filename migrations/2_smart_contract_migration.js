const DumbDonuts = artifacts.require("DumbDonuts");

module.exports = function (deployer) {
  deployer.deploy(DumbDonuts, "Dumb Donuts", "DD", "https://gateway.pinata.cloud/ipfs/QmRTC1vTS4gAtV3N6yccgtSb9i4RSadkPSBiVuEjC7KUZJ/");
};
