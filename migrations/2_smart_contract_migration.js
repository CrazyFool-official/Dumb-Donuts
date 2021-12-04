const DumbDonuts = artifacts.require("DumbDonuts");

module.exports = function (deployer) {
  deployer.deploy(DumbDonuts, "Dumb Donuts", "DD", "https://gateway.pinata.cloud/ipfs/QmWnL2Hh8JSjz8LoSv499HaJNy51FhwEWLBQGmvhum6DbN/");
};
