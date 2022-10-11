require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const URL = process.env.URL;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",
  networks: {
    hardhat: {
      forking: {
        url: URL,
      }
    }
  }
};
