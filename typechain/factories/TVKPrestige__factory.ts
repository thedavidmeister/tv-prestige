/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { TVKPrestige } from "../TVKPrestige";

export class TVKPrestige__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TVKPrestige> {
    return super.deploy(overrides || {}) as Promise<TVKPrestige>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TVKPrestige {
    return super.attach(address) as TVKPrestige;
  }
  connect(signer: Signer): TVKPrestige__factory {
    return super.connect(signer) as TVKPrestige__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TVKPrestige {
    return new Contract(address, _abi, signerOrProvider) as TVKPrestige;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum IPrestige.Status[2]",
        name: "change",
        type: "uint8[2]",
      },
    ],
    name: "StatusChange",
    type: "event",
  },
  {
    inputs: [],
    name: "BRONZE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CHAD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "COPPER",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DIAMOND",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GOLD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "JAWAD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "NIL",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PLATINUM",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SILVER",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TVK",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "levels",
    outputs: [
      {
        internalType: "uint256[9]",
        name: "",
        type: "uint256[9]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "enum IPrestige.Status",
        name: "newStatus",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "setStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "statusReport",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "statuses",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610faf806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80638a5c26301161008c578063bca3f0c811610066578063bca3f0c81461035d578063d865a5c81461037b578063e00fd543146103d3578063e3e55f08146103f1576100ea565b80638a5c2630146101ff57806390f5f0cd146102e7578063af11c1f014610305576100ea565b80634334a8a5116100c85780634334a8a5146101495780634ecf518b1461016757806356f0593a146101ad57806378409979146101cb576100ea565b8063206545c2146100ef578063367f50a01461010d5780633e4bee381461012b575b600080fd5b6100f761040f565b6040518082815260200191505060405180910390f35b61011561041d565b6040518082815260200191505060405180910390f35b610133610422565b6040518082815260200191505060405180910390f35b610151610430565b6040518082815260200191505060405180910390f35b61016f61043e565b6040518082600960200280838360005b8381101561019a57808201518184015260208101905061017f565b5050505090500191505060405180910390f35b6101b56104d2565b6040518082815260200191505060405180910390f35b6101d36104e0565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102e56004803603606081101561021557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803560ff1690602001909291908035906020019064010000000081111561025f57600080fd5b82018360208201111561027157600080fd5b8035906020019184600183028401116401000000008311171561029357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506104f8565b005b6102ef610737565b6040518082815260200191505060405180910390f35b6103476004803603602081101561031b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061073c565b6040518082815260200191505060405180910390f35b610365610754565b6040518082815260200191505060405180910390f35b6103bd6004803603602081101561039157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610762565b6040518082815260200191505060405180910390f35b6103db6107de565b6040518082815260200191505060405180910390f35b6103f96107eb565b6040518082815260200191505060405180910390f35b69152d02c7e14af680000081565b600081565b69021e19e0c9bab240000081565b6934f086f3b33b6840000081565b610446610f06565b6040518061012001604052806000815260200160008152602001683635c9adc5dea00000815260200169010f0cf064dd59200000815260200169021e19e0c9bab2400000815260200169054b40b1f852bda00000815260200169152d02c7e14af680000081526020016934f086f3b33b68400000815260200169d3c21bcecceda1000000815250905090565b69054b40b1f852bda0000081565b73d084b83c305dafd76ae3e1b4e1f1fe2ecccb398881565b6000600881111561050557fe5b82600881111561051157fe5b1415610585576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f4552525f4e494c5f53544154555300000000000000000000000000000000000081525060200191505060405180910390fd5b600061059084610762565b9050600061059e82436107f9565b905060008160088111156105ae57fe5b905060008560088111156105be57fe5b90506105ca848261085b565b935060008290505b81811015610621576020810243901b602082027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff63ffffffff16901b19861617945080806001019150506105d2565b50836000808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506106718784888861089c565b7fe765a8fc6bca3a0cb57e76753ddbb51c450e9aac1a626da74a8119beb9b6d0798760405180604001604052808660088111156106aa57fe5b60088111156106b557fe5b81526020018960088111156106c657fe5b60088111156106d157fe5b815250604051808373ffffffffffffffffffffffffffffffffffffffff16815260200182600260200280838360005b8381101561071b578082015181840152602081019050610700565b505050509050019250505060405180910390a150505050505050565b600081565b60006020528060005260406000206000915090505481565b69d3c21bcecceda100000081565b6000806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050600081146107b457806107d6565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5b915050919050565b683635c9adc5dea0000081565b69010f0cf064dd5920000081565b600080600090505b6008811015610845578263ffffffff166020820285901c63ffffffff1611156108385780600881111561083057fe5b915050610855565b8080600101915050610801565b5060088081111561085257fe5b90505b92915050565b600080602083029050600081827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff901c901b90508085179250505092915050565b60006108a661043e565b8460088111156108b257fe5b600981106108bc57fe5b6020020151905060006108cd61043e565b8460088111156108d957fe5b600981106108e357fe5b602002015190508181106109405761093b86306109008486610991565b73d084b83c305dafd76ae3e1b4e1f1fe2ecccb398873ffffffffffffffffffffffffffffffffffffffff16610a14909392919063ffffffff16565b610989565b6109888661094e8484610991565b73d084b83c305dafd76ae3e1b4e1f1fe2ecccb398873ffffffffffffffffffffffffffffffffffffffff16610ad59092919063ffffffff16565b5b505050505050565b600082821115610a09576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b818303905092915050565b610acf846323b872dd60e01b858585604051602401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610b77565b50505050565b610b728363a9059cbb60e01b8484604051602401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610b77565b505050565b6060610bd9826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610c669092919063ffffffff16565b9050600081511115610c6157808060200190516020811015610bfa57600080fd5b8101908080519060200190929190505050610c60576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180610f50602a913960400191505060405180910390fd5b5b505050565b6060610c758484600085610c7e565b90509392505050565b606082471015610cd9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180610f2a6026913960400191505060405180910390fd5b610ce285610e27565b610d54576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b60208310610da45780518252602082019150602081019050602083039250610d81565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114610e06576040519150601f19603f3d011682016040523d82523d6000602084013e610e0b565b606091505b5091509150610e1b828286610e3a565b92505050949350505050565b600080823b905060008111915050919050565b60608315610e4a57829050610eff565b600083511115610e5d5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610ec4578082015181840152602081019050610ea9565b50505050905090810190601f168015610ef15780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b9392505050565b60405180610120016040528060099060208202803683378082019150509050509056fe416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c5361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a264697066735822122042969c09cebb69698eea92bc582ebe94f77a50db07e4bc19e965865d284f64c764736f6c634300060c0033";
