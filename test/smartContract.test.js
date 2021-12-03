const { assert } = require("chai");

const DumbDonuts = artifacts.require("./DumbDonuts.sol");

require("chai").use(require("chai-as-promised")).should();

contract("DumbDonuts", (accounts) => {
  let dumbDonuts;

  before(async () => {
    dumbDonuts = await DumbDonuts.deployed();
  });

  describe("dumbDonuts deployment", async () => {
    
    it("deploys successfully", async () => {
      const address = await dumbDonuts.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, "");
    });

    it("has correct name", async () => {
      const name = await dumbDonuts.name();
      assert.equal(name, "DumbDonuts");

    });

    it("mints successfully", async () => {
      const mint = await dumbDonuts.mint();
    });

  });

});
