import type { HardhatUserConfig }  from "hardhat/types";
import "@nomiclabs/hardhat-waffle";
import "hardhat-typechain";
import * as fs from 'fs';

const privatekey = fs.readFileSync(".secret").toString().trim();

const config: HardhatUserConfig = {
  networks: {
    /*
    hardhat: {
      blockGasLimit: 100000000,
      allowUnlimitedContractSize: true,
    }
  }, */
    hardhat: {
        forking: {
          url: "https://eth-mainnet.alchemyapi.io/v2/0T6PEQIu3w1qwoPoPG3XPJHvKAzXEjkv",
          blockNumber: 12206000
        },
        chainId: 1337,
        mining: {
          auto: false,
          interval: 2000
        }
    },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [privatekey]
    }
  },
  solidity: {
    compilers: [{ version: "0.7.3", settings: {} }],
  },
};
export default config;
